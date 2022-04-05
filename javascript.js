//more closuer examplel
//exapmple 1
let f;

const g = function () {
    const a = 25;
    f = function () {
        console.log(a * 2);
    }
}
const h = function () {
    const b = 888;
    f = function () {
        console.log(b * 2)

    }
}
g();
f();
console.dir(f);
//re-assigning  f function 
h();
f();
/////////////////////asta de mai sus treb e invatat
console.dir(f)
//example 2
const pass = function (n, wait) {
    // const pergrupt = n / 3;
    setTimeout(function () {
        console.log(`Weare now boarding all ${n} passagers`);
        console.log(`there are 3 groups,each with${pergrupt}`)
    }, wait * 1000);

    console.log(`hai ,I am a good boy ${wait}`)
}

setTimeout(function () {
    console.log('TIMER')
}, 1000)
pass();
setTimeout(function () { })
const pergrupt = 1000
pass(1800, 3)