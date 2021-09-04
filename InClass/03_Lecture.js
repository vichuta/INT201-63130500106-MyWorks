//---Test in node JS---
function add(n1,n2) {
    return n1+n2;
}
add(5,2) //7

//String Function
let msg = 'JS';
msg.length                  //2
msg.charAt();               //'J' 
msg.charAt(msg.length);     //''
msg.charAt(msg.length-1);   //'S'
msg.toLocaleLowerCase();    //'js' String --> immutable  
//ไม่ได้เปลี่ยนเปลี่ยนค่า msg แต่ return ตามค่า function LowerCase เป็น String ตัวใหม่
msg                         //'JS' 
msg.substring(0,2);         //'S'
msg=msg.toLocaleLowerCase();//'js'
console.log("Hello" + msg)  //Hellojs
console.log(`Hello everyone, 'section' ${msg}`) // ใช้ ` ช่วยประหยัดการใช้ + ต่อคำ
console.log(`Hello          
World`)                     //Hello
                            //World (ขึ้นบรรทัดใหม่ได้)
console.log(`Hello ${msg+1}`)   //Hello js1
console.log(`Hello ${1000}`)    //Hello 1000
console.log(`Hello ${true && false}`)   //Hello false
console.log(`Hello ${msg.charAt(1)}`)   //Hello s


//1. Explicit type conversions = แปลง type ด้วย function
Number('3');    //3
String(false);  //"false"
Boolean([]);    //true
//2. Implicit type conversions = แปลง type ให้อัตโนมัติ
'a' + 1     //'a1'
'5' * '4'   //20
true + 1    //2 (true มีค่าเป็น 1)
false +1    //1 (false มีค่าเป็น 0)
null * 1    //0 (null มีค่าเป็น 0)

//Equality operators
//1.non strict equality -- จะไม่ check conversions
//ถ้า type ไม่เท่ากัน จะใช้ Implicit
    //String จะเปลี่ยนเป็น Number
    //Boolean จะเปลี่ยนเป็น Number
1 == true   //true      [เปลี่ยน true เป็น 1]
"1" == []   //false     ["1"== String([]) ---> "1" = ""]
"1" == 1    //true      [Number("1") เปลี่ยน String เป็น Number]
1 == null   //false     
"1" == undefined    //false [Number(undefined)==NaN]
null == undefined   //true***  
//2. strict equality -- ถ้ามีการ conversions จะ false ทันที

//Compare String



//ธรรมเนียมการตั้งชื่อ ควรตั้งชื่อที่สื่อความหมาย
myVarible //camel case
myMethod
myFunction
myObject

//การสร้าง function
function doSometing(){
    //console.log(someValue);   //ไม่ควรปริ้นค่าใน function
    return someValue            //ควร return ค่าให้นำไปใช้ต่อได้ น่าจะดีกว่า
}