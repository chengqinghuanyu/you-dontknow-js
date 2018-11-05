//42..toFixed(3); // "42.000"

//42.toFixed(3); // "42.000"
//数字的精度误差
if (!Number.EPSILON) {
    Number.EPSILON = Math.pow(2, -52);
}
Number.EPSILON(10)

function numbersCloseEnoughToEqual(n1, n2) {
    return Math.abs(n1 - n2) < Number.EPSILON;
}
var a = 0.1 + 0.2;
var b = 0.3;
numbersCloseEnoughToEqual(a, b);
numbersCloseEnoughToEqual(0.0000001, 0.0000002);


// 检测一个数是否是整数es6:isInteger
if (!Number.isInteger) {
    Number.isInteger = function(num) {
        return typeof num == "number" && num % 1 == 0;
    };
}

//安全整数
if (!Number.isSafeInteger) {
    Number.isSafeInteger = function(num) {
        return Number.isInteger(num) &&
            Math.abs(num) <= Number.MAX_SAFE_INTEGER;
    };
}

// 一个数字是否为NaN
if (!Number.isNaN) {
    Number.isNaN = function(n) {
        return n !== n;
    };
}

//判断两个值是否绝对相等
if (!Object.is) {
    Object.is = function(v1, v2) {
        // 判断是否是-0
        if (v1 === 0 && v2 === 0) {
            return 1 / v1 === 1 / v2;
        }
        // 判断是否是NaN 
        if (v1 !== v1) {
            return v2 !== v2;
        }
        // 其他情况
        return v1 === v2;
    };
}
// 如何清空一个数组
let arr = [1, 2, 3, 4];
arr.length = 0;

类型判定
Object.prototype.toString.call(null);
// "[object Null]"
Object.prototype.toString.call(undefined);
// "[object Undefined]"
Object.prototype.toString.call("abc");
// "[object String]"
Object.prototype.toString.call(42);
// "[object Number]"
Object.prototype.toString.call(true);
// "[object Boolean]"
Object.prototype.toString.call([1, 2, 3]);
// "[object Array]"
Object.prototype.toString.call(/regex-literal/i);
// "[object RegExp]"

// arr.slice(0,10);数组选定一段返回这段并且不会改变原有值

var a = "Hello World";
if (!~a.indexOf("ol")) { // true // 没有找到匹配!
}

// parseInt(100,10)