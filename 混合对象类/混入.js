/*显式混入*/
function minx(org, cur) {
    for (var key in org) {
        if (!(key in cur)) {
            cur[key] = org[key]
        }
    }

    return cur;
}
var Vichl = {
    engine: 1,
    ignition: function() {
        console.log('turn out')
    },
    dirver: function() {
        console.log(this)
        this.ignition();
        console.log('moveing forward');
    }
}

var Car = minx(Vichl, {
    whell: 4,
    dirver: function() {
        console.log(this)
        Vichl.dirver.call(this);
        console.log('Rolling' + this.whell + 'wh');
    }
});
Car.dirver()


/*寄生继承*/
function Mybk() {
    this.whell = 10000;
}
Mybk.prototype.ignition = function() {
    console.log('启动');
}
Mybk.prototype.dirver = function() {
    this.ignition();
    console.log('引动了')
}

function MyCar() {
    var car = new Mybk();
    car.whell = 4;
    car.engine = 10;

    car.dirver = function() {
        //Mybk.call(this);
        //car;
        console.log('移动' + this.whell, this.engine + '轮子');
    }

    return car;
}
var myCar = new MyCar();
myCar.dirver();

/*隐式混入


*/

var something = {
    cool: function() {
        this.greeting = 'hh你好';
        this.count = 1;
    }
}
something.cool()
console.log(something.greeting);
console.log(something.count);

var anthor = {
    cool: function() {
        console.log(this)
        something.cool.call(this)
    }
}

anthor.cool();
console.log(anthor.greeting)
    //原型链prototype
    //[
    // [Prototype]
    //] 机制就是指对象中的一个内部链接引用 另一个对象。
    // 如果在第一个对象上没有找到需要的属性或者方法引用, 引擎就会继续在[[Prototype]] 关联的对象上进行查找。 
    // 同理, 如果在后者中也没有找到需要的引用就会继续查找它的[[Prototype]], 以此类推。 这一系列对象的链接被称为“ 原型链”。
    // 换句话说, JavaScript 中这个机制的本质就是对象之间的关联关系。