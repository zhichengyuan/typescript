interface hasNameProperty {
    name:string
}

/**
 * 将某个对象的name属性的每个单词的首字母大小，然后将该对象返回
 */

 function nameToUpperCase<T extends hasNameProperty>(obj:T):T {
     obj.name = obj.name
                .split(" ")
                .map(s => s[0].toUpperCase() + s.substr(1))
                .join(" ");
    return obj;
 }

 const o = {
     name:"kevin yuan",
     age:22,
     genden:"男"
 }

 let newO = nameToUpperCase(o);

 console.log(newO.name);