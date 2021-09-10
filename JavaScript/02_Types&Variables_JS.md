# Types, Values, and Variables + Type Conversions
   ## Types
   แบ่งออกเป็น 2 ประเภท
   ### 1. primitive types
   * number - including integer and floating-point numbers between -2^53 to 2^53
   * string (รวมถึง char)
   * boolean 
    > Example for primitive types
   ```javascript
        let myNum = 0;
        console.log(`type of myNum is ${typeof myNum}`);          //type of myNum is number

        let myString = 'Good';
        console.log(`type of myString is ${typeof myString}`);    //type of myString is string

        let myBool = true;
        console.log(`type of myBool is ${typeof myBool}`);        //type of myBool is boolean

        let myUndefined;
        console.log(`type of myUndefined is ${typeof myUndefined}`); //type of myUndefined is undefined

        let mySymbol = Symbol();
        console.log(`type of mySymbol is ${typeof mySymbol}`);    //type of mySymbol is symbol

        let myNull = null;
        console.log(`type of myNull is ${typeof myNull}`);        //type of myNull is object
  ```
       
### 2. object types  _เป็น Object ซ้อน Object ก็ได้_
   * An object (that is, a member of the type object) is a collection of properties where each property has a name and a value (either a primitive value or another object)
   * a special kind of object, known as an array, that represents an ordered collection of numbered values
       > Example for object type
   ```JavaScript
        //Object Type Simple
        let myObj = {id: 1,task: 'grading exam'};
        let myObj2 = {id: 1,task: 'grading exam'};
        //The JSON.stringify() method converts a JavaScript object or value to a JSON string
        console.log(`${JSON.stringify(myObj)}`);                  //{"id":1,"task":"grading exam"}
        console.log(`type of myObj is ${typeof myObj}`);          //type of myObj is object

        newObj = myObj;
        console.log(`${JSON.stringify(newObj)}`);                 //{"id":1,"task":"grading exam"}
        console.log(`type of newObj is ${typeof newObj}`);        //type of newObj is object

        console.log(`newObj === myObj is ${newObj === myObj}`);   //newObj === myObj is true
        console.log(`myObj1 === myObj2 is ${myObj === myObj2}`);  //myObj1 === myObj2 is false
        
        //Object type Array
        let myArr = [1, 2, 3];
        console.log(`myArr Length: ${myArr.length}`);             //myArr Length: 3
        console.log(`type of myArr is ${typeof myArr}`);          // type of myArr is object
        
        let a = [];
        let b = a;
        b[0] = 1;
        let c = [1];
        console.log(`a === b is ${a === b}`);         //a === b is true
        console.log(`b == c is ${b == c}`);           //b == c is false
  ```
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
   
## Values
### Primitive value
   * number
   * string
   * boolean
   * null คือ ค่าของตัวแปรที่ตั้งไว้ เก็บค่าอื่นจะเพิ่มเข้าทีหลัง _(special type มี Type เป็น **object type** )_
   * undefined คือ ค่าของตัวแปรที่ตั้งไว้ แต่ยังไม่รู้ว่าจะเก็บค่าอะไร _(special type)_
   * symbol คือ string แบบไม่ซ้ำ = unistring  _(special type)_
    
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
-----
# Type Conversions
## 1. Explicit Conversions = แปลง type ด้วย function
```JavaScript
    Number('3');    //3
    String(false);  //"false"
    Boolean([]);    //true
```
## 2. Implicit Conversions = แปลง type ให้อัตโนมัติ
```JavaScript
    'a' + 1     //'a1'  (เปลี่ยน Number -> String)
    '5' * '4'   //20    (เปลี่ยน String -> Number)
    true + 1    //2     (true มีค่าเป็น 1)
    false +1    //1     (false มีค่าเป็น 0)
    null * 1    //0     (null มีค่าเป็น 0)
```
| Value   | to String    | to Number | to Boolean |
|---------|--------------|-----------|------------|
|uuderfined|underfined|NaN|false|
