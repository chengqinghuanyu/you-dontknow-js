//promise的简单实现：：：：
//promise的发布订阅模式
var a = 10;

function m(a) {

    console.log(a);
}
m();
promise是处理函数异步执行和回调地狱的解决方法
一般而言promise有三种状态
pending等待状态
resolve完成
reject失败

还有一个then用于回调