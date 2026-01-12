var v = "var 전역";
let l = "let 전역";

console.log(window.v);
console.log(window.l);

function f() {
    "use strict";
    x = 1;
}
f();