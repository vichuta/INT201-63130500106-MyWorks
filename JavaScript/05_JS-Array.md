# JavaScript Array
1. The Array() constructor
2. ประเภทของ Array
3. Spread operator
4. Destructuring assignment
5. Iterating Arrays
6. Array Methods 
---
## Array
* ใช้เก็บของเป็น **collection** 
* ใช้เก็บ type อะไรก็ได้
* มี typeof เป็น `object`

## The Array() constructor
```JavaScript
    let a = new Array();      //สร้าง Array เปล่า       a = []
    let b = new Array(10);    //กำหนด size Array     b = [ <10 empty items> ]
    let c = new Array(1,2,3); //สร้าง element ใน Array c = [ 1, 2, 3 ]
```
## ประเภทของ Array
1. Array literals Primitive Type in array
```JavaScript
    let arrayType = [10,'Name',true];
//การเรียกใช้
    arrayType[0];   //10
    arrayType[1];   //'Name'
    arrayType[2];   //true
//การแก้ไขค่า (แปลงเป็น type อื่นได้อิสระ)
    arrayType[0] = 20;      //arrayType = [20,'Name',true]
    arrayType[2] = false;   //arrayType = [20,'Name',false]
//การเพิ่ม element ใหม่เข้าไปใน array
    arrayType[3] = 'add';   //arrayType = [20,'Name',false,'add'];
    arrayType[5] = 10;      //arrayType = [20,'Name',false,'add',<1 empty item>, 10 ];
//การลบ element ออกจาก array
    delete arrayType[1];    //arrayType = [20,<1 empty item>,false,'add',<1 empty item>, 10 ];
```
2. Object in array
```JavaScript
    let arrayObject = [
      { id: 1, name: 'Ann'},
      { id: 2, name: 'Peter'},
      { id: 3, name: 'Mary'}
    ];
//การเรียกใช้
    arrayObject[0].id;      //1
    arrayObject[2].name;    //'Mary'
```
3. Array in Array = array ซ้อน array
```JavaScript
    let arrInarr = [
      [1,2,3],
      ['a','b','c','d'],
      [true,[0,false,'f']]
    ];
//การเรียกใช้
    arrInarr[0];        //[ 1, 2, 3 ]
    arrInarr[0][1];     //2
    arrInarr[1]         //[ 'a', 'b', 'c', 'd' ]
    arrInarr[1][2];     //'c'
    arrInarr[2];        //[true,[0,false,'f']]
    arrInarr[2][1];     //[0,false,'f']
    arrInarr[2][1][0];  //0
```

## Spread operator
* คือ การใช้ `...Array` copy array มาต่อกัน
```JavaScript
    let arr1 = [1,2,3];
    let arr2 = [arr1,4,5]; //arr2 => [ [ 1, 2, 3 ], 4, 5 ] *แบบนี้คือการเอา array มาเก็บไว้ใน array (array ซ้อน array)
    arr2 = [...arr1,4,5];   //arr2 => [1,2,3,4,5] **เอา array มาต่อกันใน array เดียว**
    
//ลองแก้ไขค่าข้างใน arr2
    arr2[0] = 0;
    console.log(arr2)   //[ 0, 2, 3, 4, 5 ]
    console.log(arr1)   //[ 1, 2, 3 ]       (arr1 ไม่เปลี่ยนตาม)
```
   > แสดงว่า `...Array` เป็น _Shallow copy_ เพราะไม่ได้ copy memory address ของ array มาด้วย 

* แต่ในกรณีของ `...Object` จะ copy address object มาอยู่!!! ทำให้แก้ไขค่าที่ object หลักได้
```JavaScript
    let products = [ {id: 1, price: 5},{id: 2, price: 10}]; //Object of Array
    let newProduct = {id: 3, price: 20};                    //Object
    //...Object of Array หรือ ...Object => นับว่าเป็นการ copy address ทั้งหมด
    products = [...products,...newProduct]; 
    products //[ { id: 1, price: 10 }, { id: 2, price: 5 }, { id: 3, price: 20 } ]

//ลองแก้ไขค่าใน Object >> ทำให้ products เปลี่ยนตาม
    newProduct.price = 100;
    products //[ { id: 1, price: 10 }, { id: 2, price: 5 }, { id: 3, price: 100 } ]
```
   > วิธีปกป้องการ update ค่าของ Object of Array เมื่อมีการแก้ไขค่าผ่าน Object
```JavaScript
//วิธีแก้ที่ 1 : เพิ่ม {} ครอบ ...Object
    products = [...products,{...newProduct}]; 
    newProduct.price = 100;
    newProduct  //{ id: 3, price: 100 }
    products    //[ { id: 1, price: 10 }, { id: 2, price: 5 }, { id: 3, price: 20 } ]

//วิธีแก้ที่ 2 : นำ property ของ obj มาใส่แทนการใช้ ...
    products = [...products,{id: newProduct.id, price: newProduct.price}]; 
    newProduct.price = 200;
    newProduct  //{ id: 3, price: 200 }
    products    //[ { id: 1, price: 10 }, { id: 2, price: 5 }, { id: 3, price: 20 } ]
```
## Destructuring assignment
* คือ การใช้ตัวแปรมากกว่า 1 ตัว มารับค value หลายๆค่า
```JavaScript
    let a, b, rest;
//Destructuring assignment
    [a, b] = [5, 10]; //a=5, b=10
    console.log(a);   //5
    console.log(b);   //10

//...rest = rest จะเก็บ value ที่เหลือให้
    [a, b, ...rest] = [5, 10, 15, 20, 25];
    console.log(rest); //[15,20,25]

//การดึง property object มาเก็บในตัวแปร
    ({ a, b } = { a: 10, b: 20 });  //ชื่อ property กับชื่อตัวแปร **ต้องตรงกัน**
    console.log(a); //10
    console.log(b); //20

    ({ c, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
    console.log(a); // 10
    console.log(c); // 30
    console.log(rest); // {a: 10, d: 40} (ดึงค่า c,b ออกไปแล้ว)
```
## Iterating Arrays
* การใช้ `...String` เพื่อใช้แปลงรูปของข้อความ String เป็น Array ที่เก็บตัวอักขระแทน
* ในการทำ Iterating Arrays มักจะใช้ `for-of`เข้ามาช่วย
```JavaScript
    let letters = [...'Hello']; //letters => [ 'H', 'e', 'l', 'l', 'o' ]
    let msg = '';
    for (let ch of letters) {
        msg += ch + ', ';
    }
    console.log(msg); //H, e, l, l, o,
    
    let value = '';
    for (let [index, letter] of letters.entries()) { //.entries() => return key,value
        if (index % 2 === 0) value += letter;        //เลือกตัวอักษรตำแหน่งเลขคู่
    }
    console.log(`value: ${value}`); //Hlo
```
## Array Methods 
* Array Iterator Methods
    * `forEach()`
    ```JavaScript
    ```
    * `map()` 
    * `filter()` = return เป็น subset ของ array
    * `find()` = return element ทั้งหมดที่ตรงกับเงื่อนไข
    * `findIndex()` = return เป็น index ของ element นั้นๆ
    * `every()` and `some()`
    * `reduce()`
* Stack and queue methods
    * `push()` = เพิ่ม element ต่อท้าย array
    ```JavaScript
        let fruits = ["Banana", "Orange", "Apple", "Mango"];
        fruits.push("Kiwi");    // Adds "Kiwi" to fruits
        console.log(fruits);
        console.log(fruits.length);
    ```
    * `pop()` = ลบ element ตัวสุดท้ายของ array
    ```JavaScript
        let fruits = ["Banana", "Orange", "Apple", "Mango"];
        console.log(fruits);    //[ 'Banana', 'Orange', 'Apple', 'Mango' ]
        let x = fruits.pop();   // Removes "Mango" from fruits
        console.log(fruits);    //[ 'Banana', 'Orange', 'Apple' ]
        console.log(x);         //Mango
    ```
    * `unshift()` = เพิ่ม element ในตำแหน่งแรกของ array
    * `shift()` = ลบ element ตัวแรกของ array
* Subarray methods 
    * `slice()` 
    * `splice()` 
    * `fill()`
* Searching and sorting methods
    * `indexOf()`= ใช้ search element ใน array แต่จะ return แค่ตัวเดียว+ตัวแรกที่หาเจอ
    * `includes()`
    * `sort()` = เรียงลำดับ element ใน array (จากน้อยไปมาก) 
    * `reverse()` = เรียง element ของ array กลับหลัง (จากหลังมาหน้า)
* Array to String Conversions
    * `join()` = แปลง element -> String เช่น `['H','i']`--> `'Hi'`
    ```JavaScript
        let fruits = ["Banana", "Apple", "Mango", "Orange"]
        console.log(fruits.join(', '));   //Banana, Apple, Mango, Orange
    ```
