//js bind方法的使用
//bind主要是用于修改this的指向
this.x = 9;
var module = {
    x: 81,
    getX: function() {
        return this.x;
    }
}
module.getX();
var vs = module.getX;
vs();
var ps = vs.bind(module);
ps();
/*
在 bind(arg1, arg2) 被调用时， 会创建一个新函数， 这个新函数的 this， 都是 arg1， 也就是第一个参数
*/