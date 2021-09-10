# Types, Values, and Variables
   ## Types
   แบ่งออกเป็น 2 ประเภท
   ### 1. primitive types
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
        
   #### ตารางสรุป typeof
   | Type             | Result         |
   |:---------------- |:-------------- |
   | Number           |   `number`     |
   | Boolean          |   `boolean`    |
   | String           |   `string`     |
   | Boolean          |   `boolean`    |
   | Undefined        |   `undefined`  |
   | Symbol           |   `symbol`     |
   | Any other object |   `object`     |
   | Function         |   `function`   |
   | Bigint           |   `bigint`     | 
   
        
### 2. object types  _เป็น Object ซ้อน Object ก็ได้_
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
  ```
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
  ```


## Values
### Primitive value
   * number
   * string
   * boolean
   * null (special type) มี Type เป็น **object type** 
        > NULL คือ ค่าของตัวแปรที่ตั้งไว้ เก็บค่าอื่นจะเพิ่มเข้าทีหลัง
   * undefined (special type) 
        > UNDEFINED คือ ค่าของตัวแปรที่ตั้งไว้ แต่ยังไม่รู้ว่าจะเก็บค่าอะไร
   * symbol (special type) = unistring (คือ string แบบไม่ซ้ำ)
    
## Variables (การประกาศตัวแปร)
### var
* ```var``` variables can to use globally scoped or function scoped 
  * ไม่ว่าจะประกาศตัวแปร อยู่ข้างนอก หรือ ข้างใน function ก็สามารถเรียกใช้ตัวแปรที่ถูกประกาศด้วย var ได้ทุกที่
* ```var``` variables can be re-declared and updated
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
### let 
* ```let``` is block scoped
* ```let``` can be updated but *not re-declared.*
    > ถ้าใช้ ```let``` ประกาศตัวแปรใน function นั้นแล้ว จะไม่สามารถเรียกใช้ตัวแปรนั้น นอก function นี้ได้
```JavaScript
   let greeting = 'Hey';   //greeting is block scope,
   greeting = 'Ho Ho';     //update ค่าได้ (แต่ re-declared ไม่ได้)
   function greeter() {
      let msg = 'hello';   //msg is function scoped
      let greeting = 'Good morning';
      console.log(`greeting in function is ${greeting}`);   //greeting = 'Good morning';
   }
   //console.log(msg);       //error : เรียกใช้ตัวแปรใน function ไม่ได้
   greeter();
   console.log(greeting);    //greeting = 'Ho ho'

   let year = 'leap';
   if (year === 'leap') greeting = 'Hey 366 days';
   console.log(greeting);
```
> Output
   ```
   greeting in function is Good morning     //ปริ้นท์ greeting ตัวที่ประกาศใน function
   Ho Ho                                    //ปริ้นท์ greeting ตัวที่ประกาศนอก function
   Hey 366 days
   ```
### const
* เหมือน ```let``` แต่ re-declared and updated **ไม่ได้!**
* ถ้าประกาศตัวแปรด้วย ```const``` แล้วจะไม่สามารถแก้ไขค่าของตัวแปรนั้นได้อีก
```JavaScript
      //ถ้าตัวแปรเป็น primitive จะเป็น final เปลี่ยนค่าไม่ได้ 
      const value = 3;
      //const value = 4;    //re-declared ไม่ได้
      //value = 4;          //updated     ไม่ได้ 

      //แต่ถ้าเป็น object สามารถคค่า propertyแก้ไขได้
      const student={id:1,name:"Somchai"}  
      student.email="somchai@mail.com"    
      student     //{ id: 1, name: 'Somchai', email: 'somchai@mail.com' }
```

