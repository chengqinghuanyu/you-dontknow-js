/*什么是闭包？
首先存在一个函数，这个函数使用了回调函数，就是闭包，仅仅使用
了立即执行函数不一定是闭包，可能没有使用回调函数，形成独立作用域就不是闭包离子如下*/
/*百秒倒计时函数的初始版*/

for (var i = 1; i <= 5; i++) {
    (function() {
        console.log(i);
    })()
}


for (var i = 0; i < 5; i++) {
    (function() {
        setTimeout(function timer() {
            console.log(i)
        }, i * 1000)
    })()
}

for (var i = 1; i <= 100; i++) {
    (function() {
        var j = i;
        setTimeout(function m() { console.log(j) }, 1000 * j)
    }());
}
for (var i = 0; i <= 10; i++) {
    {
        function callback() { console.log(i) };
        callback()
    }
}
for (let i = 0; i < 10; i++) {
    setTimeout(function callback() {
        console.log(i);
    }, 20)
}
/*添加一个块来封闭作用域*/
for (var i = 0; i < 10; i++) {
    {
        console.log(i)
    }
}
/*添加setTimeout为何不成功呢？*/
for (var i = 0; i < 10; i++) {
    {
        var j = i;
        console.log(i)
        setTimeout(function() {
            console.log('%c%s', 'color:red', 'j:' + j)
        })
    }
}

/*使用闭包来创造封闭区域供setTimeout调用*/
for (var i = 0; i < 10; i++) {
    {
        (function() {
            var j = i;
            setTimeout(function() {
                console.log(j)
            })
        })(i)

    }
}

/*尝试改进
原因是作用域的读取规则其实只是存储了一个全局变量i;
setTimeout回调函数时每次取出的都是i的最终结果，
所以不调用闭包将不能解决这个问题
*/
for (var i = 0; i < 10; i++) {
    {
        var m = i; {
            setTimeout(() => {
                console.log(m)
            }, 0);

            {
                var b = m;
                setTimeout(function() {
                    console.log(b)
                })
            }
        }
    }
}

/*增强版，根据作用域的概念从新定义变量存储变量来输出这样更加能理解了*/
for (var i = 0; i < 5; i++) {
    {
        var m = i;
        switch (m) {
            case 0:
                var k = m;
                setTimeout(() => {
                    console.log(k)
                }, 1000);
                break;
            case 1:
                var j = m
                setTimeout(() => {
                    console.log(j)
                }, 1 * 1000);
                break;
            case 2:
                var l = m;
                setTimeout(() => {
                    console.log(l)
                }, 2 * 1000);
                break;
            case 3:
                var li = m;
                setTimeout(() => {
                    console.log(li)
                }, 3 * 1000);
                break;
            case 4:
                var lg = m;
                setTimeout(() => {
                    console.log(lg)
                }, 4 * 1000);
                break;
            default:
                break;
        }
    }
}

/*再变
 let j = i;变量在循环过程中不止被声明一次,每次迭代都会声明。随 后的每个迭代都会使用上一个迭代结束时的值来初始化这个变量。
*/
for (var i = 0; i < 10; i++) {
    let j = i;
    setTimeout(function() {
        console.log(j);
    })
}