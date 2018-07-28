var myObj = {
    a: 'good'
}
console.log(myObj.a);
console.log(myObj['a']);
/*两种访问方式的区别
.属性访问
['...']键访问
属性访问的属性必须是字符串并符合标识符的命名规范
键访问则不用考虑，且能够进行构造键名称
*/
/*
在对象中属性名是字符串
*/

var myObject = {};
myObject[true] = true;
myObject[3] = '3';
myObject[myObject] = 'hello,word';
console.log(myObject['true'])
console.log(myObject['3'])
console.log(myObject['[object Object]'])

var prox = "ypx_";
var books = {
    [prox + 'name']: '尹鹏孝',
    [prox + 'age']: 29
}

console.log(books['ypx_name'])
console.log(books['ypx_age']);
/*属性和方法
对象的属性定义一个函数引用，
对象的函数是引用，
对象没有方法，只能说函数和方法可以互换
*/

/*数组
如果试图给函数添加一个看起来像数字的属性，那么这个属性会变成数组下标
*/
var myArr = ['good', 890, 'gold'];
myArr['2'] = 'hello';
console.log(myArr.length);
console.log(myArr[2]);
console.log(myArr);
/*复制对象深复制
如果JSON安全就使用JSON.parse(JSON.stringify.(对象))

浅复制：
var myObj = Object.assign({},obj)
使用assign方式对象中原始的属性不能被复制
*/

/*对象的属性描述符
var bk = {
    a:2
}
Object.getOwnPropertyDescriptor(bk,"a")
*/
var bk = {
    a: 2,
    mgd: [1, 2, 3]
}
console.log(
    Object.getOwnPropertyDescriptor(bk, 'mgd'));
/*
{
    value: [1, 2, 3],
    writable: true,
    enumerable: true,
    configurable: true
}
writeable: 可读
enumerable: 可枚举
configerable: 可配置
*/


var lifang = {};
Object.defineProperty(lifang, "name", {
    value: '李芳',
    writable: false,
    configurable: true,
    enumerable: true
})
console.log(lifang.name);
lifang.name = "刘红"
console.log(lifang);


var liuhong = {
    age: 28
};
liuhong.name = "刘红";
Object.defineProperty(liuhong, 'age', {
    value: 27,
    writable: true,
    configurable: true,
    enumerable: true
});
console.log(liuhong);
liuhong.age = 30
console.log(liuhong)
    /* 
    不能配置的意思是不能再使用defineProperty修改其中的可配置属性
    Object.defineProperty(liuhong, 'age', {
        value: 27,
        writable: true,
        configurable: true,
        enumerable: true
    }); */
    /*
        configurable: false
        会禁止删除 可配置的属性
        */

delete liuhong.age

console.log(liuhong);

/*
enumerable是属性是否会出现在for in中
*/

var lifangNew = {
    age: 27,
    address: '北京',
    tel: 18878909876
};

Object.defineProperty(lifangNew, 'address', {
    writable: true,
    configurable: true,
    enumerable: false
});


for (var j in lifangNew) {
    console.log(lifangNew[j])
}


/*不可变属性*/


var liuhongNew = {

}

Object.defineProperty(liuhongNew, 'FOREVER', {
    value: 28,
    writable: false,
    configurable: false
});
liuhongNew.FOREVER = "30";
console.log(liuhongNew);
/*禁止扩展*/

var mdadaha = {
    name: '马打哈'
}
Object.preventExtensions(mdadaha);
mdadaha.ader = 16;
console.log(mdadaha.ader);
/*密封seal:调用了禁止扩展preventExtensions并将可配置configurable设置为false，但可以修改属性的值*/
Object.seal(mdadaha);
console.log(mdadaha);
/*冻结
调用密封seal,并设置writable为false,不可写

如何深度冻结：在一个属性上冻结然后再循环出所有属性冻结
*/

/*get和put*/
var myGirlfrend = {
    name: '李芳',
    age: 28
}

console.log(myGirlfrend.name);

/*put算法会检查对象属性是否存在，是否是可写，是否是严格模式*/

/*getter,setter*/

/*访问描述符，数据描述符
访问描述符js会忽略对象的属性writable，value关注的是configurable和enumerable
*/

var goodGirl = {
    get name() {
        return '李芳'
    }

}
Object.defineProperty(goodGirl, 'age', {
    get: function() {
        return this.name + 'love' + '尹鹏孝'

    },
    enumerable: true
});
console.log(goodGirl.age);
/*getter和setter成对出现类似一个函数的function*/
var myNewGirl = {
    get name() {
        return this._name_
    },
    set name(val) {
        this._name_ = val + 'love' + '尹鹏孝 too'
    }
}

myNewGirl.name = "李芳";
console.log(myNewGirl.name);


/*存在性,怎么检查对象存在性
对象的hasOwnProperty和in属性
hasOwnproperty,只会检查是否是在对象上不会检查是否在原型链上
in会检查是否在原型链上
*/

console.log(myNewGirl.hasOwnProperty('name'));

console.log('name' in myNewGirl);

/*如果使用hasOwnProperty来回调检查就可以实现及监察对象的属性和原型链的属性*/

console.log(Object.prototype.hasOwnProperty.call(myNewGirl, 'name'));

/*如何判定一个元素是否可以枚举*/
/*
方法一、使用 for in  和in。存在于in中但不存在在forin中。
方法二、使用Object.getPropertyNames(对象)、使用Object.keys(对象);
然后比对两个数组是否一样
方法三、使用对象.propertyIsEnumerable(’属性名‘);
        使用对象.propertyIsEnumerable(’属性名‘);

*/
/*object.keys是干什么用的呢？
Object.keys会返回一个可枚举的属性
*/


/*变量
for in
*/
/*es6中使用for of进行遍历*/

var srar = [1, 24, 5, 8, 9];
var it = srar[Symbol.iterator]();

/* for (var i of srar) {
    console.log(i)
} */

for (var i = 0; i < srar.length; i++) {
    console.log(it.next().value)
}


/*给对象定义一个可以遍历的属性*/

var myobjIn = {
    name: '李芳',
    age: 28
}

Object.defineProperty(myobjIn, Symbol.iterator, {
    enumerable: false,
    writable: false,
    configurable: true,
    value: function() {
        var b = this;
        var ind = 0;
        var ks = Object.keys(b);
        return {
            next: function() {
                //var getPro = ks[ind]
                return {
                    //[getPro]: b[ks[ind++]],
                    value: b[ks[ind++]],
                    done: (ind > ks.length)
                }
            }
        }

    }

})

var its = myobjIn[Symbol.iterator]();
console.log(its.next());
console.log(its.next());
for (var j of myobjIn) {
    console.log(j)
}