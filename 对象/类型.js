/*js的类型
也叫语言类型六中基本类型
string、
number、
blooean、
object、
null、
undefined
*/

/*null被判定为object
是错误的这是js的一个bug：
null 有时会被当作一种对象类型, 但是这其实只是语言本身的一个 bug, 即对 null 执行 typeof null 时会返回字符串 "object"。
1 实际上, null 本身是基本类型。

*/

console.log(typeof null)
console.log(null === null)
console.log(typeof null === "object")
console.log(null === undefined)
    /*问我为什么？
    typeof null==="object"
    原理是这样的, 不同的对象在底层都表示为二进制, 在 JavaScript 中二进制前三位都为 0 的话会被判 断为 object 类型, null 的二进制表示是全 0, 自然前三位也是 0, 所以执行 typeof 时会返回“ object”
    */
    /*js内置对象
    Array,
    Number,
    Boolean,
    String,
    Object,
    Function
    Date,
    RegExp,
    Error
    */

// 判断一个属性是否存在于对象之中
let objs = {
    a: '123'
}
Object.prototype.hasOwnProperty.call(objs, "a");


// 遍历对象的key的方法：
// 1、in
// 2、hasOwnprototype
// 3、keys
// 4、getprototypeName
// 、区别是：in会遍历原型链上的key,hasOwnpeortotype只会遍历当前，keys是遍历可枚举，getprototypeName是遍历所有的可枚举
// Object.keys(..) 会返回一个数组,包含所有可枚举属性,Object.getOwnPropertyNames(..) 会返回一个数组,包含所有属性,无论它们是否可枚举。
// in 和 hasOwnProperty(..) 的区别在于是否查找 [[Prototype]] 链,然而,Object.keys(..) 和 Object.getOwnPropertyNames(..) 都只会查找对象直接包含的属性。