/*箭头函数
首先es6中的箭头函数不是使用funciton定义的
而是使用=>定义的
*/
function fon() {
    return (a) => {
        console.log(this.a)
    }
}
var obj = {
    a: 100,
}
var obj2 = {
    a: 200
}
var bar = fon.call(obj);
bar.call(obj2)

/*怎么写出优雅的this?
如果你经常编写this风格的代码, 但是绝大部分时候都会使用self = this或者箭头函数 来否定 this 机制, 那你或许应当:
1. 只使用词法作用域(箭头函数)并完全抛弃错误this风格的代码;
2. 完全采用this风格, 在必要时使用bind(..), 尽量避免使用self = this和箭头函数。
*/