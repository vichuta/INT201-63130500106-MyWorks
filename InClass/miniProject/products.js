const divProducts = document.querySelector("#products");
divProducts.innerHTML = "<b>Hello World</b>"; //เพิ่มจาก js เฉยๆ ยังไม่อยู่บนไฟล์ html
console.log(divProducts);

let products= [   
    {id: 110, name: 'iPhone 11', price: 24900},
    {id: 120, name: 'iPhone 12', price: 29900},
    {id: 122, name: 'iPhone 12 Pro', price: 36100},
    {id: 132, name: 'iphone 13 Pro', price: 38900}
]

//สร้าง Element บน HTML
//1. create <div> element
const divProductsEle = document.createElement('div');
//2. <div id="110">
divProductsEle.setAttribute('id',products[0].id)
//3. create <p> for product id --> <p>110</p>
const pProductsIdEle = document.createElement('p');
pProductsIdEle.textContent = products[0].id;
divProductsEle.appendChild(pProductsIdEle);   //เพิ่ม <p> ใน <div> ==> <div id="110"> <p>110</p> </div>

//4. create <p> for product name --> <p>iPhone 11</p>
const pProductsNameEle = document.createElement('p');
pProductsNameEle.textContent = products[0].name;
divProductsEle.appendChild(pProductsNameEle); //==> <div id="110"> <p>110</p> <p>iPhone 11</p> </div>

//5. create <p> for product price --> <p>24900</p>
const pProductsPriceEle = document.createElement('p');
pProductsPriceEle.textContent = products[0].price;
divProductsEle.appendChild(pProductsPriceEle); //==> <div id="110"> <p>110</p> <p>iPhone 11</p> <p>24900</p> </div>

//6. ทำ <div id ="products"> <div id="110">...</div></div>
divProducts.appendChild(divProductsEle);