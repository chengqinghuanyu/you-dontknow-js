var myModule = (function massager() {
    var modules = {};

    function define(name, deps, impl) {
        for (var i = 0; i < deps.length; i++) {
            //console.log(modules[deps[i]])
            deps[i] = modules[deps[i]]
        }
        /*使用了函数的apply方法回调了自身*/
        modules[name] = impl.apply(impl, deps);
        //console.log(modules)
    }

    function get(name) {
        return modules[name]
    }


    return {
        define: define,
        get: get
    }
})()
myModule.define("bar", [], function() {
    function hello(who) {
        return "Let me introduce: " + who;
    }
    return {
        hello: hello
    };
});
myModule.define("cood", ['bar'], function(m) {
    var hgu = "HGU"

    function yourName() {
        console.log(m.hello(hgu).toUpperCase());
    }
    return {
        yourName: yourName
    }
})

myModule.define("upper", [], function() {

    function myUpper(vls) {
        return vls.toUpperCase();
    }
    return {
        myUpper: myUpper
    }
})

myModule.define('gril', ['upper', 'bar'], function(upper, bar) {
    var myeryk = 'myRike';

    function myps() {
        console.log(bar.hello(myeryk));
        console.log(bar.hello(upper.myUpper(myeryk)));
        console.log(upper.myUpper(bar.hello(myeryk)));
    }
    return {
        myps: myps
    }
})

//var bar = myModule.get("bar");
//var cood = myModule.get('cood');
var gril = myModule.get('gril');
//console.log(bar.hello("hippo"));
//cood.yourName();
gril.myps();
/*现在来谈谈模块模式的基本思路
模块的公用函数：
0）定义一个空对象
1）通过循环来给对象和对应的函数赋值
2）使用了立即执行函数
3）使用了回调函数
4）返回了模块可访问的接口
5）使用一个取值函数来返回函数模块
4、书写模块时的基本路子：
1）模块的名称，
2）模块的依赖，
3）模块的回调函数
5、模块的调用 
1）调用模块
*/

/*函数的apply方法主要用于回调函数来继承对象的
和call的区别是call的第二个以后的参数是值，
apply的第二个参数是个数组
*/