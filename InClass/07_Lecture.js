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
myFunc //การใใส่ชื่อ function
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
function printStudents() {                  //function ไม่ได้รับค่า parameter
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
