
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

interface Condition {
    (n:number):boolean
}

function sum(numbers:number[],callBack:Condition){
    let s = 0;
    numbers.forEach(n => {
        if(callBack(n)){
            s += n;
        }
    })
}



interface A {
    t:string
}

interface B{
    t2:number
}
interface C extends A,B{
    t3:Boolean
}

let u:C ={
    t:'dss',
    t2:121,
    t3:true
}


type D = {
    t:string
}

type E = {
    t1:number
}

type F = {
    t2:Boolean
} & D & E

let n:F ={
    t:'sds',
    t2:true,
    t1:121
}