//1.Higher-Order Functions >> รับ param เป็น fn || return เป็น fn 
let listCoffee = ['Americano','Cappuccino','Espresso','Latte','Mocha'];
//Higher-Order Functions
function excute(array,fn,other){
    return fn(array,other);
}
//Other function
    //นับจำนวนสมาชิกใน array
    let countElement = (x)=> x.length;

    //เพิ่มสมาชิกใน array
    let addElement = function(array,newProduct){
        array.push(newProduct);
        return array;
    }
    //ค้นหาสมาชิกใน array ตาม keyword
    let searchName = function(array,keyword){
        return array.find((name)=>name === keyword);
    }

console.log(excute(listCoffee,countElement)); //5
console.log(excute(listCoffee,addElement,'Tea'));
console.log(excute(listCoffee,searchName,'Espresso'));  
console.log(excute(listCoffee,countElement)); //6

//2.Closure + Rest parameters
//Outer Function
function createProduct(){
    let products = [];
    //Inner Function
    function addNewProduct(ids,name,price,...description){ //'...description' คือ rest parameter
        let newProduct = {};
        newProduct.id = ids;
        newProduct.name = name;
        newProduct.price = Number(price);
        newProduct.detail = description;
        
        //เช็คว่าสินค้าที่เพิ่มมี id ที่ซ้ำกันหรือไม่ ถ้าซ้ำจะเพิ่มสินค้านี้
        let findProduct = products.find(({id})=>id === ids); 
        if(findProduct===undefined){
            products.push(newProduct);
        }

        return products; 
    }
    return addNewProduct;   //Closure
}

let iPhone = createProduct();
iPhone(110,'iphone 11',24900,'RAM 4GB', 'ROM 64GB', '4G', 'Pink');
iPhone(110,'iphone 11',24900,'RAM 4GB', 'ROM 64GB', '4G', 'Red'); //สินค้านี้ไม่ถูกเพิ่ม เพราะเลข id ซ้ำ
iPhone(120,'iphone 12',29900,'RAM 4GB','ROM 64GB','4G','Grey');
iPhone(122,'iphone 12 Pro',36100,'RAM 6GB','ROM 128GB','4G','Black');
console.log(iPhone(132,'iphone 13 Pro',38900,'RAM 6GB','ROM 128GB','5G','Blue')); //สุดท้ายมีสินค้า 4 ชนิด

/* สินค้าทั้งหมดของ iPhone
[   {id: 110, name: 'iPhone 11', price: 24900, detail: [ 'RAM 4GB', 'ROM 64GB', '4G', 'Pink' ]},
    {id: 120, name: 'iPhone 12', price: 29900, detail: [ 'RAM 4GB', 'ROM 64GB', '4G', 'Grey' ]},
    {id: 122, name: 'iPhone 12 Pro', price: 36100, detail: [ 'RAM 6GB', 'ROM 128GB', '4G', 'Black' ]},
    {id: 132, name: 'iphone 13 Pro', price: 38900, detail: [ 'RAM 6GB', 'ROM 128GB', '5G', 'Blue' ]}
  ]*/

//3.Default parameter >> กำหนดค่าใน param 
//function คำนวณราคารวมของสินค้า
function findTotal(price=0,quatity=1){
    return price*quatity;
}
console.log(findTotal(150,4));
console.log(findTotal(200));
console.log(findTotal());


//4.Arguments in function >> เรียก param ที่ไม่ได้เปิดรับ แต่มีโยนเข้ามา
