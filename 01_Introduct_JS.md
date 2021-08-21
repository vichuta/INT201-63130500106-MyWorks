# Introduction to JavaScript
### JavaScript Language Features
  * Interpreted Language - อ่านทีละบรรทัด
  * Single Threaded, do one operation at one time
  * Dynamically and weakly typed language - สามารถเปลี่ยนแปลงค่าของตัวแปร และ typr ของตัวแปรได้อิสระ
  * Support Object Oriented Programming (Prototyped-based) - รองรับการสร้าง Object (OOP)
 
#### **JavaScript ออกแบบมาเพื่อรองรับ DOM และ BOM**
  * DOM : The Document Object Model คือ เอกสารที่ถูก map รวมกันให้อยู่ในรูปของ Tree structure ตัวอย่าง HTML,CSS
  * BOM : The Browser Object Model คือ เอกสารที่ถูก link ไปบน Browser ต่างๆ


## Synchronous vs. Asynchronous Programming
  * **Synchronous** tasks are performed one at a time and only when one is completed, the following is unblocked
  * **Asynchronous** task be performed alongside the original task (or tasks), without stopping to wait for the task to complete. When the secondary task is completed, the original task is notified using an agreed-upon mechanism so that it knows the work is done, and that the result, if any, is available.
    > **Asynchronous Callback Functions** is a function that is passed into another function as an argument. 
      ```javascript
        console.log('Hello’);
        setTimeout(function () {console.log('JS');}, 5000); ---Asynchronous
        console.log('Bye bye');   
      ```
      #### Output
      ``` 
          Hello //Console
          Bye bye
          JS //until 5 seconds
      ```
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
