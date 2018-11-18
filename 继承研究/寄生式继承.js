/* 
寄生继承
方法1
*/
function object(o) {
    function F() {};
    F.prototype = o;
    return new F();
}

function CreateAnothor(org) {
    var clone = object(org);
    clone.sayhi = function() {
        console.log('hi');
    }
    return clone;
}

var person = {
    name: 'nik',
    friends: ['a', 'b']
}

var another = CreateAnothor(person);
another.sayhi();


//////////////////
/* 
寄生继承
方法2
*/
function Verhicle() {
    this.engin = 1;
}
Verhicle.prototype.ignition = function() {
    console.log('this is ignition');
}

Verhicle.prototype.driver = function() {
    this.ignition();
    console.log('发动了');
}

function Car(params) {
    var car = new Verhicle();
    car.engin = 4;
    var verDriver = car.driver;
    car.driver = function() {
        Verhicle.call(this);
        return car;
    };

}
var myCar = new Car();
myCar.driver();