import { Animal, Lion, Tiger, Monkey, Dog } from "./animals";
import {hasFireShow, hasWisdomShow } from "./interfaces";

const animals:Animal[] = [
    new Lion('王富贵',12),
    new Tiger('坤坤',13),
    new Monkey('小刘',14),
    new Dog('旺财',18),
    new Dog('王d贵',12),
    
]

// 1.所有动物打招呼

// animals.forEach(u => {
//     u.sayHello();
// })



animals.forEach(a => {
    if(hasFireShow(a)) {
        a.singleFire();
        a.doubleFire();
    }
    if(hasWisdomShow(a)) {
        a.dance();
        a.suanshuti();
    }
})

