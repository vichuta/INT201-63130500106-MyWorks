//Primitive Type in array
let arrayType = [10,'Name',true];
//Getting
    arrayType[0];   //10
    arrayType[1];   //'Name'
    arrayType[2];   //true
//Setting (แก้ไขค่าได้อิสระ)
    arrayType[0] = 20;      //arrayType = [20,'Name',true]
    arrayType[2] = false;   //arrayType = [20,'Name',false]
//Add element in array
    arrayType[3] = 'add';   //arrayType = [20,'Name',false,'add'];
    arrayType[5] = 10;      //arrayType = [20,'Name',false,'add',<1 empty item>, 10 ];
    delete arrayType[2];

//Object in array
    let arrayB = [
      { id: 1, name: 'Ann'},
      { id: 2, name: 'Peter'},
      { id: 3, name: 'Mary'}
];
//delete
   

let arr1 = [1,2,3];
    let arr2 = [arr1,4,5]; //arr2 => [ [ 1, 2, 3 ], 4, 5 ] *แบบนี้คือการเอา array มาเก็บไว้ใน array (array ซ้อน array)
    arr2 = [...arr1,4,5];   //arr2 => [1,2,3,4,5] **เอา array มาต่อกันใน array เดียว**
    
//ลองแก้ไขค่าข้างใน arr2
    arr2[0] = 0;
    console.log(arr2)   //[ 0, 2, 3, 4, 5 ]
    console.log(arr1)   //[ 1, 2, 3 ]       (arr1 ไม่เปลี่ยนตาม)
    arr1[0] = 6;
    console.log(arr2)   
    console.log(arr1)  

const products1 = [ {id: 1, price: 10},{id: 2, price: 5}]; //Object of Array
let newProduct = {id: 3, price: 20};  //Object
console.log(products1);
console.log(newProduct);
console.log(`-------รวม array object--------`);
let allProducts = [...products1,{...newProduct}]; 
console.log(products1);
console.log(newProduct);
console.log(allProducts);
console.log(`-------แก้ไขค่า newProduct---------`);
newProduct.price=100;
console.log(products1);   
console.log(newProduct);
console.log(allProducts);//id 3 ไม่เปลี่ยนตาม
console.log(`-------เพิ่มค่า product1---------`);
products1[2]= {id: 4, price:20};
console.log(products1);   
console.log(newProduct);
console.log(allProducts);//ไม่ขึ้น id 4
console.log(`-------แกไขค่า allproduct---------`);
allProducts[0].id=0;
console.log(products1);   
console.log(newProduct);
console.log(allProducts);


let a = ["hello"]; 
let value = a[0]; // Read element 0
a[1] = 3.5; // Write element 1
let i = 2;
a[i] = 3; // Write element 2
a[i + 1] = "world"; // Write element 3
a[a[i]] = a[0];