const G8 = document.querySelector("#Section2 .group8 ");
G8.textContent="GROUP8 Hello"; //textContent = ใช้เป็นเฉพาะข้อความเท่านั้น
G8.innerHTML="<b>World</b>"; //inner html = ข้อความมีที่ภาษา html โยนไปใช้ด้วย

let attr = document.createAttribute("style");
attr.value = "color:red";
G8.setAttributeNode(attr);


const sec2 = document.querySelector("#Section2");
console.log(sec2.parentElement);
console.log(sec2.nextSibling);
let currentChildNode=sec2.firstElementChild;

while(currentChildNode!==sec2.lastChild){
    if(currentChildNode.nodeType===1){
        console.log(currentChildNode);
    }
    currentChildNode=currentChildNode.nextSibling //?
}