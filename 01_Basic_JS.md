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
## Types, Values, and Variables
   ### Types
   แบ่งออกเป็น 2 ประเภท
   #### 1. primitive types
   * number - including integer and floating-point numbers between -2^53 to 2^53
   * string (รวมถึง char)
   * boolean 
    > Example for primitive types
   ```javascript
        let myNum = 0;
        console.log(`type of myNum is ${typeof myNum}`);

        let myString = 'Good';
        console.log(`type of myString is ${typeof myString}`);

        let myBool = true;
        console.log(`type of myBool is ${typeof myBool}`);

        let myUndefined;
        console.log(`type of myUndefined is ${typeof myUndefined}`);

        let mySymbol = Symbol();
        console.log(`type of mySymbol is ${typeof mySymbol}`);

        let myNull = null;
        console.log(`type of myNull is ${typeof myNull}`);
  ```
   > Output
                
        type of myNum is number
        type of myString is string
        type of myBool is boolean
        type of myUndefined is undefined
        type of mySymbol is symbol
        type of myNull is object
        
#### 2. object types  _เป็น Object ซ้อน Object ก็ได้_
   * An object (that is, a member of the type object) is a collection of properties where each property has a name and a value (either a primitive value or another object)
   * a special kind of object, known as an array, that represents an ordered collection of numbered values
       > Example for object type
   ```JavaScript
        //Object Type Simple
        let myObj = {id: 1,task: 'grading exam'};
        let myObj2 = {id: 1,task: 'grading exam'};
        //The JSON.stringify() method converts a JavaScript object or value to a JSON string
        console.log(`${JSON.stringify(myObj)}`);
        console.log(`type of myObj is ${typeof myObj}`);

        newObj = myObj;
        console.log(`${JSON.stringify(newObj)}`);
        console.log(`type of newObj is ${typeof newObj}`);

        console.log(`newObj === myObj is ${newObj === myObj}`);
        console.log(`myObj1 === myObj2 is ${myObj === myObj2}`);
        
        //Object type Array
        let myArr = [1, 2, 3];
        console.log(`myArr Length: ${myArr.length}`);
        console.log(`type of myArr is ${typeof myArr}`);
        
        let a = [];
        let b = a;
        b[0] = 1;
        let c = [1];
        console.log(`a === b is ${a === b}`);
        console.log(`b == c is ${b == c}`);
  ```
   > Output
  
        {"id":1,"task":"grading exam"}
        type of myObj is object
        {"id":1,"task":"grading exam"}
        type of newObj is object
        newObj === myObj is true
        myObj1 === myObj2 is false
        
        myArr Length: 3
        type of myArr is object
        a === b is true
        b == c is false

### Values
#### Primitive value
   * number
   * string
   * boolean
   * null (special type) มี Type เป็น **object type** 
        > NULL คือ ค่าของตัวแปรที่ตั้งไว้ เก็บค่าอื่นจะเพิ่มเข้าทีหลัง
   * undefined (special type) 
        > UNDEFINED คือ ค่าของตัวแปรที่ตั้งไว้ แต่ยังไม่รู้ว่าจะเก็บค่าอะไร
   * symbol (special type) = unistring (คือ string แบบไม่ซ้ำ)
    
### Variables (การประกาศตัวแปร)
#### var
* var variables can to use globally scoped or function scoped 
  > หมายความว่า ไม่ว่าจะประกาศตัวแปร อยู่ข้างนอก หรือ ข้างใน function ก็สามารถเรียกใช้ตัวแปรที่ถูกประกาศด้วย var ได้ทุกที่
* var variables can be re-declared and updated
> re-declared (ประกาศตัวแปรชื่อซ้ำ)
   ```JavaScript
        var greeting = 'Hey’;
        var greeting = 'Ho Ho’;
   ```
> updated (ประกาศตัวเแปรแล้วเปลี่ยนค่า)
   ```JavaScript
        var greeting = 'Hey’;
        greeting = 'Ho Ho’;
   ```
#### let
* let is block scoped
    > หมายความว่า ถ้า let ประกาศตัวแปรใน function นั้นแล้ว จะไม่สามารถเรียกใช้ตัวแปรนั้น นอก function นี้ได้
* let can be updated but *not re-declared.*
> Example for let variables
   ```JavaScript
        //greeting is block scope,
        let greeting = 'Hey';
        //let variables cannot be re-declared, only can be updated
        greeting = 'Ho Ho';
        function greeter() {
          //msg is function scoped, we cannot access the variable msg outside of a function
          let msg = 'hello';
          let greeting = 'Good morning';
          console.log(`greeting in function is ${greeting}`); //ปริ้นท์ greeting ตัวที่ประกาศใน function
        }
        // console.log(msg); //error: msg is not defined
        greeter();
        console.log(greeting); //ปริ้นท์ greeting ตัวที่ประกาศนอก function

        let year = 'leap';
        if (year === 'leap') greeting = 'Hey 366 days';
        console.log(greeting);
   ```
> Output
   ```
   greeting in function is Good morning 
   Ho Ho 
   Hey 366 days
   ```
#### const
* เหมือน let แต่ re-declared and updated **ไม่ได้!**
> หมายความว่า ถ้าประกาศตัวแปรด้วย const แล้วจะไม่สามารถแก้ไขค่าของตัวแปรนั้นได้อีก
```JavaScript
        /*const variables*/
        const greeting = 'Hey';
        //const variables cannot be re-declared
        // const greeting = 'Ho Ho';
        //const variables cannot be updated
        // greeting = 'Hi Hi';
```
