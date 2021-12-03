import {product} from './product.js'

window.onload = startup;

const divProductsEle = document.querySelector('#products');
// const answers = document.querySelectorAll("#fname")
// const divSearch = document.querySelector('#search');


function startup () {

for (let i = 0; i < product.length; i++) {
  
    const divProduct = document.createElement('div');
    divProduct.setAttribute('id',product[i].id);
    divProduct.setAttribute('class','card');
    divProduct.setAttribute('style','display : ');
    
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product[i].id+".jpg");
    productImg.setAttribute('width', "200");

    const productName = document.createElement('h1');
    productName.textContent = product[i].name ;

    const productPrice = document.createElement('p');
    productPrice.setAttribute('class', "price");

    productPrice.textContent = "$ " + product[i].price ;

    const productColor = document.createElement('p');
    productColor.textContent = "The color of this phone is " + product[i].color;

    const productStock = document.createElement('p');
    productStock.setAttribute('class', "stock");
    productStock.textContent = "Stock :"+ product[i].stock ;

    const buttonProduct = document.createElement('button');
    buttonProduct.setAttribute('data-id',product[i].id)
    buttonProduct.setAttribute('data-name',product[i].name);
    buttonProduct.setAttribute('data-price',product[i].price);
    buttonProduct.setAttribute('class','add-to-cart');

    buttonProduct.textContent = "Add to Cart" ;

    divProduct.appendChild(productImg);
    divProduct.appendChild(productName);
    divProduct.appendChild(productPrice);
    divProduct.appendChild(productColor);
    divProduct.appendChild(productStock);
    divProduct.appendChild(buttonProduct);

    divProductsEle.appendChild(divProduct);
    
    }
    setEventBtnAddToCart();
    checkNumCart();
}

//icon search
let icon = document.querySelector('#icon'); 
let input = document.querySelector('#searchBar');
let btnSearch = document.querySelector('#btnSearch');
icon.addEventListener('click', function () {
    if(input.getAttribute('type') == "hidden" && btnSearch.getAttribute('type') == "hidden"){
        input.setAttribute('type',"text");
        btnSearch.setAttribute('type',"button");
    }else{
        input.setAttribute('type',"hidden");
        btnSearch.setAttribute('type',"hidden");
    }
});

//Searching ProductName
input.addEventListener('keyup', function(event){
    let text = input.value.toLowerCase();
    if(event.keyCode===13){     //เมื่อกด Enter 
        event.preventDefault();
        searching(text);
        input.value = "";
    }
})
btnSearch.addEventListener('click', function(event){ //เมื่อกด button Search
    let text = input.value.toLowerCase();
    event.preventDefault();
    searching(text);
    input.value = "";
})

function searching(text1){
    for (let i = 0; i < product.length; i++) {
        const divProductFind = document.querySelector(`#${product[i].id}`);
        divProductFind.setAttribute('style','display:""');
        const childP = divProductFind.children              //ดูชื่อ child ทั้งหมด
        const pName = childP[1].textContent.toLowerCase();  //ดึงข้อความจาก <h1> ที่เเป็นชื่อสินค้า
        if(pName[pName.search(text1)]){
            divProductFind.setAttribute('style','display:');
        }else{
            divProductFind.setAttribute('style','display:none');
        }
    }
}

//Add Product in cart
let cart = [];
function checkNumCart(){
        const showCount = document.querySelector('#numCart');
        let totalAmount = 0;
        for(let product of cart){
            totalAmount = cart.length*product.amount;
        }
        showCount.textContent = "Your Cart : " + totalAmount;
        console.log(cart);
}
//Add แบบที่1 เพิ่มสินค้าซ้ำ นับเป็นอันใหม่
function setEventBtnAddToCart(){
    let AddtoCart = document.getElementsByClassName("add-to-cart")
for (let i = 0; i < AddtoCart.length; i++) {
    let btnAdd = AddtoCart[i]
    btnAdd.addEventListener('click',function(){
        if(product[i].stock != 0){
            alert(`${btnAdd.getAttribute('data-id')} add your cart`)
            let productSelected = {};
            productSelected.id = btnAdd.getAttribute('data-id')
            productSelected.name = btnAdd.getAttribute('data-name')
            productSelected.price = Number(btnAdd.getAttribute('data-price'))
            productSelected.amount = 1;
            cart.push(productSelected);
            
            removeProductInStock(i);
            checkNumCart();
        }else{
            alert(`Sorry, this product sold out`);
        }
    })
}   }

function removeProductInStock(i){
    let productStock = document.getElementsByClassName('stock');
    product[i].stock = product[i].stock-1;
    productStock[i].textContent = `Stock : ${product[i].stock}`;
}
/*
//Add แบบที่2 เพิ่มสินค้าซ้ำ นับเป็น amount
function setEventBtnAddToCart2(){
    let AddtoCart = document.getElementsByClassName("add-to-cart")
for (let i = 0; i < AddtoCart.length; i++) {
    let btnAdd = AddtoCart[i]
    btnAdd.addEventListener('click',function(){
        alert(`${btnAdd.getAttribute('data-id')} add your cart`)
        let productSelected = {};
        productSelected.id = btnAdd.getAttribute('data-id')
        productSelected.name = btnAdd.getAttribute('data-name')
        productSelected.price = Number(btnAdd.getAttribute('data-price'))
        cart.push(productSelected);
        // for(let j = 0; j < cart.length; j++){
        //     if(productCheck.id==productSelected.id){
        //         productSelected.amount = productSelected.amount+1;
        //     }else{
        //         productSelected.amount = 1;
        //         cart.push(productSelected);
        //     }
            
        // }
        checkNumCart();
    })
}   }
*/
     
    // btnAdd.addEventListener('click',function (event){  //<--Error
    //     event.preventDefault();
    //     var nameP = $(this).data('name');
    //     var priceP = Number($(this).data('price'));
    //     let productSelect = {
    //         name: nameP,
    //         price: priceP
    //     }
    //     cart.push(productSelect);
    //     checkNumCart();
    // });




//----
// const divSearch = document.querySelector('#search');

// let inputName = document.createElement("input");
// inputName.setAttribute("type", "text");
// inputName.setAttribute("id", "phoneName");
// inputName.setAttribute("onchange", "phoneSearch");

// divSearch.appendChild(inputName);


 //     let  addButton = document.createElement("input");
 //   addButton.setAttribute("type", "button");
 //   addButton.setAttribute("value", "clear");
 //   addButton.setAttribute("onclick", "ClearPage ()");
  //  document.body.appendChild(addButton);

//function ClearPage () {


 //   const testt = document.createElement('h1');
 //   testt.textContent = "555555555" ; 
 //   divSearch.appendChild(testt);
    
//}
    
  
// answers.forEach((answers) => {
//     answers.addEventListener('change',phoneSearch2);
// })


// function phoneSearch2 () {
//             let CheckAnswer = false;
//             let CheckIndex = 0;
//         answers.forEach((answers)=>{
//             for (let i = 0; i < product.length; i++) {
//                 if (answers.value == product[i].name) {
//                     CheckAnswer = true; 
//                     CheckIndex = i;
//                 }
//             }
            
//         })

//         if (CheckAnswer) {
//             const divProductSearch = document.querySelector('#productSearch');
           
//             let divProduct = document.createElement('div');
//             divProduct.setAttribute('id', "delete");
//             divProduct.setAttribute('class', "card");

//     const productImg = document.createElement('img');
//     productImg.setAttribute('src', product[CheckIndex].id+".jpg");
//     productImg.setAttribute('width', "200");

//     const productName = document.createElement('h1');
//     productName.textContent = product[CheckIndex].name ;

//     const productPrice = document.createElement('p');
//     productPrice.setAttribute('class', "price");

//     productPrice.textContent = "$ " + product[CheckIndex].price ;

//     const productColor = document.createElement('p');
//     productColor.textContent = "The color of this phone is " + product[CheckIndex].color;

//     const productStock = document.createElement('p');
//     productStock.textContent = "Still have "+ product[CheckIndex].stock + " units for sale.";

//     const buttonProduct = document.createElement('button');
//     buttonProduct.textContent = "Add to Cart" ;



//     divProduct.appendChild(productImg);
//     divProduct.appendChild(productName);
//     divProduct.appendChild(productPrice);
//     divProduct.appendChild(productColor);
//     divProduct.appendChild(productStock);
//     divProduct.appendChild(buttonProduct);


//     divProductSearch.appendChild(divProduct);

//     divProductsEleShow.remove();

//         }


//         if (CheckAnswer == false) {
//             const test = document.querySelector('#delete');
//             test.remove();
//             startup();
            
//         }



// }







