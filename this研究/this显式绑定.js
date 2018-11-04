/*为了修复this隐式绑定
使用 函数自带方法call,apply强制绑定this的指向
以解决this隐式绑定带来的混乱疑惑问题，让问题清晰明了
*/

/*显式绑定的定义：
使用call和apply方法传递第一个参数obj设定为this来绑定
接着调用时指定这个this，因为你可以直接指定this的绑定对象
*/

function ypx() {
    console.log(this.name);

}

var ypxObj = {
    name: '尹鹏孝',
    ypx: ypx
}

ypx.call(ypxObj);

/*硬性绑定*/
function lf() {
    console.log(this.attr);
}
var lfObj = {
    attr: '李芳-很有女人味'
}

var getHer = function() {
    lf.call(lfObj)
}
getHer();

//setTimeout(getHer, 0);
getHer.call(global);

function sayGood(somesthing) {
    console.log(this.age, somesthing);
    return 'her is Lifang ' + this.age + somesthing
}

var isPerfect = {
    age: 27
}

var me = function() {
    return sayGood.apply(isPerfect, arguments);
}

me('22');
console.log(me);



function loveisaLove(her) {
    console.log(this.love, her);
    return her + this.love
}

var loveObj = {
    love: 'love'
}
var bind = function(fn, obj) {
    return function() {
        fn.apply(obj, arguments);
    }
}

var mylove = bind(loveisaLove, loveObj);
var myNewLove = mylove('new-lf');
//console.log(myNewLove)


function happyDay(days) {
    console.log(this.happy, days);
    return this.happy + days;
}
var superDay = {
    happy: 'simle'
}
var metoo = happyDay.bind(superDay);
//console.log(metoo('2018+'));
var youtoo = metoo('2018+');
console.log(youtoo);


/*API绑定*/
function sayMyName(el) {
    console.log(this.name + this.id);
}

var myObj = {
    id: '_love_lf',
    name: '尹鹏孝'
}
var arr = [1, 2, 3];
arr.forEach(sayMyName, myObj);
var objbindthis = {
    a: 100,
    getA: a
}

function a() {
    console.log(this.a)
    return this.a
}
a.call(objbindthis)

//硬性绑定
function bind(fn, obj) {
    return function() {
        fn.apply(obj, arguments)
    }
}

function bindFn(sm) {
    console.log(this.a, sm)
    return this.a + sm;
}

var bindObj = {
    a: 2
}
var bindCallback = bind(bindFn, bindObj);
var bindVal = bindCallback(3);
console.log(bindVal)

function bindfoo(el) {
    console.log(el, this.id);
}
var bindobj = {
    id: "awesome"
};
// 调用 foo(..) 时把 this 绑定到 obj 
[1, 2, 3].forEach(bindfoo, bindobj);

[1, 2, 3].forEach(function(val) {
        console.log(val, this.bk)

    }, { bk: 'aaaß' })
    // 1 awesome 2 awesome 3 awesome
let m = {
    a: 100,
    b: function() {
        return '100'
    }
}

/*
forEach,和map都是数组的方法
forEach不会返回值，
map会有返回值，
forEach不会遍历空数组，map会遍历
forEach 
都会改变原始数组
参数相同第一个是当前数组的值，
第二个值是当前数组的下标
第三个参数是原始数组
匿名函数的this指向window
只能用于数组
*/

//使用空对象进行填充

function foods() {
    for (let i = 0; i < arguments.length; i++) {
        console.log("" + i + ":" + arguments[i])
    }
}
// 我们的 DMZ 空对象
var ø = Object.create(null); // 把数组展开成参数
foods.apply(ø, [2, 3]); // a:2, b:3
// 使用 bind(..) 进行柯里化 var bar = foo.bind( ø, 2 ); bar( 3 ); // a:2, b:3
/*
判断this 现在我们可以根据优先级来判断函数在某个调用位置应用的是哪条规则。 可以按照下面的
顺序来进行判断:
    1. 函数是否在new中调用(new绑定) ? 如果是的话this绑定的是新创建的对象。
var bar = new foo()
2. 函数是否通过call、 apply(显式绑定) 或者硬绑定调用 ? 如果是的话, this绑定的是 指定的对象。
var bar = foo.call(obj2)
3. 函数是否在某个上下文对象中调用(隐式绑定) ? 如果是的话, this绑定的是那个上 下文对象。
var bar = obj1.foo()
4. 如果都不是的话, 使用默认绑定。 如果在严格模式下, 就绑定到undefined, 否则绑定到 全局对象。
var bar = foo()
就是这样。 对于正常的函数调用来说, 理解了这些知识你就可以明白 this 的绑定原理了。
不过......凡事总有例外。
    
*/