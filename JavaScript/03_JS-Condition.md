# JavaScript Control Structures
## Type Conversions
### 1. Explicit Conversions = แปลง type ด้วย function
```JavaScript
    Number('3');    //3
    String(false);  //"false"
    Boolean([]);    //true
```
### 2. Implicit Conversions = แปลง type ให้อัตโนมัติ
```JavaScript
    'a' + 1     //'a1'  (เปลี่ยน Number -> String)
    '5' * '4'   //20    (เปลี่ยน String -> Number)
    true + 1    //2     (true มีค่าเป็น 1)
    false +1    //1     (false มีค่าเป็น 0)
    null * 1    //0     (null มีค่าเป็น 0)
```
## ตาราง Conversion
| Value     | to String    | to Number | to Boolean   |
|:----------|:------------:|:---------:|:-----------: |
|uuderfined |`"underfined"`|`NaN`      |`false`       |
|null       |`"null"`      |`0`        |`false`       |
|true       |`"true"`      |`1`        |              |   
|false      |`"false"`     |`0`        |              | 
|""         |              |`0`        |`false`       |
|"1.2"      |              |`1.2`      |`true`        |   
|"one"      |              |`NaN`      |`true`        | 
|0          |`"0"`         |           |`false`       |
|-0         |`"0"`         |           |`false`       |
|1          |`"1"`         |           |`true`        |
|Infinity   |`"Infinity"`  |           |`true`        |
|-Infinity  |`"-Infinity"` |           |`true`        |
|NaN        |`"NaN"`       |           |`false`       |
|[ ]        |`""`          |`0`        |`true`        |
-----
## JavaScript Operators 
### การดำเนินการของ JS จะทำตามลำดับต่อไปนี้
1. Increment `++` and Decrement `--`
2. Invert Boolean value `!`
3. Type of operand `typeOf`
4. Arithmetic operators `*`, `/`, `%`, `+`, `-`
```JavaScript
    console.log(10+20/5-4*2%4);   //14
    //10+(20/5)-(4*2%4)  =>  10+4-(8%4)  =>  14+0           
```
5. Relational operators `<`, `>`, `<=`, `>=`
6. Equality operators - การเปรียบเทียบ (เฉพาะ Primitie Type)
 * 6.1 non starict equality `==`, `!=` (ไม่เช็ค Conversion)
```JavaScript
null == undefined   //**true**
 "0" == 0           // true: "0" --> 0          (String -> Number)
   0 == false       // true: false --> 0        (Boolean -> Number)
 "1" == true        // true: "1" --> 1 --> true (String -> Number -> Boolean)
```
 * 6.2 starict equality `===`, `!==` (เช็ค Implicit Conversion = ถ้ามีจะเป็น `false`)
```JavaScript
//เป็น false ทั้งหมด เพราะมีการ Conversion แบบ Implicit
null === undefined   // false
 "0" === 0           // false
   0 === false       // false
 "1" === true        // false 

true === Boolean("true") // true: เพราะนับว่าเป็น Implicit Conversion
```
7. Logical operators `&&`, `||`
```JavaScript
    console.log(true&&false);   //false
    console.log(true||false);   //true                 
```
8. Conditional operators `?:`
```JavaScript
    let count = 5;
    let result = count > 5 ? 'True' : 'False';      
    console.log(result);                        //False
```
9. Assignment operators `+=`, `-=`, `*=`, `/=`, `%=`

----
## if-else
```JavaScript
    let x = 6;
    if(x == 5){
        console.log(`${x} = 5`);    
    }else if(x > 0){
        console.log(`${x} > 0`);//print >> '6 > 0'
    }else{
        console.log(`${x} คืออะไรไม่รู้ `);
    }
```
## switch...case
```JavaScript
    let n = 22 % 3; //22%3 => 1
    switch(n){
        case 0: console.log('หาร 3 ลงตัว'); 
        break;
        case 1: console.log('เหลือเศษ 1');//print >> 'เหลือเศษ 1'
        break;
        case 2: console.log('เหลือเศษ 2');
        break;
    }
```
## while
```JavaScript
    let count = 0;
    while(count < 5) {
        console.log(count); // print เลข 0-4
        count++;
    }
```
## do...while
```JavaScript
    let count = 0;
    do{
        console.log(count); //print > 0 1 2 3 4
        count++;
    }
    while(count < 5);
```
## for
```JavaScript
    let data = ['A','B','C'];
    for(let i = 0, len = data.length; i < len; i++)
    console.log(data[i]); //print > A B C
```
* **for-of** (เหมือน iterable) ใช้เข้าถึง element แต่ละตัวใน collection เช่น array, string, set, map
```JavaScript
    let data = [10,20,30];
    let sum = 0;
    for(let element of data) {
        sum += element;
    };
    console.log(`sum = ${sum}`);    //sum = 60
```
* **for-in** ใช้เข้าถึง property แต่ละตัวใน object
```JavaScript
    for(let property in object) {
    console.log(property);          //print property name
    console.log(object[property]);  //print value of each property
    }
```
