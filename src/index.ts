function d(target:any,key:string) {
    console.log(target,key);
    // console.log(target === A.prototype,key);
    if(!target.__props){
        target.__props = []
    }
    target.__props.push(key);
}


function enumerable (target:any,key:string,descriptor:PropertyDescriptor) {
    descriptor.enumerable = true
}

function useless(target:any,key:string,descriptor:PropertyDescriptor) {
    descriptor.value = function () {
        console.warn(key + '方法已过期');
    }
}


class A {
    @d
    prop1:string

    @d
    static prop2:string

    @enumerable
    @useless
    method1(){
        console.log('method1');
    }
    @enumerable
    method2(){

    }
}

// console.log((A.prototype as any).__props);

const a = new A();
// console.log((a as any).__props);
for (const key in a) {
    console.log('===' + key);
}
a.method1();