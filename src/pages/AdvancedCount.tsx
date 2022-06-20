import { observer } from "mobx-react"
import store from "../stores/advancedCount"
const AdvancedCount = () => {
    return (
        <div>
            <strong style={{fontSize:'30px'}}>Number : {store.number}</strong>
            <br/>
            <strong style={{fontSize:'30px'}}>AdditionalNumber : {store.additionalNumber}</strong>
            <hr/>
            <button onClick={()=>{store.increaseNumber("default")}}>Number에 AdditionalNumber +</button>
            <button onClick={()=>{store.decreaseNumber("default")}}>Number에 AdditionalNumber -</button>
            <br/>
            <button onClick={()=>{store.increaseNumber("additional")}}>AdditionalNumber +</button>
            <button onClick={()=>{store.decreaseNumber("additional")}}>AdditionalNumber -</button>
            <hr/>
            <button onClick={()=>{store.reset()}}>초기화</button>
        </div>
    )
}

export default observer(AdvancedCount)