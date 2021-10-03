//เพิ่ม element 
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Lemon"; 
fruits[fruits.length] = "Kiwi";
console.log(fruits);
console.log(fruits.length);

//delete    เลือกต่ำแหน่งลบได้ (จำนวนยังเท่าเดิม แต่ค่าที่ลบหาย)
let fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0]; 
console.log(fruits);
console.log(fruits.length); 

//join      การรวมองค์ประกอบอาร์เรย์เป็นสตริง
let fruits = ["Banana", "Apple", "Mango", "Orange"]
console.log(fruits.join(', '));

//pop       การเอา element สุดท้ายออก
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
let x = fruits.pop();   // Removes "Mango" from fruits
console.log(fruits);
console.log(x);

//push      การเพื่ม element ไว้ที่หลังสุด
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");    // Adds "Kiwi" to fruits
console.log(fruits);
console.log(fruits.length);

//shirft    เอา element ตัวแรกออก
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();         // Removes "Banana" from fruits

//unshift   เพิ่ม element ไว้ต่ำแหน่งแรกสุด
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon"); 
console.log(fruits);

//splice    สามารถใช้ในการเพิ่มรายการใหม่ไปยังอาร์เรย์
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi"); //พารามิเตอร์แรก (2) กำหนดตำแหน่งที่ควรเพิ่มองค์ประกอบใหม่ (ประกบกัน)
console.log(fruits);                  //พารามิเตอร์ที่สอง (0) กำหนดวิธีการหลายองค์ประกอบที่ควรจะ เอาออก
fruits.splice(2, 2, "Grape", "Melon");
console.log(fruits);
//ใช้ splice() เพื่อลบองค์ประกอบ
fruits.splice(0, 2);   // เอา element 2 ตัวแรก นับจากต่ำแหน่งที่ 0 
console.log(fruits);

//slice     การแบ่งส่วนของอาร์เรย์ออกเป็นอาร์เรย์ใหม่
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);
console.log(fruits);
console.log(citrus);

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(3);
console.log(fruits);
console.log(citrus);
//เมธอด slice() สามารถรับอาร์กิวเมนต์ได้สองอาร์กิวเมนต์ เช่น slice(1, 3) จากนั้นเมธอดจะเลือกองค์ประกอบจากอาร์กิวเมนต์เริ่มต้นและสูงสุด (แต่ไม่รวม) อาร์กิวเมนต์สิ้นสุด [,)
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1,3);
console.log(fruits);
console.log(citrus);

//concat    การสร้างอาร์เรย์ใหม่โดยการรวม (ต่อ) อาร์เรย์ที่มีอยู่
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);  
console.log(myChildren);
//3 arrays
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
console.log(myChildren);
//concat() เมธอดยังสามารถรวมค่าสตริงเข้ากับอาร์เรย์
const arr1 = ["Emil", "Tobias", "Linus"];
const myChildren = arr1.concat("Peter"); 
console.log(myChildren);