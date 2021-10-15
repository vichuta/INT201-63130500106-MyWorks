
///global scope & local scope ///pure & non-pure function
let VAT = 0.07; //global variable (let)
//priceWithVat - global function/Outer function
function priceWithVat(price) {
    //price is a local scope  (ได้จาก parameter)
    let header = 'SIT, KMUTT'; //header is a local scope (ได้จากปารประกาศตัวแปร)
    //local scope = จะถูกสร้างเฉพาะตอนเรียกใช้ function พอจบการทำงานของ funciton แล้ว ตัวแปรจะหายไป
    //และไม่สามารถเรียกใช้ตัวแปรนี้นอก function นี้ได้

    //staff is a nested(inner) function
    function staff(name) {
            let staffName = name;
            return header + price + staffName + VAT;
        }
    return price * VAT + price; 
}

//non-pure function = มีการอ้างตัวแปร นอก function 
function priceWithVat(price){
  return price * VAT+price;
}
//pure function
function getPrice(price){
  return price;
}

console.log(priceWithVat(100)); //107
VAT = 0.1;  // non-pure มีข้อเสียคือ จะถูกรบกวนง่าย ถ้ามีการเปลี่ยนค่าตัวแปรที่อ้างข้างนอก
console.log(priceWithVat(100)); //110


let greeting = 'Welcome everyone in family';

function outer(name) {
  //higher order function
  let family = [];
  family.unshift(name);

  //inner is a closure function
  function inner(newMember) {
    console.log(greeting);
    family.unshift(newMember);      //เรียกใช้ family ตัวเดิม
    return family;
  }
  return inner; //return inner function
}
const myInner = outer('Umaporn');
console.log(myInner('John'));       //เพิ่มสมาชิกเข้าไปต่อสะสม ไม่ได้สร้าง array ใหม่
console.log(myInner('SuSan'));



function outerPrice(price){ //Outer Fn
  let VAT = 0.07;
  
  function innerPrice(){    //Inner Fn
    return price*VAT +price
  }

  return innerPrice;  //---> Closure ช่วย fix ค่า VAT ใน Outer fn
}
const myResult = outerPrice(100);
console.log(myResult(100)); //107
VAT = 0.1;  
console.log(myResult(100)); //107 (ถึง VAT จะเปลี่ยนแล้ว แต่ Closure ยัใช้ค่าเดิม)
console.log(VAT);
