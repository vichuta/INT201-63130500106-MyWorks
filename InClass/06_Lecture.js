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

//Array 
let arr = [];
let obj = {};
console.log(typeof arr1);   //array
console.log(arr.length);    //object
//array is untyped (ใส่ type อะไรก็ได้)
arr = [10, true,1, 'unknown', ['A','B','C'], {id:1, name:'Adam'}]; 
console.log(arr);
console.log(arr[arr.length-1]);
console.log(arr[arr[2]]);
console.log(arr[4][2]);     //เรียก C ที่อยู่ Array ซ้อน Array
console.log(arr[5].name);   //เรียก property 'name' ที่อยู่ object 

arr[4][0]='X';          // insert ค่า X แทน A ใน array ที่ซ้อนอยู่ใน array
console.log(arr[4]);    // [ 'X', 'B', 'C' ]

//การใช่้ ... (การ copy)
let arr0 = ['confirm',...arr]; //เอา array มาต่อกัน
console.log(arr0);             //['confirm',10, true,1, 'unknown', ['A','B','C'], {id:1, name:'Adam'}]

let arr3 = 'hello world';
let arr4 = [...arr3];
console.log(arr4.length);   //11
console.log(arr4);          //['h', 'e', 'l', 'l','o', ' ', 'w', 'o','r', 'l', 'd']

let per1 = [{id: 1, name: 'Adam'}];
let arrPer1 = [...per1];    //copy address ของ obj มาด้วย
arrPer1[0].name ='Joe';
console.log(per1);          //[ { id: 1, name: 'Joe' } ]

let num1 = [10];
let arrNum1 = [...num1];//copy array  ((1.spread operator))
arrNum1[0] = 20 ;
console.log(num1);      //[10]
console.log(arrNum1);   //[20]

let c = [5, 10, 15];
let d = [...c];
d[0] = 10;
console.log(`d: ${d}`);
console.log(`c[0]: ${c[0]}`);
console.log(`d[0]: ${d[0]}`);