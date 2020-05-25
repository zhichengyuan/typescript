function isOdd(n) {
    return n % 2 === 0;
}
// let nums:number[] = [2,3,4];
let nums = [2, 3, 4];
let u;
u = {};
function printValues(obj) {
    const vals = Object.values(obj);
    vals.forEach(v => console.log(v));
}
printValues({
    name: 'tom',
    age: 33
});
let name; //联合类型name可以是字符串或者undefined
if (typeof name === "string") {
    //类型保护
}
function printMenu() {
    console.log('1,登录');
    console.log('2,推出');
}
function throwError(msg) {
    throw new Error(msg);
}
let a;
let gender;
gender = "女";
let arr; //arr永远只能取值为一个空数组
let user;
user = {
    name: '212',
    age: 12
};
let tu;
tu = ['sds', 12];
let data = 'dsdsa';
let num = data;
let p;
p = {
    name: 'sdsd',
    age: 12,
    gender: '女'
};
function getUsers(g) {
    return [];
}
