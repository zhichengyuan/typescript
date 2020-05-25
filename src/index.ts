// function isOdd(n:number){
//     return n % 2 === 0
// }

// // let nums:number[] = [2,3,4];

// let nums:Array<number> = [2,3,4];

// let u:object;

// u = {};

// function printValues(obj:object) {
//     const vals = Object.values(obj);
//     vals.forEach(v => console.log(v));
// }

// printValues({
//     name:'tom',
//     age:33
// })

// ;

// let name:string | undefined; //联合类型name可以是字符串或者undefined

// if(typeof name === "string"){
//     //类型保护
// }


// function printMenu():void{
//     console.log('1,登录');
//     console.log('2,推出');
// }

// function throwError(msg:string) : never{
//     throw new Error(msg);
// }

// let a:'2';

// let gender:"男" | "女";
// gender = "女";

// let arr : [];//arr永远只能取值为一个空数组

// let user:{
//     name:string,
//     age:number
// }

// user = {
//     name:'212',
//     age:12
// }


// let tu:[string,number];
// tu = ['sds',12];

// let data : any = 'dsdsa';

// let num:number = data;




// type Gender = '男' | '女'
// type User = {
//     name:string,
//     age:number,
//     gender:"男"|"女"
// }

// let p:User

// p ={
//     name:'sdsd',
//     age:12,
//     gender:'女'
// }

// function getUsers(g:Gender):User[]{
//     return [];
// }



/**
 * 得到a*b的结果
 * @param a 
 * @param b 
 */
function combine(a:number,b:number) : number;
/**
 * 得到a+b的结果
 * @param a 
 * @param b 
 */
function combine(a:string,b:string) : string;
function combine(a:number | string,b:number | string): number | string {
    if(typeof a === "number" && typeof b === "number"){
        return a*b;
    }
    else if(typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    throw new Error("a和b必须是相同类型")
}

const result = combine("d","d")
const result1 = combine(1,1)


function sum1(a:number,b:number,c?:number) {
    if(c) {
        return a+b+c;
    }else{
        return a+b;
    }
}
sum1(1,2);
sum1(1,2,3);