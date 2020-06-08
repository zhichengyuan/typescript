// const a = "sdsd";
// let b:typeof a = "sdsd"

// class User{
//     loginId:string
//     loginpwd:string
// }

// const u = new User();
// const u2 = u;

// const A = User;


// function createUser(cls:typeof User) : User {
//     return new cls()
// }

// const u = createUser(User);

interface User {
    loginId:string
    loginpwd:string
    age:number
}

function printUserProperty(obj:User,prop:keyof User) {
    console.log(obj[prop])
}

const u = {
    loginId:"sasds",
    loginpwd:"sds",
    age:34
}

printUserProperty(u,"age");