import { product } from "./items.js";

//1.2.1 Add event from input 
const inputText = document.getElementById('item');
const inputUnit = document.getElementById('qty');
const buttonSubmit = document.getElementById('btn-submit');

buttonSubmit.addEventListener('click',()=>{
    let productName = inputText.value;
    let productUnit = inputUnit.value;
    if(productName.length !== 0){
        product.add(productName,productUnit);
        product.save();
        location.reload();
        inputText.value="";
    }
});

//1.2.1 show Count
const countPendingItems = document.getElementById('countPendingItems');
countPendingItems.textContent = `${product.checkCountPending()}`
const countDoneItems = document.getElementById('countDoneItems');
countDoneItems.textContent = `${product.checkCountDone()}`


//1.2.1 add show product-list
const orderList = document.getElementById('buying-list');

let productList = product.list();
productList.forEach((item)=>{
    showProduct(item);
})
function showProduct(item){
    let{itemName,itemUnit,itemStatus} = item;
    const listItem = document.createElement('li');
    
    const imgStatus = document.createElement('img');
    if(itemStatus == 'Pending'){
        imgStatus.src = "./images/pending.svg";
    }else if(itemStatus == 'Done'){
        imgStatus.src = "./images/done.svg";
        listItem.style = "text-decoration: line-through; color:grey;";
    }
    //1.2.3 Add evnet icon
    imgStatus.addEventListener('click',()=>{
        product.buy(itemName);
        product.save();
        location.reload();
    });

    listItem.textContent = `${itemName}, ${itemUnit} unit,`
    listItem.appendChild(imgStatus);
    orderList.appendChild(listItem);
}

//1.2.2 add Clear
const buttonClear = document.getElementById('btn-clear');
buttonClear.addEventListener('click',()=>{
    product.removeAll();
    location.reload();
})



























