import { action, makeObservable, observable } from "mobx";
import { Number } from "./count";

export interface NumberandType extends Number {
    type: string
}

const increaseNumber = (number:Number["number"],additionalNumber:Number["number"]) => number + additionalNumber;

const decreaseNumber = (number:Number["number"],additionalNumber:Number["number"]) => number - additionalNumber;

class Store {
    number: NumberandType["number"] = 0;
    additionalNumber: NumberandType["number"] = 0;

    constructor() {
        makeObservable(this,{
            number: observable,
            additionalNumber: observable,
            increaseNumber: action,
            decreaseNumber: action,
        })
    };

    increaseNumber(type:NumberandType["type"]) {
        if(type==="default"){
            this.number = increaseNumber(this.number, this.additionalNumber);  
            this.additionalNumber = 0;        
        } else {
            this.additionalNumber = increaseNumber(this.additionalNumber, 1);
        }
    }

    decreaseNumber(type:NumberandType["type"]) {
        if(type==="default"){
            this.number = decreaseNumber(this.number, this.additionalNumber);          
            this.additionalNumber = 0;   
        } else {
            this.additionalNumber = decreaseNumber(this.additionalNumber, 1);
        }
    }

    reset() {
        this.number = 0;
        this.additionalNumber = 0;
    }
}

const store = new Store();

export default store;