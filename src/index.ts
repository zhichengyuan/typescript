import { Dictionary } from "./dictionary";

const dic = new Dictionary<string,number>();

dic.set('a',1)
dic.set('w',2)
dic.set('a',3)
dic.set('c',3)
dic.forEach((k,v) => {
    console.log(`${k}:${v}`)
})
console.log('当前键值数量为' + dic.size);
console.log(dic.has("a"))
dic.delete('c');
console.log('删除键值对c')
console.log('当前键值数量为' + dic.size);
dic.forEach((k,v) => {
    console.log(`${k}:${v}`)
})