/* 
圣杯继承
*/

function Animal() {}

function Cat() {}
var inherit = (function() {
    function F() {}
    return function(target, origin) {
        F.prototype = origin.prototype;
        target.prototype = new F();
        target.prototype.constructor = target;
    }
}())

inherit(Cat, Animal);

var cat = new Cat();
Animal.prototype.name = 'mao';
console.log(cat.name)