# JavaScript String
  รวม function ของ String : <https://www.w3schools.com/jsref/jsref_obj_string.asp>
  > ตัวอย่าง JavaScript String
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
    msg=msg.toLocaleLowerCase();    //'js'
    console.log("Hello" + msg)      //Hellojs
    console.log(`Hello everyone, 'section' ${msg}`) // ใช้ ` ` ช่วยประหยัดการใช้ + ต่อคำ
    console.log(`Hello          
    World`)                     //Hello
                                //World (ขึ้นบรรทัดใหม่ได้)
    console.log(`Hello ${msg+1}`)   //Hello js1
    console.log(`Hello ${1000}`)    //Hello 1000
    console.log(`Hello ${true && false}`)   //Hello false
    console.log(`Hello ${msg.charAt(1)}`)   //Hello s
```
#Object
* ตัวประกอบแต่ละส่วนของ object 
* การสร้าง object ทั่วไป
   * สร้าง object ซ้อน object
   * สร้าง array ใน object 
   * สร้าง object ใน array
   * การสร้าง Funciton ใน object
* การแทรก Properties ใน object
* การเปรียบเทียบ object ==,===


