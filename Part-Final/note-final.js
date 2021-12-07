//Creating การสร้าง object
let obj1 = { 
    id : 1,           //Object literals = {name : value}
    name : 'Ana',     //property_name แบบ identifier
    "Gender" : 'F'    //property_name แบบ string literal  
 };
 
//Getting การเรียกใช้ (มี 2 แบบ)
 obj1.id;          //1
 obj1["name"];     //'Ana'

//Setting การแก้ไขค่า property
 obj1.id = 0;      //obj1 = { id: 0, name: 'Ana', Gender: 'F' }
    
//การเพิ่ม property ใหม่เข้าไปใน object
 obj1.age = 18;    //obj1 = { id: 1, name: 'Ana', Gender: 'F', age: 18 }

 console.log(obj1)



 let obj4 = {
    id : 4,
    square : function() {return this.id * this.id}  //หรือ square() {return this.id * this.id}
 };
 

 //Object of array
 //Array of Object
 

 let obj3 = {
    id : 3,
    name : ['Alice','Bob','Charlie'] //value => array
 };
console.log(obj3.name[1])


 let array2 = [
     1,
     2,
     3,
    {id: '123', name: "nnn"}
]
console.log(array2[3].name);

function b(){



}
b();

let a = function(){console.log("hello")};
a();
