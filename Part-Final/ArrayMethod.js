// Array Method
    //1.Iterator (มี 8 ตัว)

///1.1 forEach() = ใช้วน loop ไล่อ่าน element แต่ละตัวใน array 
    let numArray = [1,2,3,4,5];
    let sum = 0;
                    //n คือ สมาชิดแต่ละตัวใน array
    numArray.forEach(n => console.log(n));          //แบบที่ 1
    
    function sumArray(e){  
        sum = sum + e; 
        return sum;
    }
    let sumview = numArray.forEach(sumArray);                     //แบบที่ 2 
    
    //Output 
    //(แบบที่ 1) 1 2 3 4 5
    //(แบบที่ 2) 1 3 6 10 15

///1.2 map() = ใช้สร้าง array ใหม่ที่มีการแก้ไขค่า element ทุกตัวใน array
    let numArray = [1,2,3,4,5];

    let powerNum = numArray.map((x) => {return Math.pow(x,2)});
    console.log(powerNum);

    //Output 
    //[ 1, 4, 9, 16, 25 ]

///1.3 filter() = ใช้คัดเลือก element ใน array 
    let ages = [10,12,18,22,35,40,45,50,60];
    function checkAge(age){ //age คือ element แต่ละตัวที่อยู่ใน ages
        return age >=18;    //return age ที่มีค่าอย่างน้อย 18
    }
    console.log(ages.filter(checkAge));
    
    //Output 
    //[18, 22, 35, 40, 45, 50, 60]

///1.4 find() = ค้นหา element ที่ตรงกับเงื่อนไข แล้วจะ return เป็น element ตัวแรกที่เจอ/ ถ้าหาไม่เจอจะ return เป็น -1
    let numArray = [1,2,3,4,5];

    const findFirstOddNumber = numArray.find((element)=>{return element%2==1});
    console.log(findFirstOddNumber);
    //Output: 1     (1 เป็นเลขคี่ที่เจอตัวแรก)

///1.5 findIndex() = ค้นหา element ที่ตรงกับเงื่อนไข แล้วจะ return เป็น index ของ element ตัวแรกที่เจอ/ ถ้าหาไม่เจอจะ return เป็น -1
    let numArray = [1,2,3,4,5];

    const findFirstEvenNumber = numArray.findIndex((element)=>{return element%2==0});
    console.log(findFirstEvenNumber);
    //Output: 1     (indexที่ 1 เป็นตำแหน่งที่หาเลขคู่เจอ)

///1.6 every() and some() => ใช้เช็คเงื่อนไขของ element ทุกตัวใน array แล้วจะ return --> ture / false
    //every() ต้องเป็น true ทุกตัว => return true / ถ้าเป็น false ตัวเดียว => return false          
    //some() ถ้าเป็น true ตัวเดียว => return true / แต้ถ้าเป็น false ทุกตัว => return false
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

///1.8 reduce() : ใช้วน loop เพื่อสะสมค่า element ใน array
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
   
    //2.Stack and queue (มี 4 ตัว)
///2.1 push() = เพิ่ม element ต่อท้าย array
///2.2 pop() = ลบ element ตัวท้ายออก
///2.3 unshift() = เพิ่ม element ตัวแรก ลงใน array
///2.4 shift() = ลบ element ตัวแรกออก

    //3.Subarray methods(มี 3 ตัว)
///3.1 slice() = เลือก sub array โดยการอ้างผ่าน index ตัวเริ่มต้นที่จะเลือก กับ index ตัวสุดท้ายที่จะเลือก
    let letters = ['A','B','C','D','E','F'];
       
    console.log(letters.slice(1,4));   // (indexFrom,indexTo +1)
    console.log(letters.slice(3));
    console.log(letters.slice(-2));

    //Output:
    //[ 'B', 'C', 'D' ]    >>  .slice(1,4) : เลือก elemnt indexที่ 1,2,3 (4-1 = 3 ตัว *ไม่เอาindex=4) 
    //[ 'D', 'E', 'F' ]    >>  .slice(3)  : เลือก element ตั้งแต่ index 3 เป็นต้นไป
    //[ 'E', 'F' ]         >>  .slice(-2) : เลือก element 2 ตัวสุดท้าย

///3.2 splice() = ใช้ insert, update, replace, delete >> element ใน array
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


///3.3 fill()

    //4.Searching and sorting 
///4.1 indexOf() = ใช้ค้นหา element ที่ต้องการใน array โดยจะ return เป็น Index ที่ของ search เจอ/ ถ้าหาไม่เจอจะ return เป็น -1
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

///4.2 includes() = ใช้ค้นกา element ที่ต้องการ array โดยถ้าเจอ/ไม่เจอจะ return เป็น true/false
    let fruits = ["Apple","Banana", "Orange", "Mango"];
    
    const searchFruits = fruits.includes('Apple');
    console.log(searchFruits);                      
    //Output: true 
    //ระวัง!!การเปรียบเทียบ String Uppercase/Lowercase

    
///4.3 sort() = ใช้เรียงข้อมูลใน array
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

///4.4 reverse() = ใช้เรียงข้อมูลย้อนกลับ
    let letter1 = ['A','B','C','D'];

    const reverseLetter1 = letter1.reverse();
    console.log(reverseLetter1);

    // Output 
    // [ 'D', 'C', 'B', 'A' ]

    //5.Array Conversions Type
///5.1 join() = แปลง Array เป็น String
    let fruits = ["Banana", "Apple", "Mango", "Orange"]
    console.log(fruits.join('|'));    // ใช้ | คั่นระหว่าง element
    //Output :
    //Banana|Apple|Mango|Orange

///5.2 split() = แปลง String เป็น Array
    let text = 'Hello.Final.Exam.INT201';
    const word = text.split('.')    //ใช้ . เป็นตัวแบ่ง String เป็น element
    console.log(word);    
    //Output :
    //[ 'Hello', 'Final', 'Exam', 'INT201' ]

    //6.Other Array method
///6.1 concat() = ใช้ Array รวมตัวแปรเข้าด้วยกัน แล้ว return --> Array
    let letter1 = ['A','B','C','D'];
    let letter2 = ['E','F','G'];
    let letter3 = ['H','I'];
    let num = {id: 001, name: 'Nice'};

    const AllLetter = letter1.concat(letter2,letter3,'J','K',123,num);
    console.log(AllLetter);
    // Output 
    // ['A', 'B', 'C','D', 'E', 'F','G', 'H', 'I', 'J', 'K', 123,4]


