/*
this发生在调用的那个地方的堆栈里，
怎么查找堆栈？
使用debugger，打断点或者使用console.log()进行输出
*/
function bar() {
    debugger;
    console.log('bar');
    ps();
}

function ps() {
    debugger;
    console.log('bar->ps');
    mk();
}

function mk() {
    console.log('bar->ps->mk');
}
bar();


/*this的默认绑定*/
/*当使用严格模式是函数内部不能访问this的变量
在node环境下this不能被访问了
*/


function bks() {
    console.log(this.a);
}
var a = 10;
(function() {
    "use static"
    bks();
})()


function mko() {
    "use static"
    console.log(this.a);
}
mko();


/*隐式绑定*/
function web() {
    /*需要看调用这个this的上下文是什么==》当函数引 用有上下文对象时,隐式绑定规则会把函数调用中的 this 绑定到这个上下文对象*/
    console.log(this.a);
}
var obj = {
    a: 2,
    web: web
}
obj.web();
var myWeb = obj.web;
console.log('定义新a:');
var a = 'gobal a'
myWeb.apply(obj);
console.log('定义a完毕')
    /*对象的属性引用链中只有顶层或者说最后一层会影响调用位置*/
function myName() {
    console.log(this.name);
}
var nameObj = {
    name: '尹鹏孝',
    myName: myName
}
var nameObjNew = {
    name: '李芳',
    nameObj: nameObj
}

nameObjNew.nameObj.myName.call(nameObjNew);
//var ps = nameObj.myName;

function pdf() {
    console.log(this.year);
}

function getPdfYear(fn) {
    fn();
}

var pdfObj = {
    year: 2018,
    pdf: pdf
};
var year = 2019
getPdfYear(pdfObj.pdf);