# Introduction to JavaScript
### JavaScript Language Features
  * Interpreted Language - อ่านทีละบรรทัด
  * Single Threaded, do one operation at one time
  * Dynamically and weakly typed language - สามารถเปลี่ยนแปลงค่าของตัวแปร และ typr ของตัวแปรได้อิสระ
  * Support Object Oriented Programming (Prototyped-based) - รองรับการสร้าง Object (OOP)
 
#### **JavaScript ออกแบบมาเพื่อรองรับ DOM และ BOM**
  * DOM : The Document Object Model คือ เอกสารที่ถูก map รวมกันให้อยู่ในรูปของ Tree structure ตัวอย่าง HTML,CSS
  * BOM : The Browser Object Model คือ เอกสารที่ถูก link ไปบน Browser ต่างๆ
----
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
# Basic JavaScript Statements
* Semicolon in the end of statement is an optional 
    _แนะนำให้ใสเครื่องหมายปิดด้วยจะดีกว่า_
```javascript
    let y=20
    let x=10; 
```
* Statement can take up multiple lines
* Comment
```
    //Single Line Comment
    /* … */ Single or Multiple Lines Comment
```
* Console Printing
```javascript
    console.log (variable);
```
## The following is the list of keywords
   - break
   - do
   - in
   - typeof
   - case
   - else
   - instanceof
   - var       = ประกาศตัวแปร
   - catch
   - export
   - new
   - void
   - class
   - extends
   - return    = คืนค่า
   - while
   - const
   - finally
   - super  
   - with
   - continue
   - for
   - switch
   - yield
   - debugger  
   - function  
   - this
   - default
   - if
   - throw
   - delete
   - import
   - try



