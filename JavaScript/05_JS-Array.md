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
    products = [...products,newProduct]; 
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
1. Array Iterator Methods (มี 8 อัน) **ต้องมี function มารองรับ**
    1.1 `forEach()` = ใช้วน loop ไล่อ่าน element แต่ละตัวใน array 
    ```JavaScript
        let numArray = [1,2,3,4,5];
        let sum = 0;
                        //n คือ สมาชิดแต่ละตัวใน array
        numArray.forEach(n => console.log(n));          //แบบที่ 1
        
        function sumArray(e){  
            sum = sum + e; 
            console.log(sum)
        }
        numArray.forEach(sumArray);                     //แบบที่ 2 
        
        //Output 
        //(แบบที่ 1) 1 2 3 4 5
        //(แบบที่ 2) 1 3 6 10 15
    ```
    1.2 `map()` = ใช้สร้าง array ใหม่ที่มีการแก้ไขค่า element ทุกตัวใน array
    ```JavaScript
        let numArray = [1,2,3,4,5];

        let powerNum = numArray.map((x) => {return Math.pow(x,2)});
        console.log(powerNum);

        //Output 
        //[ 1, 4, 9, 16, 25 ]

    ```
    1.3 `filter()` = ใช้คัดเลือก element ใน array 
    ```JavaScript
        let ages = [10,12,18,22,35,40,45,50,60];
        function checkAge(age){ //age คือ element แต่ละตัวที่อยู่ใน ages
            return age >=18;    //return age ที่มีค่าอย่างน้อย 18
        }
        console.log(ages.filter(checkAge));
        
        //Output 
        //[18, 22, 35, 40, 45, 50, 60]
    ```
    1.4 `find()` = ค้นหา element ที่ตรงกับเงื่อนไข แล้วจะ return เป็น element ตัวแรกที่เจอ/ ถ้าหาไม่เจอจะ return เป็น -1
    ```JavaScript
        let numArray = [1,2,3,4,5];

        const findFirstOddNumber = numArray.find((element)=>{return element%2==1});
        console.log(findFirstOddNumber);
        //Output: 1     (1 เป็นเลขคี่ที่เจอตัวแรก)
    ```
    1.5 `findIndex()` = ค้นหา element ที่ตรงกับเงื่อนไข แล้วจะ return เป็น index ของ element ตัวแรกที่เจอ/ ถ้าหาไม่เจอจะ return เป็น -1
    ```JavaScript
        let numArray = [1,2,3,4,5];

        const findFirstEvenNumber = numArray.findIndex((element)=>{return element%2==0});
        console.log(findFirstEvenNumber);
        //Output: 1     (indexที่ 1 เป็นตำแหน่งที่หาเลขคู่เจอ)

    ```
    1.6 `every()` and `some()` => ใช้เช็คเงื่อนไขของ element ทุกตัวใน array แล้วจะ return --> ture / false
    //every() ต้องเป็น true ทุกตัว => return true / ถ้าเป็น false ตัวเดียว => return false          
    //some() ถ้าเป็น true ตัวเดียว => return true / แต้ถ้าเป็น false ทุกตัว => return false
    ```JavaScript
        let numArray = [1,2,3,4,5]; 

        function checkNum(element,index,array){
            console.log(`${array} : index ที่ ${index} มีเท่ากับ => ${element}`);
            return element < 5; 
        }
        let resultReturnFromEvery = numArray.every(checkNum);
        console.log(`Every : ${resultReturnFromEvery}`); //Output: false เพราะมีเลข 5 ที่ไม่เข้าเงื่อนไข

        let resultReturnFromSome = numArray.some(checkNum);
        console.log(`Some : ${resultReturnFromSome}`);  
        //Output
    /*
        1,2,3,4,5 : index ที่ 0 มีเท่ากับ => 1       // 1<5 : true
        1,2,3,4,5 : index ที่ 1 มีเท่ากับ => 2       // 1<5 : true
        1,2,3,4,5 : index ที่ 2 มีเท่ากับ => 3       // 1<5 : true
        1,2,3,4,5 : index ที่ 3 มีเท่ากับ => 4       // 1<5 : true
        1,2,3,4,5 : index ที่ 4 มีเท่ากับ => 5       // 5<5 : false*
        Every : false                           // ถ้าเจอ false จะ return false ทันที
        
        1,2,3,4,5 : index ที่ 0 มีเท่ากับ => 1       // 1<5 : true
        Some : true                             // ถ้าเจอ true อย่างน้อย 1 ค่าจะ return true ทันที
    */
    ```
    1.7 `reduce()`= ใช้วน loop เพื่อสะสมค่า element ใน array
    ```JavaScript
        let numArray = [1, 2, 3, 4, 5];
        const reduceSum = (previousValue, currentValue, indexCurrent) => {
            console.log(`previousValue : ${previousValue}, currentValue :  ${currentValue}, indexCurrent : ${indexCurrent}`);
            return previousValue + currentValue;
        };
        console.log(numArray.reduce(reduceSum));
        console.log(numArray.reduce(reduceSum, 5));   //5 => previousValue รอบแรกให้ขึ้นต้นด้วย 5

        // Output : 
        /*  previousValue : 1, currentValue :  2, indexCurrent : 1
            previousValue : 3, currentValue :  3, indexCurrent : 2
            previousValue : 6, currentValue :  4, indexCurrent : 3
            previousValue : 10, currentValue :  5, indexCurrent : 4
            15
            previousValue : 5, currentValue :  1, indexCurrent : 0
            previousValue : 6, currentValue :  2, indexCurrent : 1
            previousValue : 8, currentValue :  3, indexCurrent : 2
            previousValue : 11, currentValue :  4, indexCurrent : 3
            previousValue : 15, currentValue :  5, indexCurrent : 4
            20
        */  
   
    ```
2. Stack and queue methods (มี 4 ตัว)
    2.1 `push()` = เพิ่ม element ต่อท้าย array
    ```JavaScript
        let fruits = ["Banana", "Orange", "Apple", "Mango"];
        fruits.push("Kiwi");    // Adds "Kiwi" to fruits
        console.log(fruits);
        console.log(fruits.length);
    ```
    2.2 `pop()` = ลบ element ตัวสุดท้ายของ array
    ```JavaScript
        let fruits = ["Banana", "Orange", "Apple", "Mango"];
        console.log(fruits);    //[ 'Banana', 'Orange', 'Apple', 'Mango' ]
        let x = fruits.pop();   // Removes "Mango" from fruits
        console.log(fruits);    //[ 'Banana', 'Orange', 'Apple' ]
        console.log(x);         //Mango
    ```
    2.3 `unshift()` = เพิ่ม element ในตำแหน่งแรกของ array
    ```JavaScript
        fruits = ["Banana", "Orange", "Apple", "Mango"];
        fruits.unshift("Lemon"); 
        console.log(fruits);    //[ 'Lemon', 'Banana', 'Orange', 'Apple', 'Mango' ]
    ```
    2.4 `shift()` = ลบ element ตัวแรกของ array
    ```JavaScript
        fruits = ["Banana", "Orange", "Apple", "Mango"];
        fruits.shift();         // Removes "Banana" from fruits
    ```
3. Subarray methods  (มี 3 ตัว)
    3.1 `slice()` = เลือก sub array โดยการอ้างผ่าน index ตัวเริ่มต้นที่จะเลือก กับ index ตัวสุดท้ายที่จะเลือก
    ```JavaScript
        let letters = ['A','B','C','D','E','F'];
        
        console.log(letters.slice(1,4));   // (indexFrom,indexTo +1)
        console.log(letters.slice(3));
        console.log(letters.slice(-2));

        //Output:
        //[ 'B', 'C', 'D' ]    >>  .slice(1,4) : เลือก elemnt indexที่ 1,2,3 (4-1 = 3 ตัว *ไม่เอาindex=4) 
        //[ 'D', 'E', 'F' ]    >>  .slice(3)  : เลือก element ตั้งแต่ index 3 เป็นต้นไป
        //[ 'E', 'F' ]         >>  .slice(-2) : เลือก element 2 ตัวสุดท้าย

    ```
    3.2 `splice()` = ใช้ insert, update, replace, delete >> element ใน array
    ```JavaScript
        let numbers = ['a','b','d'];

    //Insert : .splice(index, 0, item1, item2, ...)
        numbers.splice(2,0,'C');
        console.log(numbers);

        numbers.splice(4,0,'E','F');
        console.log(numbers);    
        
        //Output:
        //[ 'a', 'b', 'C', 'd' ]              >>  .splice(2,0,'C')      : index ที่ 2 , ไม่ replace , เพิ่ม 'C'
        //[ 'a', 'b', 'C', 'd', 'E', 'F' ]    >>  .splice(4,0,'E','F')  : index ที่ 4 , ไม่ replace , เพิ่ม 'E','F'

    //Update : .splice(index, num_of_item, item1, item2)
        numbers.splice(0,2,'A','B');
        console.log(numbers);
        //Output:
        //[ 'A', 'B', 'C', 'd', 'E', 'F' ]  >>  .splice(0,2,'A','B')  : index ที่ 0 , replace 2 ตัว(index 0,1)  , แก้เป็น 'A','B' ตามลำดับ

    //Replace : .splice(index, num_of_replace, item...)
        numbers.splice(3,3,'D');
        console.log(numbers);    
        //Output:
        //[ 'A', 'B', 'C', 'D' ]            >>  .splice(3,3,'D')      : index ที่ 3 , replace 3 ตัว(index 3,4,5), แก้เป็น 'D' 

    //Delete : .splice(indexFrom, indexTo) 
        numbers.splice(0, 2);                  
        console.log(numbers);   

        //Output:
        //[ 'C', 'D' ]                      >>  .splice(0, 2)  : index ที่ 0,1 (2-0= 2 ตัวไม่เอา 2) ให้ลบออก
    ```
    3.3 `fill()`
    ```JavaScript
        
    ```
4. Searching and sorting methods (มี 4 ตัว)
    4.1 `indexOf()`= ใช้ search element ใน array แต่จะ return แค่ตัวเดียว+ตัวแรกที่หาเจอ
    ```JavaScript
        //SynTax :  
        //Array.IndexOf(searchElement)
        //Array.IndexOf(searchElement,fromIndex)
        let numArray = [1,2,3,4,5];     

        const element_0 = numArray.indexOf(0);
        console.log(element_0);       //----------------------->  -1 : ไม่เจอเลข 0 ใน array นี้
        
        const element_3 = numArray.indexOf(3);
        console.log(element_3);       //----------------------->  2 : เจอเลข 1 ที่ index=0

        const element_3_fromIndex_3 = numArray.indexOf(3,3);
        console.log(element_3_fromIndex_3); //----------------->  -1 : ไม่เจอเลข 3 ใน array ช่วงหลัง index=3 เป็นต้นไป
  
    ```
    4.2 `includes()` = ใช้ค้นกา element ที่ต้องการ array โดยถ้าเจอ/ไม่เจอจะ return เป็น true/false
    ```JavaScript
        let fruits = ["Apple","Banana", "Orange", "Mango"];
    
        const searchFruits = fruits.includes('Apple');
        console.log(searchFruits);                      
        //Output: true 
        //ระวัง!!การเปรียบเทียบ String Uppercase/Lowercase
    ```
    4.3 `sort()` = ใช้เรียงข้อมูลใน array 
    ```JavaScript
        let fruits = ["Orange","Banana","Apple","Mango"];
    
        const sortFruits = fruits.sort();
        console.log(sortFruits);
        
        //Output: [ 'Apple', 'Banana', 'Mango', 'Orange' ]
  //Sort Object ต้องเขียน function เพิ่ม
    let drinks = [{name:'Water',price:5},{name:'Coke',price:12},{name:'Milk',price:20},{name:'Juice',price:15}];
    function sortByName(a,b){
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toLowerCase();
        if(nameA<nameB){ return -1}
        else if(nameA>nameB){ return 1}
        else {return 0}
    }
    function sortByPrice(a,b){
        let nameA = a.price;
        let nameB = b.price;
        if(nameA<nameB){ return -1}
        else if(nameA>nameB){ return 1}
        else {return 0}
    }
    const sortByNameDrinks = drinks.sort(sortByName);
    console.log('Sorting by name drinks');
    console.log(sortByNameDrinks);

    const sortByPriceDrinks = drinks.sort(sortByPrice);
    console.log(`Sorting by name drinks ${JSON.stringify(sortByPriceDrinks)}`);

    //Output:
    //Sorting by name drinks
    /*  [
        { name: 'Juice', price: 15 },
        { name: 'Milk', price: 20 },
        { name: 'Coke', price: 12 },
        { name: 'Water', price: 5 }
        ]
        Sorting by name drinks [{"name":"Water","price":5},{"name":"Coke","price":12},{"name":"Juice","price":15},{"name":"Milk","price":20}]
    */
    ```
    4.4 `reverse()` = เรียง element ของ array กลับหลัง (จากหลังมาหน้า)
    ```JavaScript
        let letter1 = ['A','B','C','D'];

        const reverseLetter1 = letter1.reverse();
        console.log(reverseLetter1);

        // Output 
        // [ 'D', 'C', 'B', 'A' ]
        
    ```
5. Array to String Conversions
    5.1 `join()` = แปลง element -> String เช่น `['H','i']`--> `'Hi'`
    ```JavaScript
        let fruits = ["Banana", "Apple", "Mango", "Orange"]
        console.log(fruits.join('|'));    // ใช้ | คั่นระหว่าง element
        //Output :
        //Banana|Apple|Mango|Orange
    ```
    5.2 `split()` = แปลง String เป็น Array
    ```JavaScript
        let text = 'Hello.Final.Exam.INT201';
        const word = text.split('.')    //ใช้ . เป็นตัวแบ่ง String เป็น element
        console.log(word);    
        //Output :
        //[ 'Hello', 'Final', 'Exam', 'INT201' ]
    ```
6. Other Array method
    6.1 `concat()` = ใช้ Array รวมตัวแปรเข้าด้วยกัน แล้ว return --> Array
    ```JavaScript
        let letter1 = ['A','B','C','D'];
        let letter2 = ['E','F','G'];
        let letter3 = ['H','I'];
        let num = {id: 001, name: 'Nice'};

        const AllLetter = letter1.concat(letter2,letter3,'J','K',123,num);
        console.log(AllLetter);
        // Output 
        // ['A', 'B', 'C','D', 'E', 'F','G', 'H', 'I', 'J', 'K', 123,4]
    ```
* อ่านเพิ่มเติม
* <https://medium.com/@camp191/javascript-%E0%B8%88%E0%B8%B1%E0%B8%94%E0%B8%81%E0%B8%B2%E0%B8%A3-array-%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%87%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B9%86-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-map-filter-reduce-%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%9C%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%99-bfc84e59ebae>
