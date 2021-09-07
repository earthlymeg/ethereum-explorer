import Web3 from 'web3'
export default function RecentBlocks() {

    var web3 = new Web3("https://mainnet.infura.io/v3/8037227268fb45909c7a6ca8f7778194");


    // const getRecentBlocks = async function () {
    //     // const latest = await web3.eth.getBlockNumber();
    //     for (var i=0; i < 10; i++) {
    //         console.log(web3.eth.getBlock(web3.eth.blockNumber - i));
    //       }


    // }

    for (var i=0; i < 10; i++) {
        console.log(web3.eth.getBlock(web3.eth.blockNumber - i));
      }

    return (
        <div>
            <h1>Recent Blocks</h1>
        </div>
    )
}