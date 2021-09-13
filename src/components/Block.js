import '../block.css'
import timeConvert from '../utils/timeConvert';
// import { GiStoneBlock } from 'react-icons/gi'
function Block(props) {


  

    return (
        <div className="block-container">
            <div>
                <h3>Block Number: {props.block.number}</h3>
            </div>
            <div>
            <h3>Miner: {props.block.miner.substring(0,6)}...</h3>
            </div>
            <div>
                <h3>Mined On: {timeConvert(props.block.timestamp)}</h3>
            </div>
        </div>
    )
}

export default Block;