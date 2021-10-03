# Function
1. Type of function (Declarations/ Expressions)
2. Parameter of funciton (Default/ Rest/ Arguments)
3. Function Scrope
4. Arrow Function Expressions

## Type of function มี 2 ประเภท
1. Function Declarations = function ที่มีชื่อ
```Javascript
    console.log(square(3)); //--> hoisting เป็นการเรียกใช้ function ก่อนจะสร้าง funciton
    function square(side) {
        return side * side;
    }
//Calling fucniton
    square      //--> เรียกชื่อ funciton
    square(5);  //25 --> excute : การสั่งให้ใช้ funciton นั้นทำงาน
``` 
2. Function Expressions = function ที่สามารถเรียกใช้ผ่านตัวแปรได้
```Javascript
    const getRectangleArea = function(width, height) { //ไม่มีชื่อ function ก็ได้
        return width * height;
    }
    getRectangleArea(3,4); //12 (เรียกใช้ได้เลย)
    
    let fact = function factorial(n) { 
        console.log(n) ;
        if (n <= 1) {
            return 1;
        }
        return n * factorial(n - 1); //ทำ function ซ้อนตัวเอง
    } ;
//Calling fucniton
    fact     //--> เรียกชื่อ funciton
    fact(5); //120
```
## Parameter of funciton
0. function นั้นสามารถรับค่าได้อิสระ ไม่ว่าจะเป็น prmitive type / object type / funciton
```Javascript
    function distance(p1, p2) { //p1, p2 <--formal parameter
        console.log(typeof p1); //object
        console.log(typeof p2); //object
    // ** ‐ The exponentiation assignment operator
        return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
    }
    console.log(distance({ x: 1, y: 1 }, { x: 2, y: 2 })); //<--actual parameter
```
1. **Default Parameters** 
```Javascript
    const myFunc3 = function(id='unknown',name=0){
        return id+','+name;
    } 
    myFunc3()               //unknown,0
    myFunc3(5);             //5,0
    myFunc3('unknown',5);   //unknown,5
```
2. **Rest parameter** คือ การใช้ `...` ที่เป็น parameter ของ function
```Javascript
    function getStudentsInClass(instructor, ta, ...students) { //...students คือ array 
        return students;
    }
    let studentSec2 = getStudentsInClass('Umaporn', 'Tisanai', 'A', 'B', 'C');
    console.log(studentSec2);   //['A', 'B', 'C']
```
3. **Arguments in function**
* Arguments **ไม่ใช่ array** แต่มีคุณสมบัติเหมือน array 
* `arguments` เสมือน array ของ parameter ทั้งหมดที่โยนเข้ามาใน funciton
```Javascript
    function printStudents() {          //function ไม่ได้รับค่า parameter
        console.log(arguments.length);  //4
        console.log(arguments[1]);      //Adam
        console.log(arguments[2]);      //john
    }
    printStudents('.', 'Adam', 'John', 'Danai');
```
## Function Scrope
* ปกติตัวแปรที่ใช้ใน funciton() _จะไม่สามารถเรียกใช้ข้างนอก function ได้_ 
นอกจากจะมีการ `return` ค่านั้นออกมาในตัวแปรใหม่นอก funciton scope
```Javascript
    function doSometing2(value){
        value = 100;    //value จะถูก new เป็นค่าใหม่ใช้เฉพาะใน function scrope
    }
    let isNum = true;
    doSometing2(isNum);
    console.log(isNum); //true 
    //(ไม่เปลี่ยนตาม value ใน function) เพราะ isNum เป็น primitive type อยู่นอก function
```
## Arrow Function Expressions
* การยุบ function 
```Javascript
//Function expressions
    let a = 4;
    let b = 2;
    function (){return a + b + 100;}   
//Arrow Function 
    () => a + b + 100;  //--> ใช้ได้เหมือนกัน
```
* ตัวอย่างการเขียน Arrow Function
```Javascript
//1.ไม่มี parameter
    function getClass() {return `INT201`;}
    //Arrow Function 
    const getClass = ()=>`INT201`;

//2.มี parameter 1 ตัว
    function echo(text) { return text;} 
    //Arrow Function 
    const echo = text => text;

//3.มี parameter มากกว่า 1 ตัว
    function sayHi(greeting, name) {
        return `${greeting}, ${name}`;
    }
    //Arrow Function
    const sayHi = (greeting,name)=>`${greeting}, ${name}`

//4.มีหลาย statement
    const myFunc = function (instructor, ta, ...students) {
        let greeting = 'Hello';
        return students;
    }; 
    //Arrow Function 
    const myFunc = (instructor, ta, ...students) => {
        let greeting = 'Hello';
        return students;  //ถ้ามีมากกว่า 1 statement ต้องมี return กำกับ
    };

```