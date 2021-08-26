let n = 0 ;
let str = "";
TestString(1,"Hello");
function TestString(n, str) {
    switch(n){
        case 1: console.log(reverseString(str));
        break;
        case 2: function Replace(str) {
    
        }
        break;
        case 3: function CountWord(str) {
    
        }
        break;
    }
}
function reverseString(str){//Reverse String
    return str.split("").reverse().join("");
    //split("") = ตัดแบ่งด้วย "" --> [ 'H', 'e', 'l', 'l', 'o' ]
    //reverse() = จะเรียง array แบบ reverse ให้ใหม่ --> [ 'o', 'l', 'l', 'e', 'H' ]
    //join("") = รวม array โดยที่มี "" คั่นระหว่าง array --> 'Hello'
}



