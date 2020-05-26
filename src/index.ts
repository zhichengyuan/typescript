
// interface User {
//     name:string,
//     age:number,
//     sayHello:() => void
// }


// let u:User = {
//     name:'sdsd',
//     age:12,
//     sayHello(){
//         console.log('sdsds');
//     }
// }

// type Condition = {
//     (n:number):boolean
// }

// interface Condition {
//     (n:number):boolean
// }

// function sum(numbers:number[],callBack:Condition){
//     let s = 0;
//     numbers.forEach(n => {
//         if(callBack(n)){
//             s += n;
//         }
//     })
// }



// interface A {
//     t:string
// }

// interface B{
//     t2:number
// }
// interface C extends A,B{
//     t3:Boolean
// }

// let u:C ={
//     t:'dss',
//     t2:121,
//     t3:true
// }


// type D = {
//     t:string
// }

// type E = {
//     t1:number
// }

// type F = {
//     t2:Boolean
// } & D & E

// let n:F ={
//     t:'sds',
//     t2:true,
//     t1:121
// }


// interface User {
//     readonly id : string
//     name:string
//     age:number
// }

// let u:User = {
//     id:'123',
//     name:'sdfs',
//     age:12
// }

// const arr:readonly number [] = [12,12,32];

// const arr1: ReadonlyArray<number> = [2,3,4]


// interface Duck {
//     sound:'嘎嘎嘎',
//     swin():void
// }

// let person = {
//     name:"伪装成鸭子的人",
//     age:11,
//     sound:"嘎嘎嘎" as "嘎嘎嘎",
//     swin(){
//         console.log('正在游泳')
//     }
// }

// let duck:Duck = person;


// type Condition = {
//     (n:number):boolean
// }

interface Condition {
    (n:number,i:number):boolean
}

function sum(numbers:number[],callBack:Condition){
    let s = 0;
    for(let i = 0;i < numbers.length;i++) {
        const n = numbers[i];
        if(callBack(n,i)){
            s += n;
        }
    }
   
    return s;
}

const result = sum([2,2,3,4,5,11],n => n%2 !==0 );
console.log(result);