/* 
1、使用构造函数进行继承，创建一个构造函数，使用call,apply方法不灵活。之后修改的不能同步在之前的实例中
*/
function Parents(name, label) {
    this.name = name;
    this.label = label;
}
Parents.prototype.getLabel = function() {
    return this.label;
}

function Children(label) {
    Parents.call(this);
    this.label = label;
}