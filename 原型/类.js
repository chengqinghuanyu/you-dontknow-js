/*
function Foo(){

}

var me = new Foo();
中new的意义使用new是创建了一个和Foo关联的对象me,
但不是真正的创建而是间接创建
要直接创建需要Object.create(。。。)
*/


function Foo(name) {
    this.name = name;
}
Foo.prototype.myName = function() {
    return this.name
}
var a = new Foo('a');
var b = new Foo('b');
console.log(a.myName());
console.log(b.myName());

/*解释这段代码
this.name = name在使用new之后this的指向发生了变化
会给a,b各自添加一个name;并且使用了显示赋值

Foo.prototype.myName 根据原型链的机制
新赋值的对象中不存在 myName则给新添加一个myName的属性或者叫方法，
ta return了一个this.name = name;
（a，b都在被new之后添加了一个name）
*/


function Pk() {}
Pk.prototype = {};
var a = new Pk();
a.constructor === Pk;
a.constructor === Object;

/*
constructor指向了
Object因为根据原型链指向规则没有的确实指向了Object
而Object有这个属性。
那么要手动修改指向的话该怎么办？
请看下面
使用object定义一个属性来添加一个不可枚举的constructor属性来定义
且value指向Pk
Object.defineProperty(Foo.prototype, "constructor", {
    enumerable: false,
    writable: true,
    configurable: true,
    value: Pk // 让 .constructor 指向 Foo
});
*/