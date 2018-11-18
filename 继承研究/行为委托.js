/*
行为委托
*/
var Foo = {
    init: function(who) {
        this.name = who
    },
    idName: function() {
        return this.name;
    }
}

var Bar = Object.create(Foo);

Bar.speak = function() {
    console.log('hello' + this.idName());
}

var b1 = Object.create(Bar);

var b2 = Object.create(Bar);

b1.init('b1');
b2.init('b2');
b1.speak();
b2.speak();