# Object
* สามารถแก้ไขค่าได้ตลอด
## ส่วนประกอบของ object

## ประเภทของ object 
### 1. Understanding Object คือ Object ที่เขียนนอก Class
* 1.1) Simple object หรือ Object literals `{name : value}`
```JavaScript
//Creating การสร้าง object
   let obj0 = new Object();  //สร้าง object เปล่า >> let obj0 = {} 
   
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
```
* 1.2) Aggregated Object = object ซ้อน object
```JavaScript
   let obj2 = {
      id : 2,
      name : {first_name : 'Ben',
              last_name  : 'Tennyson'}
   };
   
//การเรียกใช้
   obj2.name.first_name    //'Ben'
   obj2.name.last_name     //'Tennyson'
```
* 1.3) Object Value is array = สร้าง Array ใน object
```JavaScript
   let obj3 = {
      id : 3,
      name : ['Alice','Bob','Charlie'] //value => array
   };

//การเรียกใช้
   obj3.name[0];     //'Alice'
   obj3.name[1];     //'Bob'
   obj3.name[2];     //'Charlie'
```
* 1.4) Object Value is function = สร้าง Function ใน object
```JavaScript
   let obj4 = {
      id : 4,
      square : function() {return this.id * this.id}  //หรือ square() {return this.id * this.id}
   };
   
//การเรียกใช้
   obj4.square()     //16
```
* 1.5) `Object.create()` function = เป็นการสร้าง Inheritance Object
```JavaScript
   let objA = Object.create({x:1, y:2});
   let objB = Object.create(objA);        //เหมือน objB extends objA มา

//ลองเรียกใช้
   console.log(objA);    //{}     
   console.log(objA.x);  //1
   console.log(objA.y);  //2

   console.log(objB);    //{}
   console.log(objB.x);  //1
   console.log(objB.y);  //2
   //ลองแก้ไข objB
   objB.x = 3
   console.log(objB);   //{x=3} --> shadowing
```
* การเปรียบเทียบ object ==,=== ใช้ได้เหมือนกัน
เพราะจะเทียบกันที่ address object

