//การเปรียบเทียบตัวเแปร
let num1 = 10;
let num2 = 20;

num1 == num2;   //เปรียบเทียบแค่รูปลักษณ์
num1 === num2;  //เปรียบเทียบในระดับ type ของตัวแปรด้วย

//การเปรียบเทียบ object
let per1={id:1, name:'Adum'};
let per2={id:1, name:'Adum'};
per1==per2   //false เพราะชี้ object คนละตัว(ถึงของข้างใน obj จะเหมือนกันก็ตาม)

per2=per1
per1==per2  //true เพราะper1 ไปชี้ obj ของ per2 ที่อยู่ที่เดียวกัน จึงเท่ากัน
//สรุป: object จะเท่ากันได้ก็ต่อเมื่อ object นั้นมีที่อยู่เหมือนกันเท่านั้น = compare memory address***


//การเปรียบเทียบ array (array คือ object)
//----test โจทย์1-----
let arr1 = [0,2,4,6];
let arr2 = [0,2,4,6];

console.log(arr1==arr2);
arr2=arr1; //arr1 ให้ memory address กับ arr2  | ตัวที่ arr2 เคยชี้จะกลายเป็น garbage
arr2[1]=5;
console.log(arr1[1]);   //5
console.log(arr1);      //[0,5,4,6]
console.log(arr2);      //[0,5,4,6]

//----test โจทย์2-----
function doSometing(value){ 
    //value เป็น (formal parameter)=item1(actual parameter)
    value.name='unknown';
}
let item1 = {name:'ABC'};
doSometing(item1);
console.log(item1.name); //unknown | เปลี่ยนตาม value ใน function เพราะ item เป็น object

//----test โจทย์3-----
function doSometing2(value){
    value = 100;   //value จะถูก new เป็นค่าใหม่แทนใน function
}
let isNum = true;
doSometing2(isNum);
console.log(isNum); //true | ไม่เปลี่ยนตาม value ใน function เพราะ isNum เป็น primitive type