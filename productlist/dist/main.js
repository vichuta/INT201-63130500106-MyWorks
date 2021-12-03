import { products } from "./product.js";
import { cart } from "./cart.js";
import { checkCart, inputSearch, buttonSearch, clearCart, viewCart} from "./script.js";

//### Check Cart Item ###
checkCart();

//------------------------------------------------------------------//
//### Create Item Cart Bar ###
const cartbar = document.querySelector('#cart');

const cartImg = document.createElement('img');
cartImg.setAttribute('id','icon-bag');
cartImg.setAttribute('src','../img/bag.png');
cartImg.setAttribute('width','25px');
cartImg.setAttribute('height','25px');
cartImg.className = 'inline';

const numOfItems = document.createElement('p');  
if(localStorage.getItem('cartQTY') == null){
    numOfItems.textContent = `  Items in cart: ${cart.totalQTY}   `; 
}else{
    numOfItems.textContent = `  Items in cart: ${localStorage.getItem('cartQTY')}   `;
}
numOfItems.className = 'inline';

const binImg = document.createElement('img');
binImg.setAttribute('id','icon-bin');
binImg.setAttribute('src','../img/bin.png');
binImg.setAttribute('width','25px');
binImg.setAttribute('height','25px');
binImg.className = 'inline my-2 mr-2';
//<img src="../img/bin.png" width="20px" height="20px" id="icon-bin"></img>


//***Add Child */
cartbar.appendChild(cartImg);   
cartbar.appendChild(numOfItems);
cartbar.appendChild(binImg);   

//------------------------------------------------------------------//
//### Cookie ###
const cookiesButton = document.createElement('button');
cookiesButton.className = 'shadow-lg my-2 ml-4 mr-8 py-2 px-4 bg-white-500 rounded-full font-medium hover:bg-black hover:text-white active:border-blue-700'
cookiesButton.innerHTML = 'Cookies'
cookiesButton.setAttribute('id', 'cookieTest');
cartbar.appendChild(cookiesButton);
class CookieUtil {
    static get(name) {
      let cookieName = `${encodeURIComponent(name)}=`,
        cookieStart = document.cookie.indexOf(cookieName),
        cookieValue = null;
      if (cookieStart > -1) {
        let cookieEnd = document.cookie.indexOf(';', cookieStart);
        if (cookieEnd == -1) {
          cookieEnd = document.cookie.length;
        }
        cookieValue = decodeURIComponent(
          document.cookie.substring(cookieStart + cookieName.length, cookieEnd)
        );
      }
      return cookieValue;
    }
  
    static set(name, value, expires) {
      let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
      if (expires instanceof Date) {
        cookieText += `; expires=${expires.toUTCString()}`;
      }
      document.cookie = cookieText;
    }
    static unset(name) {
      CookieUtil.set(name, '', new Date(0));
    }
  }

  //### Add Event Cookie ###
  cookiesButton.addEventListener('click',function(){
      CookieUtil.set('cartId', cart.productId);
      CookieUtil.set('cartQTY', cart.totalQTY);
      alert(`Cookie cart Id : ${CookieUtil.get('cartId')}`); 
      alert(`Cookie cart QTY: ${CookieUtil.get('cartQTY')}`); 
});


//------------------------------------------------------------------//
//### Create search bar ###
const menubar = document.querySelector('#menubar');
const divSearchInput = document.querySelector('#search-button');
// const divSearch = document.querySelector('#icon');

const searchImg = document.createElement('img');
searchImg.setAttribute('id','icon-search');
searchImg.setAttribute('src',"../img/search.png");
searchImg.setAttribute('width','25px');
searchImg.setAttribute('height','25px');
searchImg.setAttribute('style','position: absolute; width: 40px; bottom: 15px; left: 190px');


const input = document.createElement('input');
input.className = 'border-1 rounded-full my-2 border-black-400 border-solid mx-4 px-3 py-2 focus:border-green-400 items-center focus:outline-none';
input.setAttribute('placeholder', 'Search');
input.setAttribute('id', 'searchInput');
input.setAttribute('type', 'hidden');

const searchButton = document.createElement('button');
searchButton.className = 'shadow-lg my-2 py-2 px-4 bg-white-500 rounded-full font-medium hover:bg-black hover:text-white active:border-blue-700'
searchButton.innerHTML = 'Search'
searchButton.setAttribute('id', 'search-button');
searchButton.setAttribute('style', 'display: none;');

//***Add Child */
const iconSearch = document.querySelector('#iconSearch'); //Search icon on nav
iconSearch.appendChild(searchImg);
divSearchInput.appendChild(input);
cartbar.className ='mr-80';


//### Add Event Icon Cart ###
cartImg.addEventListener('click', viewCart);

//### Add Event Icon Bin ###
const IconBin = document.querySelector('#icon-bin');
IconBin.addEventListener('click', clearCart);

//### Add Event Icon Search ###
let icon = document.querySelector('#icon-search');
let btnSearch = document.querySelector('#search-button');
icon.addEventListener('click', function() {
    if (input.getAttribute('type') == "hidden" || btnSearch.getAttribute('style')=="display: none;") {
        input.setAttribute('type', "text");
        btnSearch.removeAttribute('style');
        
    } else {
        input.setAttribute('type', "hidden");
        btnSearch.setAttribute('style', 'display: none;');
    }
});

//### Add Event Searching ###
input.addEventListener('keyup',inputSearch);
//*ปรับแก้ปุ่ม search ให้แล้ว
searchButton.addEventListener('click',buttonSearch);

//-------------------------------------------------------------------//
//### Show all product ###
export function showProduct(p) {
    document.getElementById('products').innerHTML = "";
    p.forEach(product => {
        const divProductEle = document.querySelector('#products');
        const productDiv = document.createElement('div');
        productDiv.id = product.id;
        productDiv.className = 'shadow-lg rounded-lg py-10 px-10 inline-block w-auto';
        productDiv.style.backgroundColor = 'white';
        const picDiv = document.createElement('div')
        picDiv.className = 'mb-10';

        const productImg = document.createElement('img')
        productImg.src = product.url;

        const productName = document.createElement('h3');
        productName.textContent = product.name;

        const productPrice = document.createElement('p');
        productPrice.textContent = product.price + " Bath";
        productPrice.className = 'font-black';

        const productStock = document.createElement('p')
        productStock.textContent = `Stock: ${product.stock}`;
        productStock.className = 'text-green-300';
        productStock.setAttribute('class', 'stock');

        const butDiv = document.createElement('div')
        butDiv.className = 'text-center';

        let button = document.createElement('button');
        button.innerHTML = "Buy"
        button.setAttribute('class', 'shadow-lg py-2 px-5 bg-green-500 hover:bg-green-700 rounded-full font-medium text-white justify-items-center')

        //### Add event button ###
        button.addEventListener('click', () => {
            if (product.stock != 0) {
                if (!cart.productId.includes(product.id)) {
                    cart.productId.push(product.id);
                    cart.product.push({ name: product.name, qty: 0 });
                }
                cart.product.forEach((p) => {
                    p.name == product.name ? p.qty++ : p.qty;
                });
                cart.totalQTY++;
                alert(`${product.name} add to cart!!`)
                numOfItems.textContent = ` Items in cart: ${cart.totalQTY} `;

                products.forEach(p => {
                    if (p.name == product.name) {
                        p.stock--;
                        productStock.textContent = `Stock: ${p.stock}`
                    }
                });
                
                //### localStorage ###
                localStorage.setItem('cartId', cart.productId);
                localStorage.setItem('cartQTY', cart.totalQTY);
                localStorage.setItem('myCart', JSON.stringify(cart.product));

                //----------------------------------------------------------//
                console.log(cart);

            } else {
                alert(`Sorry, this product sold out`);
            }
        });

        //-------------------------------------------------------------------//
//***Add Child */
        picDiv.appendChild(productImg)
        productDiv.appendChild(picDiv);
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productStock)
        butDiv.appendChild(button);
        productDiv.appendChild(butDiv);
        divProductEle.appendChild(productDiv);
    });
}
showProduct(products);


//-------------------------------------------------------------------//


export {input,numOfItems}
