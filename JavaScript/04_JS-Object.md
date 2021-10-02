# Object
* Creating/ Getting/ Setting/ Object
* Object Comparing
* Class and constructor functions
* Prototype Chaining (Inheritance Object)
----
## Creating/ Getting/ Setting/ Object
0. Object by `new`
```JavaScript
   let o = new Object();   //สร้าง object เปล่า   => let o = {};
   let a = new Array();    //สร้าง array เปล่า    => let a = [];
   let d = new Date();     //สร้าง object ที่เก็บเป็น Date ปัจจุบัน
   let r = new Map();      //สร้าง Map object สำหรับเก็บ key/value mapping
```
1. Simple object หรือ Object literals `{name : value}`
```JavaScript
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
```
2. Aggregated Object = object ซ้อน object
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
3. Object Value is array = สร้าง Array ใน object
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
4. Object method / function = สร้าง Function ใน object
```JavaScript
   let obj4 = {
      id : 4,
      square : function() {return this.id * this.id}  //หรือ square() {return this.id * this.id}
   };
   
//การเรียกใช้
   obj4.square()     //16
```

## Object Comparing
* การเปรียบเทียบ object จะเช็คจาก **address ของ object** ถ้าชี้ไป address เดียวกัน = `true`
* `==`,`===`,`Object.is(obj1,obj2)` ใช้เปรียบเทียบ object ได้เหมือนกัน
```JavaScript
   let box1 = {id: 1, color: 'red'};
   let box2 = {id: 1, color: 'red'};
   let box3 = box1;        //copy address object box1 ให้ box3

//การเปรียบเทียบจาก address object
   box1 == box2;   //false  ถึงของข้างในจะเหมือนกันแต่ address อยู่คนละที่
   box1 == box3;   //true
```
> การ copy address object ทำให้สามารถแก้ไขค่าผ่าน box1 หรือ box3 ก็ได้ (ถ้าแก้ไขค่าใน box1 box3 จะเปลี่ยนตามด้วย)

* ถ้าต้องการเปรียบเทียบ property ใน object ต้องสร้าง function **Shallow Equality** ไว้ใช้เปรียบเทียบ `{name : value}` ใน object 
```JavaScript
//Shallow Equality = เปรียบแค่ property_name * แต่ไม่ได้เปรียบเทียบ address object
   function boxEqual(obj1,obj2){
      const keys1 = Object.keys(obj1);    //Object.keys() >> return เป็น String key ของ property  
      const keys2 = Object.keys(obj2);    //Object.keys(box2) => id,color

      if (keys1.length !== keys2.length) {//เช็คจำนวน property ที่มีแต่ละ object มีเท่ากันไหม?
         return false;
      }
      for (let key of keys1) {            //วน loop ตาม Object.key ของ object1
         if (obj1[key] !== obj2[key]) {   //เช็ค value ของแต่ละ key ว่าเท่ากันไหม? **ใช้เป็น ===,!== เพื่อปกป้องการเกิด Implicit Convasion ด้วย***
            return false;
         }
      }
      return true;
   }

   let box1 = {id: 1, color: 'red'};
   let box2 = {id: 1, color: 'red'};
   let box3 = box1
   let box4 = {id: 2, color: 'red'};
   
   console.log(boxEqual(box1,box2));   //true
   console.log(boxEqual(box1,box3));   //true
   console.log(boxEqual(box1,box4));   //false
```

## Prototype Chaining
* `Object.create()` เป็น function ที่ใช้สร้าง Inheritance Object
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

//Object.prototype.isPrototypeOf() = เช็คว่าเป็นลูกหลานของ Object ไหม? 
   console.log(Object.prototype.isPrototypeOf(objA)); //true (Object <--objA)
   console.log(Object.prototype.isPrototypeOf(objB)); //true (Object <--objA <--objB) 

//Object.getOwnPropertyNames() = เรียกดู property_name ที่ไม่ได้ถูก extend มา
   console.log(Object.getOwnPropertyNames(objA));     //[]
   console.log(Object.getOwnPropertyNames(objB));     //['x'] 
```

## Class and constructor functions
* การสร้าง Class ใน JS (method = function)
```JavaScript
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
//การเรียกใช้งาน Class
   let rec1 = new Rectangle(3, 4);
   console.log(rec1.width);         //3
   console.log(rec1.height);        //4
   console.log(rec1.area());        //12
   console.log(rec1.toString());    //width = 3, height = 4, area = 12

//การเพิ่ม function ในระดับ Class **ต้องมี Class.prototype.new_Function...
   Rectangle.prototype.half = function(){
      return (this.area()/2);
   };
```
   > ลอง extends Rectangle Class ด้วย `Object.create()`
```JavaScript
   let square = Object.create(rec1);      //=> square extends rec1
      square.perimeter = function () {    //เพิ่ม perimeter() เพื่อหาเส้นรอบรูป
         return (2*this.width)+(2*this.height);
      };

//square สามารถเรียกใช้ method() ของ rec ได้หมด + เรียกใช้ function เฉพาะของตัวเอง
   console.log(square.width);       //3
   console.log(square.height);      //4
   console.log(square.area());      //12
   console.log(square.perimeter()); //14
   console.log(square.toString());  //width = 3, height = 4, area = 12

//เช็คความสัมพันธ์ของ object 
   console.log(Object.prototype.isPrototypeOf(rec1));       //true (Object <--rec1)
   console.log(Object.prototype.isPrototypeOf(square));     //true (Object <--Rectangle/rec1 <--square)
   console.log(square instanceof Object);                   //true
//เช็คความสัมพันธ์ของ class   
   console.log(Rectangle.prototype.isPrototypeOf(square));  //true (Rectangle/rec1 <--square)
   console.log(square instanceof Rectangle);                //true 
```
