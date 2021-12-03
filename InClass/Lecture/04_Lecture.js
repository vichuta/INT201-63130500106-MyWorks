const value=3   //ถ้าตัวแปรเป็น primitive จะเป็น final เปลี่ยนค่าไม่ได้ 
const student={id:1,name:"Somchai"} //แต่ถ้าเป็น object 
student.email="somchai@mail.com"    //สามารถแก้ไขได้
student     //{ id: 1, name: 'Somchai', email: 'somchai@mail.com' }

//for in 
//in = ดู attribute ทั้งหมดที่มีอยู่ใน object
for(let prop in student){
    console.log(prop);          
    console.log(student[prop]);
}

//for of
//of = ดูของทั้งหมดใน collection คล้ายๆ iterator
let data=[1, 10, 5, "Hello", true]
for(let item of data){
    console.log(item);
}

//-------JS OBJECT---------
//การสร้าง object
let obj = {
    id : 1,
    Name : "Aaa"
}
//ใส่ค่า value เป็น function ได้
let square ={
    area : function() {return this.side * this.side;},
    side : 10
};
square.area()       //100

//Aggregated Object : object ซ้อน object 
let book={
    isbn: 1111, 
    title: "JS Beginner", 
    author:{firstname: "John", lastname: "Hang"}
};
//Object Value is array : เพิ่ม array เข้าไปใน object
book.version = [1.0,1.5,2.0];

//การเพิ่ม attribute ใน object ทำได้ 2 แบบ
book.year = 2002;
book["page"]=200;

//การเรียก attribute ใน object ทำได้ 2 แบบ
book.year;
book["page"];//---> ใส่ string expression ได้

function distance(p1, p2) { //p1,p2 = formal parameter
    console.log(typeof p1); //object
    console.log(typeof p2); //object
    // ** ‐ The exponentiation assignment operator
    return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
}
//1.เป็นการโยน ileteral ไปเป็น parameter
console.log(distance({ x: 1, y: 1 }, { x: 2, y: 2 })); //actual parameter

//2.ทำเป็น obj แล้วโยน obj ไปเป็นค่า parameter แทน 
let point1 = {x:1, y:1};
let point2 = {x:2, y:2};
console.log(distance(point1,point2));

let person = new Object();  //เหมือน let person={}
let a = new Array();        //เหมือน let a = []
let p = new Point();

let obj1 = { 
    id : 1, 
    name : 'Ana',
    "Gender" : 'F'   
 };
 

//Getting การเรียกใช้ (มี 2 แบบ)
 console.log(obj1);          //1
 console.log(obj1["name"]); 
 console.log(obj1.Gender);
 console.log(obj1["Gender"]);  

let obj3 = {
    id : 3,
    name : ['Alice','Bob','Charlie']
 };
 console.log(obj3.name[0].length);
