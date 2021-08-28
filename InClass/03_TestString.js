let text = "Hello";
let vowel=['A','E','I','O','U','a','e','i','o','u'];
TestString(0,text);
TestString(1,text);
TestString(2,text);
TestString(3,text);

function TestString(n, str) {
    switch(n){
        case 0: console.log(str); //print text
        break;
        case 1: console.log(reverseString(str));
        break;
        case 2: console.log(replaceString(str));
        break;
        case 3: console.log(countVowel(str));
        break;
    }
}
//Reverse String
function reverseString(str){
    return str.split("").reverse().join("");
    //split("") = ตัดแบ่งด้วย "" แล้วเป็น array
    //reverse() = จะเรียง array แบบ reverse ให้ใหม่
    //join("") = รวม array ให้เป็น String โดยใช้ "" คั่นระหว่าง object ใน array 
}

//Replace Vowel with '*'
function replaceString(str) {
    for(let i=0; i<str.length; i++){ 
        for(let j=0; j<vowel.length; j++){ 
            str = str.replace(vowel[j],'*');
            //replcae('a','b') = เปลี่ยน string ที่เป็น a ให้เป็น b ทั้งหมด
        }
    }
    return str;
}

//Count vowels in String
function countVowel(str) {
    let count = 0;
    for(let i=0; i<str.length; i++){
        for(let j=0; j<vowel.length; j++){
            if(str.charAt(i) == vowel[j]){
            count++;
            }
        }
    }
    return count;
    
}


