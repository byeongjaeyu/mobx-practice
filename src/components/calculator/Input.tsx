import {observer} from 'mobx-react'
import store from '../../stores/calculator';

const Input:React.FC = () => {

    const calculate = (e:React.KeyboardEvent<HTMLInputElement>) => {
        store.calculator();
    }
    return (
        <input value={store.inputNumber === 0? store.number : store.inputNumber} onKeyDown={calculate} readOnly/>
    )
}

export default observer(Input);