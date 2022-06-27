import React, { useEffect } from "react";
import store from "../../stores/calculator";

const Keypad:React.FC = () => {

    const onClickNumber = (e:React.MouseEvent<HTMLButtonElement>) => {
        const target = e.target as HTMLButtonElement;
        store.input(target.innerText);
    }

    const onClickOperator = (e:React.MouseEvent<HTMLButtonElement>) => {
        const target = e.target as HTMLButtonElement;
        store.setOperator(target.innerText);
    }

    const onClickCalculator = (e:React.MouseEvent<HTMLButtonElement>) => {
        store.calculator();
    }

    const onClickReset = (e:React.MouseEvent<HTMLButtonElement>) => {
        store.reset();
    }

    return (
        <div>
            <div style={{display:"flex"}}>
                <button onClick={onClickNumber} style={{width:"30px",height:"30px"}}>1</button>
                <button onClick={onClickNumber} style={{width:"30px",height:"30px"}}>2</button>
                <button onClick={onClickNumber} style={{width:"30px",height:"30px"}}>3</button>
            </div>
            <div style={{display:"flex"}}>
                <button onClick={onClickNumber} style={{width:"30px",height:"30px"}}>4</button>
                <button onClick={onClickNumber} style={{width:"30px",height:"30px"}}>5</button>
                <button onClick={onClickNumber} style={{width:"30px",height:"30px"}}>6</button>
            </div>
            <div style={{display:"flex"}}>
                <button onClick={onClickNumber} style={{width:"30px",height:"30px"}}>7</button>
                <button onClick={onClickNumber} style={{width:"30px",height:"30px"}}>8</button>
                <button onClick={onClickNumber} style={{width:"30px",height:"30px"}}>9</button>
            </div>
            <div>
                <button onClick={onClickOperator}>+</button>
                <button onClick={onClickOperator}>-</button>
                <button onClick={onClickOperator}>*</button>
                <button onClick={onClickOperator}>/</button>
                <button onClick={onClickCalculator}>=</button>
                <button onClick={onClickReset}>Reset</button>
            </div>
        </div>
    )
}

export default Keypad;