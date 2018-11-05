// js中对象的属性判定
// 判断一个属性是否存在于对象之中
let objs = {
    a: '123'
}
Object.prototype.hasOwnProperty.call(objs, "a");


//判断null
var a = null;
(!a && typeof a === "object"); // true