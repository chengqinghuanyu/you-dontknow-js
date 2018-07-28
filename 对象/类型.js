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