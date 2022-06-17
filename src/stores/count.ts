import { makeAutoObservable } from "mobx";

export interface Number {
    number: number;
}

const increase = (number:Number["number"]) => number + 1

const decrease = (number:Number["number"]) => number - 1

class Store {
    number: Number["number"] = 0;

    constructor() {
        makeAutoObservable(this);
    };

    increase() {
        this.number = increase(this.number)
    }

    decrease() {
        this.number = decrease(this.number)
    }
}

const store = new Store();
export default store;