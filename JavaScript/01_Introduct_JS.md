# Introduction to JavaScript
1. การเขียน statement
2. Synchronous vs Asynchronous
3. Higher-Order Functions
----
### JavaScript Language Features
  * เป็น Dynamically language สามารถเปลี่ยนแปลงค่าของตัวแปร และ type ของตัวแปรได้อิสระ
  * Support Object Oriented Programming (Prototyped-based) - สนับสนุนการเขียนแบบ OOP
  * รองรับ DOM(Document Object Model) และ BOM(Browser Object Model)
  * Function มีสถานะเทียบเท่า Data
----
# Basic JavaScript Statements
* การเขียน statement ทั่วไป
```javascript
    let y=20
    let x=10; //ควรใส่เครื่องหมายปิด
```
* การเขียน Comment
```javascript
    //Single Line Comment
    /* … */ Single or Multiple Lines Comment
```
* Console Printing
```javascript
    let variable = 'Hello World';
    console.log (variable);                 //'Hello World'
    console.log (`Result : ${variable}`);   //Result : Hello World
```
## Synchronous vs. Asynchronous Programming
  ### Synchronous
  **Synchronous** จะดำเนินการรันโปรแกรมทีละชุดคำสั่ง และจะไม่รันชุดคำสั่งต่อไปถ้ายังรันชุดคำสั่งปัจจุบันไม่จบ 
  > ตัวอย่างเช่น ถ้าโปรแกรมเรียกฟังก์ชัน A(); และ B(); ตามลำดับ โปรแกรมจะไม่รันฟังก์ชัน B(); จนกว่าฟังก์ชัน A(); จะทำงานเสร็จ
  ### Asynchronous 
  **Asynchronous** จะดำเนินการรันโปรแกรมทีละชุดคำสั่ง และจะรันชุดคำสั่งถัดไปทันทีโดยไม่จำเป็นต้องรอชุดคำสั่งก่อนหน้าทำงานเสร็จ 
  > ตัวอย่างเช่น ถ้าโปรแกรมเรียกฟังก์ชัน A(); และ B(); ตามลำดับ โปรแกรมจะรันฟังก์ชัน A(); และ B(); ตามลำดับโดยไม่สนใจว่าฟังก์ชัน A(); 
จะทำงานเสร็จรึยัง จะไปเรียกฟังก์ชัน B(); ต่อเลยทันที
  
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






