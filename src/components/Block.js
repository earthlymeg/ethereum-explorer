import '../block.css'
import timeConvert from '../utils/timeConvert';
import { GiStoneBlock } from 'react-icons/gi'
function Block(props) {


  

    return (
        <div className="block-container">
            <div>
                <GiStoneBlock /> {props.block.number}
            </div>
            <div>
            Miner: {props.block.miner.substring(0,6)}...
            </div>
            <div>
                {timeConvert(props.block.timestamp)}
            </div>
        </div>
    )
}

export default Block;