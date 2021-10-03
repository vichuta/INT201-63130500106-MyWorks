let products = [
    {id: 1, price: 10},
    {id: 2, price: 5}
];

let newProduct = {id: 3, price: 20};
// เรื่อง "..." ใช้ได้ 2 แบบ
//1.spread operator ... (shallow copy)
products = [...products,newProduct]; 
console.log(products);
newProduct.price=100;                       //**มันแก้ไขค่า object ข้างในได้!!!
console.log(products);

    products = [{id: 1, price: 10},{id: 2, price: 5}];
    newProduct.price=20;
    console.log("วิธีแก้");
    
    //วิธีแก้ที่ 1 เพิ่ม {... obj} ครอบ
products = [...products,{...newProduct}]; 
newProduct.price=100;                       //**แก้ค่าข้างในไม่ได้**
console.log(products);
        
        products = [{id: 1, price: 10},{id: 2, price: 5}];
    //วิธีแก้ที่ 2 เรียกเจาะจง property ของ obj มาใส่แทน
products = [...products, {id: newProduct.id, price: newProduct.price}];
newProduct.price=100; 
console.log(products);

    
// 2.rest parameter คือ การใช้ ... ที่เป็น parameter ของ function
function getStudentsInClass(instructor, ta, ...students) {   //...students คือ array 
    return students;
}
let studentSec2 = getStudentsInClass('Umaporn', 'Tisanai', 'A', 'B', 'C');
console.log(studentSec2);
[instructor, ta, ...student] = ['Umaporn', 'Tisanai', 'A', 'B', 'C'];
console.log(student);



//function expresstion
const myFunc = function (instructor,ta, ...students){
    let greeting = 'Hello';
    return students;
};
console.log(myFunc('Your Name','Last Name', 'A','B','C')); //เรียกผ่านตัวแปรได้เลย
myFunc //การใส่ชื่อ function
myFunc() //การ excute function

//ตัวอย่าง function
    //1.
    const myFunc = function (instructor, ta, ...students) {
        let greeting = 'Hello';
        return students;
    };
    //2.
    function echo(text) {
        return text;
    }
    //3.
    function sayHi(greeting, name) {
        return `${greeting}, ${name}`;
    }
    //4.
    function getClass() {
        return `INT201`;
    }
//ลองสร้าง Arrow function
    //1.
    const myFunc = (instructor, ta, ...students) => {
        let greeting = 'Hello';
        return students;
    };
    //2.
    const echo = text => text;
    //3.
    const sayHi = (greeting,name)=>`${greeting}, ${name}`
    //4.
    const getClass = ()=>`INT201`;

//Arguments in function 
function printStudents(n) {                  //function ไม่ได้รับค่า parameter
    console.log(arguments.length);  //4
    console.log(arguments[1]);      //Adam
    console.log(arguments[2]);      //john
  }
printStudents('.', 'Adam', 'John', 'Danai');//แต่มีค่า parameter โยนเข้ามาให้ function

const myFunc3 = function(id='unknown',name=0){
    console.log(id);
    console.log(name);
    return id;
} 
myFunc3(5)              //5, 0
myFunc3('unknown',5);   //unknown 5
myFunc3(undefined, 5);  //unknown 5






//การสร้าง Class
class Rectangle{
    //constructor(param) 
       constructor(width, height) {     //ใช้กำหนดค่า attribute ของ Class
          this._width = width;
          this._height = height;
       }
    //ares() = function ที่ไว้คำนวณ
       area() {
          return this._width * this._height;
       }

    //getting, setting, toString method()
       get width() {
          return this._width;  
       }
       set width(newWidth) {
          this._width = newWidth;
       }
       get height() {
          return this._height;
       }
       set height(newHeight) {
          this._height = newHeight;
       }
       toString() {
          return ('width = ' + this._width +', height = ' + this._height +
       ', area = ' + this.area());
       }
 }
//การเรียกใช้ Class
 let rec1 = new Rectangle(3, 4);
 console.log(rec1.width);      //3
 console.log(rec1.height);     //4
 console.log(rec1.area());     //12
 console.log(rec1.toString()); //width = 3, height = 4, area = 12

//ลอง extends Class ด้วย Object.create() => square extends rec1
 let rec2 = Object.create(rec1);
    CanvasRenderingContext2D.perimeter = function () {    //เพิ่ม perimeter() เพื่อหาเส้นรอบรูป
       return (2*this.width)+(2*this.height);
    };
    console.log(rec2.width);    //2
    console.log(rec2.height);   //3
    console.log(rec2.area())    //12
    console.log(rec2.perimeter()); //14



    