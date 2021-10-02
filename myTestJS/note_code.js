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

let square = Object.create(rec1);      //=> square extends rec1
      square.perimeter = function () {    //เพิ่ม perimeter() เพื่อหาเส้นรอบรูป
         return (2*this.width)+(2*this.height);
      };
Rectangle.prototype.half = function(){
   return (this.area()/2);
};

//การเรียกใช้
   console.log(square.width);       //3
   console.log(square.height);      //4
   console.log(square.area());      //12
   console.log(square.perimeter()); //14
   console.log(square.toString());  //width = 3, height = 4, area = 12
   console.log(square.half());      //6

//เช็คความสัมพันธ์ของ object class
   console.log(Object.prototype.isPrototypeOf(rec1));       //true (Object <--rec1)
   console.log(Object.prototype.isPrototypeOf(square));     //true (Object <--Rectangle/rec1 <--square)
   console.log(square instanceof Object);                   //true
   
   console.log(Rectangle.prototype.isPrototypeOf(square));  //true (Rectangle/rec1 <--square)
   console.log(square instanceof Rectangle);                //true 
   
   console.log(Object.getOwnPropertyNames(square));         //[ 'perimeter' ]

