for (let i = 0; i < product.length; i++) {
    const productImg = document.createElement('img').src = "I6001";
    
    const divProduct = document.createElement('div');
    divProduct.setAttribute('class', card);
    
    const productId = document.createElement('p');
    productId.textContent = product[i].id;
    
    const productName = document.createElement('h1');
    productName.textContent = product[i].name;
    
    const productPrice = document.createElement('p');
    productPrice.setAttribute('class', price);
    productPrice.textContent = product[i].price + "Bath";
    
    const productColor = document.createElement('p');
    productColor.textContent = product[i].color;
    
    const productStock = document.createElement('p');
    productStock.textContent = product[i].stock;

    const buttonProduct = document.createElement('button');
    buttonProduct.textContent = "Add to Cart" ;
    
    //<div><p></div>
    divProduct.appendChild(productId);
    divProduct.appendChild(productId);
    divProduct.appendChild(productName);
    divProduct.appendChild(productPrice);
    divProduct.appendChild(productColor);
    divProduct.appendChild(productStock);
    divProductsEle.appendChild(divProduct);
}