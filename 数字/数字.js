//判断NaN
Number.isNaN();

var a = 0 / 'f00';
var b = 'foo';
console.log(a);
console.log(b);
console.log(a === b);
console.log(a === a);

//判断一个类型是不是NaN;
if (!Number.isNaN) {
    Number.isNaN = function(num) {
        if (num !== num) {
            return true
        }
    }
}

//特殊的字符处理
var b = 1 / 0;
console.log(b) //Infinity
    //两个无穷数字相加结果是无穷数 nfinity;
console.log(b + b);
console.log(b / b); //很奇怪的是得到的结果是NaN;
console.log(1 / b); //结果是0；
console.log(0 / 0); //不是一个数字NaN

console.log(0 / b); //0


//-0和+0；数学思维
var m = 0 / -1;
var n = 0 / 1; //0也叫+0

console.log(m); //-0；
console.log(n); //0
console.log(m + 0); //0+(-0)=0;

console.log(m.toString()); //-0转换成字符结果为0

console.log(m + ""); //- 0 和空字符相加结果为0
console.log(String(m)); //-0和空字符相加结果为0
console.log(JSON.parse('0')); //0
console.log(JSON.parse('-0')); //-0
console.log(JSON.stringify(0)); //0
console.log(JSON.stringify(-0)); //0

console.log(-"0"); //-0
console.log(Number("-0")); //-0
console.log(-0 === 0) //居然为真

//正0和-0有什么意义呢？一般而言是在前面的-+表示一个标识，比如方向，比如>0或<0的温度。
//如何判断正0负0？借用-的Infiity
function isNegZero(n) {
    p = Number(n);
    return (0 === p) && (1 / p === -Infinity);
}
console.log(isNegZero(0));
console.log(isNegZero(-0));

console.log(0 > -0);
console.log(0 === -0);

//es6中使用Object.is(a,-0);
//Objec.is(a,NaN)
//来判断是否值-0是否是NaN

if (!Object.is) {
    Object.is = function(v1, v2) {
        //判断是否为0
        if (v1 === 0 && v2 === 0) {
            return 1 / v1 === 1 / v2;
        }
        //NaN
        if (v1 !== v1) {
            return v1 !== v2;
        }
        //其他情况
        return v1 === v2;
    }
}


//值和引用
function foos(x) {
    x.push(4);
    //console.log(x);
    x = [4, 5, 6, 7];
    x.push(8)
        //上面那两句话不会改变x的值，要改变使用下面的语法，原因是对象是复制的引用的指向而不是拥有那个对象的值，当将x重新赋值后

    //
    //我们向函数传递 m 的时候, 实际是将引用 m 的一个复本赋值给 x, 而 m仍然指向[1, 2, 3]。 在函数中我们可以通过引用x来更改数组的值(push(4) 之后变为[1, 2, 3, 4])。 但x = [4, 5, 6,7] 并不影响 m 的指向, 所以 m 仍然指向[1, 2, 3, 4]。


    x.length = 0;
    x.push(4, 5, 6, 7, 9);
    //console.log(x);
}

var m = [1, 2, 3];
//foos(m);
console.log(m);

//?怎么样才能不影响m的值呢？建议使用m.slice()//不带参数的slice是复制当前的数组的一个副本但不会改变当前数组；
foos(m.slice());
console.log(m)