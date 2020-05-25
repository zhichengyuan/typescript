function isOdd(n:number){
    return n % 2 === 0
}

// let nums:number[] = [2,3,4];

let nums:Array<number> = [2,3,4];

let u:object;

u = {};

function printValues(obj:object) {
    const vals = Object.values(obj);
    vals.forEach(v => console.log(v));
}

printValues({
    name:'tom',
    age:33
})
