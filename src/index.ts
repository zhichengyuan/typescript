// class User {
//     [prop:string]:any
//     constructor (
//         public name:string,
//         public age:number
//     ) {}

//     sayHello(){

//     }
// }

// const u = new User('tom',12);
// u.pid = 'sdsd';


class MyArray {
    [index:number]:string
    0 = '1'
    2 = 'sdsd'
    3 = 'fgfg'
    
}

const my = new MyArray();
my[4] = "2"