import { IFireShow, IWisdomShow, IBalanceShow } from "./interfaces";

export abstract class Animal {
    singleFire() {
        throw new Error("Method not implemented.");
    }
    abstract type:string;

    constructor(
        public name:string,
        public age:number
    ) {}

    sayHello() {
        console.log(`各位观众大家好，我是${this.type},我叫${this.name},今年${this.age}了`)
    }
}


export class Lion extends Animal {
    type: string = "狮子"

}
export class Tiger extends Animal implements IFireShow {
    type: string = "老虎"
    singleFire(): void {
        console.log(`${this.name}穿越单火圈`)
    }
    doubleFire() {
        console.log(`${this.name}穿越双火圈`)
    }

}
export class Monkey extends Animal implements IBalanceShow,IFireShow {
    type: string = "猴子"
    dumuqiao(): void {
        console.log(`${this.name}表演了独木桥`)
    }
    zougangsi(): void {
        console.log(`${this.name}穿越走钢丝`)
    }
    singleFire(): void {
        console.log(`${this.name}穿越单火圈`)
    }
    doubleFire() {
        console.log(`${this.name}穿越双火圈`)
    }
   
}
export class Dog extends Animal implements IWisdomShow {
    
    type: string = "狗"
    dance(): void {
        console.log(`${this.name}表演跳舞`)
    }
    suanshuti(){
        console.log(`${this.name}表演算术题`)
    }
   

}