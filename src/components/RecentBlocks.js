import Web3 from 'web3';
import Block from './Block';
import '../recentblocks.css'
export default function RecentBlocks() {


    var web3 = new Web3("https://mainnet.infura.io/v3/8037227268fb45909c7a6ca8f7778194");


    const getRecentBlocks = async function () {
        let latest = await web3.eth.getBlockNumber();
        let range = [];
        const batch = new web3.eth.BatchRequest()

        for (let i = 10; i > 0; i--) {
            range.push(latest);
        
            latest--;
        }

      
        const total = range.length;
        let counter = 0;
        let blocks = [];
      
        await new Promise(function(resolve, reject){
          range.forEach(blockNumber => {
            batch.add(
              web3.eth.getBlock.request(blockNumber, (error, data) => {
                if (error) return reject(error);
      
                counter++;
                blocks.push(data);
      
                if (counter === total) resolve();
              })
            )
          });
      
          batch.execute()
        });
      
        return blocks

    }
    
    getRecentBlocks().then(console.log)
    
    return (
        <div>
            
            <h1>Recent Blocks</h1>
            <div className="container">
                container
                <Block/>
                <Block/>
                <Block/>
            </div>
        </div>
    )
}