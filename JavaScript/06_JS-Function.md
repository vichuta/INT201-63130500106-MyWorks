# Function
1. Type of function (Declarations/ Expressions)
2. Parameter of funciton (Default/ Rest/ Arguments)
3. Function Scrope and Nested Function
4. Arrow Function Expressions
5. Higher-Order-Function

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
## Function Scrope and Nested Function
1. global scope = ข้างนอก function
2. local scope = ข้างใน function
* ปกติตัวแปรที่ใช้ใน funciton() _จะไม่สามารถเรียกใช้ข้างนอก function ได้_ 
นอกจากจะมีการ `return` ค่านั้นออกมาในตัวแปรใหม่นอก local scope
* funciton อ้างถึงตัวแปรที่อยู่ข้างนอกได้ แต่ข้างนอกจะอ้างถึงตัวแปรใน function ไม่ได้
```Javascript
    function doSometing2(value){
        value = 100;    //value จะถูก new เป็นค่าใหม่ใช้เฉพาะใน local scrope
    }
    let isNum = true;
    doSometing2(isNum);
    console.log(isNum); //true 
    //(ไม่เปลี่ยนตาม value ใน function) เพราะ isNum เป็น primitive type อยู่นอก function
```
3. Nested Funciton = function ซ้อน function
* ถ้ามีตัวแปรชื่อซ้ำกัน function จะเรียกใช้ตัวแปรที่อยู่ใน scope ใกล้ตัวมันเองที่สุด
```Javascript
// The following let variables are defined in the global scope
    let mid = 20;
    let final = 5;

    let fname = 'Ada';

//sum function is defined in the global scope
    function sum() {      //เป็น non-pure funciton
    return mid + final;
    }
    console.log(`#1 sum: ${sum()}`); // Returns 25
    mid = 10;
    console.log(`#2 sum: ${sum()}`); // Returns 15

// Outer funciton 
    function getScore() { 
    let mid = 10;
    let final = 30;
    //yourScore is nested function example
        function yourScore() {
            return fname + ' scored ' + (mid + final);
        }
    return yourScore();    // excute Inner funciton
    }
    console.log(getScore()); // Returns "Ada scored 40"
```
4. Closure = Nested Function ที่ fixed ค่าทั้งหมดที่ Nested fuction อ้างถึงใน Outer function
```Javascript
//Outer Fn
    function outerPrice(price){ 
    let VAT = 0.07;
    //Inner Fn
        function innerPrice(){      
            return price*VAT +price
        }
    return innerPrice;          //---> Closure ช่วย fix ค่า VAT ใน Outer fn
    }
//การเรียกใช้ Closure function
    const myResult = outerPrice(100);
    console.log(myResult(100)); //107
    VAT = 0.1;  
    console.log(myResult(100)); //107 (ถึง VAT จะเปลี่ยนแล้ว แต่ Closure ยังใช้ค่าเดิม)
    console.log(VAT);           //0.1
```
------
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
## Higher-Order Functions
   คือ ```function``` อย่างหนึ่งของ JavaScript ที่สามารถรับค่า parameter หรือ return เป็น function ได้
   
```javascript
        function add(n1, n2) {
          return n1 + n2
        }
    // 1. เก็บ fucntion ไว้ในตัวแปรได้
        let sum = add // 1.
        let addResult1 = add(10, 20)
        let addResult2 = sum(10, 20)
        console.log(`add result1: ${addResult1}`) //add result1: 30
        console.log(`add result2: ${addResult2}`) //add result2: 30
    //2. return ค่าเป็น value จาก function ได้
        function operator(n1, n2, fn) {
          return fn(n1, n2) 
        }
    //3. รับค่า parameter เป็น function ได้
        function multiply(n1, n2) {
          return n1 * n2
        }
        let addResult3 = operator(5, 3, add)
        let multiplyResult = operator(5, 3, multiply)
        console.log(`add result3 : ${addResult3}`)         //add result3: 8
        console.log(`multiply result: ${multiplyResult}`)  //multiply result: 15
```