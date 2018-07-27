function foo() {
    console.log(global)
    console.log(this.a);
}
var a = 2;
foo.call(null, 3);


function tags(a, b) {
    console.log('a:' + a, 'b:' + b);
}

//tags.apply(null, [2, 3]);
var bak = tags.bind(null, 2);
bak('3');
/*更安全的this*/
var tg = {
    name: '胡',
    age: '雨衣'
}
var DMZ = Object.create(tg);

function pag(obj) {
    console.log('a:' + this.name + 'obj:' + obj.name, 'b:' + this.age + 'obj:' + obj.age)
}

var bigi = pag.apply(DMZ, [{
    name: '荔枝',
    age: 1500
}]);
var pd = {
    name: '苏轼',
    age: 800
}
console.log(typeof bigi)

/*通过Object.create(null)
创建一个安全的this不会污染全局的this
*/


/*偷梁换柱*/
function ni() {
    "use static"
    console.log(this.a);
}
var a = 2;
var o = {
    a: 3,
    ni: ni
}
var p = {
        a: 4
    }
    /*这种被称为间接引用*/
o.ni();
(p.ni = o.ni)();

/*函数的软绑定*/
if (!Function.prototype.softBind) {
    Function.prototype.softBind = function(obj) {
        var fn = this;
        var curried = [].splice(arguments, 1);
        var bound = function() {
            return fn.apply(
                (!this || this === (global || window)) ?
                obj : this, curried.concat.apply(curried, arguments)
            )
        }
        bound.prototype = Object.create(fn.prototype);
        return bound;
    }
};

function foo() {
    console.log("name: " + this.name);
}
var obj = {
        name: "obj"
    },
    obj2 = {
        name: "obj2"
    },
    obj3 = {
        name: "obj3"
    };
global.name = 'obj'
var fooOBJ = foo.softBind(obj);
fooOBJ(); // name: obj
obj2.foo = foo.softBind(obj);
obj2.foo(); // name: obj2 <---- 看!!!
fooOBJ.call(obj3); // name: obj3 <---- 看! 
setTimeout(function lop() {
    foo.call(obj)
}, 10);
//name:obj <----应用了软绑定