import { products } from "./product.js";
import { cart } from "./cart.js";
import { input,numOfItems,showProduct } from "./main.js";

export function checkCart(){
    let cartId = localStorage.getItem('cartId');
    let cartQTY = localStorage.getItem('cartQTY');
    let myCart = localStorage.getItem('myCart');
    if(cartId==null&&cartQTY==null&&myCart==null){
        return cart;
    }else{
        cart.productId = cartId.split(",");
        cart.product = JSON.parse(myCart);
        cart.totalQTY = cartQTY;
        return cart;
    }
}

export function viewCart(){
    checkCart();
    let text = '';
    cart.totalQTY != 0 ? text = '' : text = '--No Product--';
    cart.product.forEach((p) => {
        text = text + '\n' + `${p.name}, qty: ${p.qty}`;
    });
    alert('Your products in cart now'+'\n'+text);
};

export function inputSearch(event){
    if (event.keyCode === 13) {
        let searchTarget = event.target.value.toLowerCase();
        let search = products.filter(search => {
            return search.name.toLowerCase().trim().includes(searchTarget);
        });
        showProduct(search);
    }
    if (event.target.value === "") {
        showProduct(products);
    }
}

export function buttonSearch(){
    let text = input.value.toLowerCase(); 
    let search = products.filter(search => {
            return search.name.toLowerCase().trim().includes(text); 
        });
        showProduct(search);
    if (input.value === "") {
        showProduct(products);
    }
}
//ลองเปลี่ยนเป็น searching แบบซ่อน (ใช้เป็น style="display:none") 

export function clearCart(){
    // คืนของใน stock ไม่ได้
    // for(let i= 0; i< products.length; i++){
    //     cart.productId.forEach(p => {
    //         if (p == products[i].id) {
    //             products[i].stock = products[i].stock + cart.product.qty;
    //             productStock.textContent = `Stock: ${products[i].stock}`;
    //         }
    //     });
    // }
    cart.productId = [];
    cart.product = [];
    cart.totalQTY = 0;
    console.log(cart);
    numOfItems.textContent = ` Items in cart: ${cart.totalQTY} `;
    localStorage.clear();
}

