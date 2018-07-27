/*this绑定的优先级*/

/*
1、 默认绑定的优先级是四条规则中最低的
2、隐式和显式调用显示调用优先级高
*/

function origine() {
    console.log(this.name);
}

var obj = {
    name: '001',
    origine: origine
}
var obj1 = {
    name: '002',
    origine: origine
}

obj.origine();
var ps = obj.origine
ps();

obj1.origine();
origine.call(obj1);
origine.call(obj);

/*new和隐式调用的优先级*/
function house(som) {
    this.name = som;
}

var myhouse = {
    house: house
}
var myhousebir = {

}
myhouse.house('李芳')
console.log(myhouse.name);

myhouse.house.call(myhousebir, '刘红');
console.log(myhousebir.name);

var ypx = new myhouse.house('李芳');
console.log(myhouse.name);
console.log(ypx.name);

/*
new比隐式调用高
new和call / apply无法一起使用, 因此无法通过new foo.call(obj1) 来直接 进行测试。 但是我们可以使用硬绑定来测试它俩的优先级
*/

function testNewFn(age) {
    this.age = age
}

var test1 = {

};
var showTest = testNewFn.bind(test1);
showTest(28);
console.log(test1.age);
var showNewsTest = new showTest(27);
console.log(test1.age);
console.log(showNewsTest.age);

/*this的调用规则和判定：
new>显示调用>隐式调用>默认调用
具体怎么判断？
1. 函数是否在new中调用(new绑定) ? 如果是的话this绑定的是新创建的对象。
var bar = new foo()
2. 函数是否通过call、 apply(显式绑定) 或者硬绑定调用 ? 如果是的话, this绑定的是 指定的对象。
var bar = foo.call(obj2)
3. 函数是否在某个上下文对象中调用(隐式绑定) ? 如果是的话, this绑定的是那个上 下文对象。
var bar = obj1.foo()
4. 如果都不是的话, 使用默认绑定。 如果在严格模式下, 就绑定到undefined, 否则绑定到 全局对象。
var bar = foo()
就是这样。 对于正常的函数调用来说, 理解了这些知识你就可以明白 this 的绑定原理了。
不过......凡事总有例外。
*/