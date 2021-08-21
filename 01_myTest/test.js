var x = "var";
let y = "let";
const z = "con";

console.log(x);
console.log(y);
console.log(z);


let a = 1;
a = 3;
function A(){
    let b = 2;
    console.log(a);
    console.log(b);
}
//ปริ้นท์ไม่ออก
//console.log(b);
function B(){
    console.log(a);
    //console.log(b);
}
A();// 1 2
B();// 1