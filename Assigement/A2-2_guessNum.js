/*ให้เขียน Function เพื่อทำการสุ่มเลข 1-10 และคืนผลลัพธ์เป็นเลขที่สุ่มได้ จากนั้นให้ผู้เล่นเดาเลข 
โดยถ้าเดาเลขเกินช่วงให้หยุดเกม
 •ถ้าผู้เล่นเดาค่าที่สูงกว่าเลขที่สุ่มได้ ให้แสดงข้อควํามว่ํา “Too high”
 •ถ้าผู้เล่นเดาค่าทีต่ำกว่าเลขที่สุ่มได้ ให้แสดงข้อควํามว่ํา “Too Low”
 •ถ้าผู้เล่นเดาตรงกับค่าที่สุ่มได้ ให้แสดงข้อควํามว่ํา “You WIN!” กรณีเดําไม่ถูกต้อง ให้ทำการเฉลยเลขที่สุ่มได้ */

function random(){
    return Math.floor(Math.random()*10)+1 
}
const randomNum = random();

function guess(num){
    if(num >= 1 && num <= 10){
        if(num==randomNum){
            return 'You WIN!';
        }else if(num<randomNum){
            return 'Too Low';
        }else if(num>randomNum){
            return 'Too High';
        }
    }
        
}
const solution = ()=> randomNum;

console.log(guess(10));
console.log(guess(5));
console.log(guess(1));
console.log(solution());