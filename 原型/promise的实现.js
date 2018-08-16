//promise的简单实现：：：：
//promise的发布订阅模式


function Co(fn) {
    var events = [];
    var value = null;
    this.then = function(n) {
        events.push(n);
        return this;
    };

    function resove(values) {
        var f = events.shift();
        f(values, resove)
    }
    fn(resove)
}


function a() {
    return new Co(function(resolve) {
        console.log('get...');
        setTimeout(function() {
            console.log('get 1');
            resolve(1);
        }, 1000)
    })
}

a().then(function(value, resolve) {
    console.log('get');
    setTimeout(function() {
        console.log('get 2');
        resolve(2);
    }, 1000)
}).then(function(value, resolve) {
    console.log(value)
});