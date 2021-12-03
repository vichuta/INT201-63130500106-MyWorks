function product (id,name,color,price,stock) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.price = price;
    this.stock = stock;
}
let products = []

let product1 = new product("I001","Iphone 13 Pro","Blue",1290,10);
let product2 = new product("I002","Iphone 13 mini","Red",1200,7);
let product3 = new product("I003","Iphone 12","Purple",730,11);
let product4 = new product("I004","Iphone 11","While",1500,5);
let product5 = new product("I005","Iphone 12 Pro","Black",1400,12);
let product6 = new product("I006","Iphone 13","Pink",1500,20);

products.push(product1,product2,product3,product4,product5,product6);

export {products as product};