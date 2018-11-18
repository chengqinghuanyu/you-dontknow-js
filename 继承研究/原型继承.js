/* 原型继承 */
function Foo(who) {
    this.name = who;
}
Foo.prototype.idname = function() {
    return 'this name is' + this.name;
}

function Bar(who) {
    Foo.call(this, who)
}

Bar.prototype = Object.create(Foo.prototype);

Bar.speak = function() {
    console.log('hello this' + this.idname());
}


var b1 = new Bar('b1');
var b2 = new Bar('b2');