# Introduction to JavaScript
### JavaScript Language Features
  * เป็น Dynamically language สามารถเปลี่ยนแปลงค่าของตัวแปร และ type ของตัวแปรได้อิสระ
  * Support Object Oriented Programming (Prototyped-based) - สนับสนุนการเขียนแบบ OOP
  * รองรับ DOM(Document Object Model) และ BOM(Browser Object Model)
----
# Basic JavaScript Statements
* Semicolon in the end of statement is an optional 
    _แนะนำให้ใสเครื่องหมายปิดด้วยจะดีกว่า_
```javascript
    let y=20
    let x=10; 
```
* Statement can take up multiple lines
* Comment
```javascript
    //Single Line Comment
    /* … */ Single or Multiple Lines Comment
```
* Console Printing
```javascript
    console.log (variable);
```
## Synchronous vs. Asynchronous Programming
  ### Synchronous
  **Synchronous** จะดำเนินการรันโปรแกรมทีละชุดคำสั่ง และจะไม่รันชุดคำสั่งต่อไปถ้ายังรันชุดคำสั่งปัจจุบันไม่จบ 
  > _ตัวอย่างเช่น ถ้าโปรแกรมเรียกฟังก์ชัน A(); และ B(); ตามลำดับ โปรแกรมจะไม่รันฟังก์ชัน B(); จนกว่าฟังก์ชัน A(); จะทำงานเสร็จ_
  ### Asynchronous 
  **Asynchronous** จะดำเนินการรันโปรแกรมทีละชุดคำสั่ง และจะรันชุดคำสั่งถัดไปทันทีโดยไม่จำเป็นต้องรอชุดคำสั่งก่อนหน้าทำงานเสร็จ 
  > _ตัวอย่างเช่น ถ้าโปรแกรมเรียกฟังก์ชัน A(); และ B(); ตามลำดับ โปรแกรมจะรันฟังก์ชัน A(); และ B(); ตามลำดับโดยไม่สนใจว่าฟังก์ชัน A(); 
จะทำงานเสร็จรึยัง จะไปเรียกฟังก์ชัน B(); ต่อเลยทันที_
  
  **Asynchronous Callback Functions** is a function that is passed into another function as an argument. 
```javascript
        console.log('Hello’);
        setTimeout(function () {console.log('JS');}, 5000);     //Asynchronous
        console.log('Bye bye');   
```
#### Output
``` 
        Hello
        Bye bye         
        JS              //ทำเป็นอันสุดท้าย เพราะมี delay 5000 ms
```
----
## Higher-Order Functions
   คือ function อย่างหนึ่งของ JavaScript ที่สามารถรับค่า parameter หรือ return เป็น function ได้
   
```javascript
      //1. store functions in variables
        function add(n1, n2) {
          return n1 + n2
        }
        let sum = add
        let addResult1 = add(10, 20)
        let addResult2 = sum(10, 20)
        console.log(`add result1: ${addResult1}`)
        console.log(`add result2: ${addResult2}`)
      //2. returned as a value from another function
        function operator(n1, n2, fn) {
          return fn(n1, n2)
        }
      //3. Passing a function to another function
        function multiply(n1, n2) {
          return n1 * n2
        }
        let addResult3 = operator(5, 3, add)
        let multiplyResult = operator(5, 3, multiply)
        console.log(`add result3 : ${addResult3}`)
        console.log(`multiply result: ${multiplyResult}`)
```
------




