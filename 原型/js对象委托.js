//没有使用和丑陋的或者说是js并不存在的一种类对象的方式来处理原型的继承
//而是使用了Object.create来关联对象，
//由此可见prototype是关联对象的桥梁而这个桥梁是使用Objec.create来构建的
//Object.prototype的值为null;如果没有找到将返回一个undefined

var Foo = {
    init: function init(name) {
        this.name = name;
    },
    getName: function() {
        return this.name
    }
};

var Bar = Object.create(Foo);
Bar.instal = function(name) {
    this.init(name);
};

Bar.showInfo = function() {
    return 'this is ' + this.name;
}
var mg = Object.create(Bar);
mg.instal('mg');

var pk = Object.create(Bar);
pk.instal('pk');
console.log(mg.showInfo());
console.log(pk.showInfo());

pk.age = 10;
pk.getAge = function() {
    return this.age;
}

console.log(pk.getAge())

//console.log(mg.getAge());