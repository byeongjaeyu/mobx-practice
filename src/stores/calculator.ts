import { action, computed, makeObservable, observable } from 'mobx';

export interface Calculator {
    number:number;
    operator:string;
    inputNumber:number;
}

const calculator = (number:Calculator["number"],inputNumber:Calculator["inputNumber"],operator:Calculator["operator"]) => {
    if (operator === '+') return number + inputNumber;
    else if(operator === '-') return number - inputNumber;
    else if(operator === '*') return number * inputNumber;
    else return number/inputNumber;
}

class Store {
    number:Calculator["number"] = 0;
    operator:Calculator["operator"] = "";
    inputNumber:Calculator["number"] = 0;

    constructor() {
        makeObservable(this, {
            number: observable,
            operator: observable,
            inputNumber: observable,
            calculator: action,
            input: action,
            backspace: action,
            setOperator: action,
        })
    }

    calculator() {
        this.number = calculator(this.number,this.inputNumber,this.operator);
        this.inputNumber = 0;
        this.operator = ""
    }

    input(num:string) {
        console.log(num);
        this.inputNumber = Number(String(this.inputNumber)+num);
    }

    backspace() {
        this.inputNumber = Number(String(this.inputNumber).substr(0,String(this.inputNumber).length-1));
    }

    setOperator(operator:Calculator["operator"]) {
        if(this.number === 0) {
            this.number = this.inputNumber;
            this.inputNumber = 0;
        }
        this.operator = operator;
    }

    reset() {
        this.number = 0;
        this.inputNumber = 0;
        this.operator = "";
    }
}

const store = new Store();

export default store;