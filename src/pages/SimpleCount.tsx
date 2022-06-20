import { observer } from "mobx-react"
import store from "../stores/count"
const SimpleCount = () => {
    return (
        <div>
            <strong style={{fontSize:'30px'}}>{store.number}</strong>
            <br/>
            <strong>square value = {store.double}</strong>
            <br/>
            <button onClick={()=>{store.increase()}}>+</button>
            <button onClick={()=>{store.decrease()}}>-</button>
        </div>
    )
}

export default observer(SimpleCount)