// function test(target:new (...args:any[]) => object) {
//     console.log(target);
// } 

// @test
// class A {
//     prop1:string = '1';
//     constructor(public prop2:string){}
// }

// function test(str:string) {
//     return function (target:new (...args:any[]) => object) {
//         console.log(target);
//     } 
// }

// @test('这是一个类')
// class A {
//     prop1:string = '1';
//     constructor(public prop2:string){}
// }


type constructor = new (...args:any[]) => object;

function d1() {
    console.log('d1');
    return function (target:constructor) {
        console.log('d1 decorator')
    }
}
function d2() {
    console.log('d2');
    return function (target:constructor) {
        console.log('d2 decorator')
    }
}

@d1()
@d2()

class A {
    prop1:string = 'ds'
}