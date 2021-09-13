import Web3 from 'web3';
import '../web3.css';
import { useState } from 'react';

export default function Webz3() {

    var web3 = new Web3("https://mainnet.infura.io/v3/8037227268fb45909c7a6ca8f7778194");

    const [balance, setBalance] = useState(0);

    const getBalance = function () {
        let val = prompt('Enter eth address');
        web3.eth.getBalance(val)
            .then(val => web3.utils.fromWei(val,'ether')
            )
            .then(val => setBalance(val.substring(0,7)));

    }
    return (
        <div>
            
            <div>
                <button 
                className="act-bal-btn"
                onClick={getBalance}>
                    Get Account Balance
                </button>
            </div>
            <div>
                <h2>Your Balance: {balance} ETH </h2>
            </div>
        </div>
    )
}