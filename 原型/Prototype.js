/*
首先简单回顾一下第 5 章的结论: [
    [Prototype]
] 机制就是指对象中的一个内部链接引用 另一个对象



什么是原型链
[[Prototype]
] 机制就是指对象中的一个内部链接引用 另一个对象。
如果在第一个对象上没有找到需要的属性或者方法引用, 引擎就会继续在[[Prototype]] 关联的对象上进行查找。 同理, 如果在后者中也没有找到需要的引用就会继续查找它的[[Prototype]], 以此类推。 这一系列对象的链接被称为“ 原型链”。
*/

var anothor = {
    a: 2
};
var myObj = Object.create(anothor)
    /*
    所有普通的对象都源于 Object.prototype
    */

/*
如何查找原型链？
prototype的源头在哪？
*/

/*属性设置和屏蔽*/
myObj.foo = "尹鹏孝";

/*
1、如果myObj有foo属性，那么这条语句只会修改foo的属性值
2、如果foo既出现在myObj上有出现在prototype原型链上那么就会发生屏蔽，
myObj上的foo属性会屏蔽原型链上的所有foo，
3、如果foo不存在myObj中，prototype就会被遍历，
类似get的操作如果原型链上没找到foo就添加到myObj上，
如果原型链上层存在foo， myObj.foo = '尹鹏孝'
就会有些不同：
1）prototype原型链上存在foo普通数据访问属性且没有被标记为writable:true,那么就会直接在myObj上添加foo但是是屏蔽属性。
2）prototype原型链上存在foo普通数据访问属性且被标记为writable: false, 那么无法修改已有属性或者在 myObj 上创建屏蔽属性。 如果运行在严格模式下, 代码会 抛出一个错误。 否则, 这条赋值语句会被忽略。 总之, 不会发生屏蔽。
3）如果在[[Prototype]] 链上层存在foo并且它是一个setter(参见第3章), 那就一定会 调用这个 setter。 foo 不会被添加到(或者说屏蔽于) myObj, 也不会重新定义 foo 这 个 setter。
*/

/*
设置一个属性
*/