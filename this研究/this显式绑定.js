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