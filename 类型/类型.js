//六中基本类型和es6的新增类型Symbol
//String, Number, Boolean, undefined, null, Object, Symbol
var p = null;
if (!p && typeof p === 'object') {
    console.log('null is not null is a object');
}