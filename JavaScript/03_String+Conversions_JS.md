# JavaScript String
    รวม function ของ String >> https://www.w3schools.com/jsref/jsref_obj_string.asp
```JavaScript
    //String Function
    let msg = 'JS';
    msg.length                  //บอกจำนวนตัวอักษร 2
    msg.charAt();               //charAt() = ดูตัวอักษรตัวแรก คือ 'J' 
    msg.charAt(msg.length);     //charAt(msg.length) = charAt(2) คือ '' (ไม่มี)
    msg.charAt(msg.length-1);   //charAt(msg.length-1) = charAt(1) คือ  'S'
    msg.toLocaleLowerCase();    //toLocaleLowerCase() = ปรับให้เป็นตัวเล็ก 'js' String --> immutable
    //Immutable คือ ไม่ได้เปลี่ยนเปลี่ยนค่า msg แต่ return ตามค่า function LowerCase เป็น String ตัวใหม่
    msg                         //'JS' 
    msg.substring(0,2);         //เริ่มที่ 0 จบที่ 2 = 'S'
    msg=msg.toLocaleLowerCase();//'js'
    console.log("Hello" + msg)  //Hellojs
    console.log(`Hello everyone, 'section' ${msg}`) // ใช้ ` ช่วยประหยัดการใช้ + ต่อคำ
    console.log(`Hello          
    World`)                     //Hello
                                //World (ขึ้นบรรทัดใหม่ได้)
    console.log(`Hello ${msg+1}`)   //Hello js1
    console.log(`Hello ${1000}`)    //Hello 1000
    console.log(`Hello ${true && false}`)   //Hello false
    console.log(`Hello ${msg.charAt(1)}`)   //Hello s
```
# Type Conversions
## 1.Explicit Conversions = แปลง type ด้วย function
```JavaScript
    Number('3');    //3
    String(false);  //"false"
    Boolean([]);    //true
```
## 2.Implicit Conversions = แปลง type ให้อัตโนมัติ
```JavaScript
    'a' + 1     //'a1'  (เปลี่ยน Number -> String)
    '5' * '4'   //20    (เปลี่ยน String -> Number)
    true + 1    //2     (true มีค่าเป็น 1)
    false +1    //1     (false มีค่าเป็น 0)
    null * 1    //0     (null มีค่าเป็น 0)
```


