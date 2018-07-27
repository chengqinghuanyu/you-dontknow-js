function thisFn(num) {
    console.log('thisFn:' + num);
    console.log(this);
    this.count++;
}

thisFn.count = 0;
for (var i = 0; i < 10; i++) {
    if (i > 5) {
        //thisFn(i)
        //thisFn.call(this, i)
        //thisFn.call(thisFn, i);
        thisFn.apply(thisFn, [i])
    }
}
console.log(thisFn.count);


/*一个经典 的this指向问题*/
function bar() {
    var a = 2;
    //console.log(a);
    this.fuck();
}

function fuck() {
    //console.log('aa');
    console.log(this.a);
    //console.log(this.a)
}

bar();


/*
什么是this？
this不是当前这个对象，也不是作用域。
this 实际上是在函数被调用时发生的绑定, 它指向什么完全取决于函数在哪里被调用。
this是当前调用的那个对象
*/