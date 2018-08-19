//写一个继承
function MyName(name, address) {
    this.name = name;
    this.address = address;
}
MyName.prototype.address = function() {
    console.log(this.address);
}

function MyInfo(tel) {
    var mg = tel;
    if (typeof mg !== "undefined") {
        if (mg.toString().indexOf('0') > -1 || mg.indexOf('1') > -1) {
            mg = tel
        } else {
            mg = '010' + tel
        }
    }
    this.info = {
        name: this.name,
        address: this.address,
        tel: mg
    };
}
MyInfo.prototype = new MyName('尹鹏孝', '西安');
MyInfo.prototype.age = 30;
MyInfo.prototype.address = '中国北京';
MyInfo.prototype.family = function() {
    return "China";
}

/* var ypx = new MyInfo(899909);
var oldYpx = new MyName('尹鹏孝', '西安');
console.log(oldYpx);
console.log(ypx);
console.log(ypx.age);
console.log(ypx.family()); */


function MianShi(name, age) {
    this.name = name;
    this.age = age;
    this.year = new Date().getFullYear();
    this.colors = ['red', 'black', 'yellow'];
}

MianShi.prototype.detail = function(address) {
    return {
        name: this.name,
        age: this.age,
        year: this.year,
        address: address,
        enjoy: []
    }
}

function MianShiLiePin(name, age, address) {
    MianShi.call(this, name, age);
    this.address = address;
}

MianShiLiePin.prototype = new MianShi('尹鹏孝', 30);
MianShiLiePin.prototype.detail = function(address, arr) {
    return {
        name: this.name,
        age: this.age,
        year: this.year,
        address: address,
        enjoy: arr
    }
}

var ps = new MianShiLiePin('lopp', 33, '上海');
console.log(ps);
var oldPs = new MianShi('尹鹏孝', 30);
console.log(oldPs);
var mg = ['aaa', 'bbs', 'ccsd', 'yuilo']
console.log(ps.detail('陕西商洛', mg));
//console.log(oldPs.detail());




//继承的实现



function Mother(name) {
    this.name = name;
    this.sex = 'women';
    this.hasBabay = true
}
Mother.prototype.sayName = function() {
    console.log(this.name);
}

function Child(name, age) {
    Mother.call(this, name);
    this.age = age
};
Child.prototype = new Mother();
Child.prototype.constructor = Child;
Child.prototype.sayName = function() {
    console.log(this.name)
}
Child.prototype.setSex = function(sex) {
    this.sex = sex
}


var ypxs = new Child('尹鹏孝',
    30);
ypxs.setSex('men')

console.log(ypxs)
console.log(ypxs.sayName());



//原型继承的优化


function Foo(name) {
    this.name = name;
}

Foo.prototype.getName = function() {
    return this.name;
}

function Bar(name) {
    Foo.call(this, name);
}

//主要是在此处修改了new Foo的方式，并且使用Object.create(obj)关联prototype;比使用new Foo.prototype方便；且也没有重新指定对象对应的构造属性constructor
Bar.prototype = Object.create(Foo.prototype);
Bar.prototype.getBarName = function() {
    return this.name;
}
Bar.prototype.age = 18;
var jsBar = new Bar('js');
console.log(jsBar.getBarName());
console.log(jsBar.age);