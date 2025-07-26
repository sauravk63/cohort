"use strict";
function after1S(cb) {
    setTimeout(cb, 1000);
}
function runFunction() {
    console.log('Hello, there');
    return 33;
}
console.log(after1S(runFunction));
