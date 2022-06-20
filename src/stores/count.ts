import { action, computed, makeAutoObservable, makeObservable, observable } from "mobx";

export interface Number {
    number: number;
}

const increase = (number:Number["number"]) => number + 1

const decrease = (number:Number["number"]) => number - 1

class Store {
    number: Number["number"] = 0;

    constructor() {
        // makeAutoObservable(this);
        makeObservable(this,{
            number: observable,
            increase: action,
            decrease: action,
            double: computed,
        })
    };

    increase() {
        this.number = increase(this.number)
    }

    decrease() {
        this.number = decrease(this.number)
    }

    get double() {
        return this.number ** 2;
    }
}

const store = new Store();
export default store;