import {printObj, descriptor } from "./Descriptor";

@descriptor("用户")
class User{
    @descriptor('用户')
    loginId:string
    @descriptor('密码')
    loginPwd:string
}
const u = new User();
u.loginId = 'sss'
u.loginPwd = '123'
printObj(u);

// import "reflect-metadata";

// @Reflect.metadata('a',"一个类")
// @Reflect.metadata('a1',"一个类1")
// @Reflect.metadata('a2',"一个类2")
// class A {
//     @Reflect.metadata('prop','一个属性')
//     prop1:string
// }

// const obj = new A();
// console.log(Reflect.getMetadata('a',A))