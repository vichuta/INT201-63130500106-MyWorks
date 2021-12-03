const quest1 = {id: 1,question: 'What?'};
let quest2 = {id: 2,question: 'Where are you?'};
//const แก้ propertyใน object ได้
quest1.id=2;
//แต่ update ค่าตัวแปรใหม่ไม่ได้
quest1 = 2;
quest1 = {id:3, question: 'what the fair?'};
quest1 = quest2; 
//let update ค่าได้ 
quest2 = quest1; //(เอา address ให้) = แก้ quest1 ฟรือ qeust2 จะ update ตามกันหมด

//------------------------
//#1 independent variables, all are array
let ids = [1,2];
let quests = ['What is your name?','Where are you?'];
let answers = ['Umaporn','at home'];
    //สร้างตัวแปรหลายๆตัวเก็บเป็น array //มีการเก็บข้อมูลที่แยกออกจากกัน
    //(Array มักจะใช้เป็น collection ไว้เก็บของหลายๆชิ้นเท่านั้น)
    //ไม่เหมาะกับโครงสร้างข้อมูลที่มีความเชื่อมโยงกัน

//#2 array of objects, easy iterate all items under a single variable 
let quest3 = [
    {id: 1, question: 'What is your name?', answer: 'Umaporn'},
    {id: 2, querstion: 'What are you?', answer: 'at name'}
];
    //สร้างตัวแปรเก็บเป็น array ของ object, 
    //แบบนี้ง่ายต่อการหา object ใน array

//#3 one object, each property stores with array
let quest4 = {
    ids: [1,2],
    quests: ['what is your name?','where are you?'],
    answers: ['Umaporn', 'at home']
};
    //สร้างตัวแปรเก็บเป็น object แต่มีการเก็บ property แต่ละตัวเป็น object

//------------------------
//object literal
const quest5 = {
    id: 5,
    question: 'What is your name?',
}
const quest6 = {
    id: 5,
    question: 'What is your name?',
    getQuestLenght(){ //function ระดับ object = มีแค่ object นั้นที่เรียกใช้ได้
        return this.question.length; 
    }
}
//implicit class 
let quest = {}; // => let quest = new Object();
console.log(typeof quest); //object

//การสร้าง class
class Question{
    constructor(id, question){
        //this.id ***ไม่ควรใช้ เพราะมันคือการเรียกใช้ getter
        this._id=id;
        this._question=question;
    }
    get id(){
        return this.id;
    }
    set id(id){
        this._id = id;
    }
    get question(){
        return this._question;
    }
    displayQuestion() {
        return `id: ${this._id}, question: ${this.question} }`;
    }
    
}

let quest7 = new Question(1,'Q1');
let quest8 = new Question(2,'Q2');

//ใช้ prototype เพิ่ม function 
Question.prototype.getQuestLenght=function(){
    return this.question.length;
}
