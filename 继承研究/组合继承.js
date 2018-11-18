/* 
集原型继承和构造继承

可以避免使用原型构造方法以外修改属性或者方法，也可以避免构造函数修改的不够灵活的缺点
*/
function Person() {
    this.head = "头部"
    this.emotion = ['笑', '哭', '哀', '乐']
}
Person.prototype.eat = function() {
    return '吃三次'
}
Person.prototype.sleep = function() {
    return '睡一次'
}
Person.prototype.run = function(params) {
    return '快跑'
}

function Sudents(id) {
    this.id = id;
    Person.call(this);
}

Sudents.prototype = new Person();
Sudents.prototype.constructor = Sudents;
var as = new Sudents(1234);
console.log(as.id)