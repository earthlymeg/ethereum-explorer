import './App.css';
import { useWeb3 } from '@openzeppelin/network/react';
import RecentBlocks from './components/RecentBlocks';
import Webz3 from './components/Web3'
const infuraProjectId = '8037227268fb45909c7a6ca8f7778194';
function App() {
  const web3Context = useWeb3(`wss://mainnet.infura.io/ws/v3/${infuraProjectId}`);
  return (
    <div className="App">
      <div>
        <h1>Eth Peeper 🐣</h1>
        {/* <Web3Data title="Web3 Data" web3Context={web3Context} /> */}
      <Webz3/>
      </div>
      <div>
        <RecentBlocks/>
      </div>
    </div>
  );
}

export default App;
