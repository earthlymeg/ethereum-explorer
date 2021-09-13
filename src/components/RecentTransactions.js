import Web3 from 'web3';
// import Block from './Block';

import { useState, useEffect } from 'react';


export default function RecentTransactions() {


    var web3 = new Web3("https://mainnet.infura.io/v3/8037227268fb45909c7a6ca8f7778194");
      const [recentTransactions, setrecentTransactions] = useState([]);

    const getrecentTransactions = async function () {
        let latest = await web3.eth.getBlockNumber();
        let block = await web3.eth.getBlock(latest);
        //store last 10 transactions
        let range = [];
        const batch = new web3.eth.BatchRequest()


        let count = block.transactions.length - 1


        for (let i = 10; i > 0; i--) {
            range.push(block.transactions[count]);

            count--;
        }
        
        //iterate through range of transactions and get DATA 

        const total = range.length;
        let counter = 0;
        let blocks = [];

        await new Promise(function (resolve, reject) {
          range.forEach(transactionHash => {
            batch.add(
              web3.eth.getTransaction.request(transactionHash, (error, data) => {
                if (error) return reject(error);

                counter++;
                blocks.push(data);

                if (counter === total) resolve();
              })
            )
          });

          batch.execute()
        });
        setrecentTransactions(blocks);
        return blocks;

    }

    useEffect(() => {
        getrecentTransactions()
            .catch((err) => console.log(err))

        console.log('hello from useeffect')

    }, [])

    return (
        <div className="recent-blocks">
            {console.log('hello from render')}
            <div className="container">
                <h2>Recent Transactions</h2>

                {/* {recentTransactions.length > 0 &&
          recentTransactions.map((block) => {
            return (
              <Block
                block={block}
              />
            )

          })
        } */}

            </div>
        </div>
    )
}