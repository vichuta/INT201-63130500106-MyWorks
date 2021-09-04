let AllQuestion = {
    //คำถามและตัวเลือก
    Question1 : 'What is one?',
    Answer1 : {
        choice1 : 1, choice2 : 2, choice3 : 3, choice4 : 4, choice5 : 5
    },
    Question2 : 'What is two?',
    Answer2 : {
        choice1 : 1, choice2 : 2, choice3 : 3, choice4 : 4, choice5 : 5
    },
    Question3 : 'What is three?',
    Answer3 : {
        choice1 : 1, choice2 : 2, choice3 : 3, choice4 : 4, choice5 : 5
    },
    Question4 : 'What is four?',
    Answer4 : {
        choice1 : 1, choice2 : 2, choice3 : 3, choice4 : 4, choice5 : 5
    },
    Question5 : 'What is five?',
    Answer5 : {
        choice1 : 1, choice2 : 2, choice3 : 3, choice4 : 4, choice5 : 5
    }
};
console.log(AllQuestion);


function Player(name){
    this.name = name;
    this.score = 0;
    this.quest = [1,2,3,4,5]; 
    this.myAns = [0,0,0,0,0]; // 0 = แปลว่ายังไม่ได้ตอบ
    this.playing =  function(Q,A){ //ต้องใส่เลขข้อให้ถูก แต่คำตอบใส่เป็นอะไรก็ได้
        let index = Q-1;
        switch(Q){
            case 1 : 
                if(this.myAns[index] == 0 || this.myAns[index] != AllQuestion.Answer1.choice1){ //ถ้าใน myAns ยังไม่ได้ตอบ หรือ ยังตอบไม่ถูก
                    if(A==AllQuestion.Answer1.choice1){ //ถ้าคำตอบตรงกับเฉลย
                        addScore(this,index,A);         //เพิ่มคะแนน
                    }else{                              //แต่ถ้าไม่ตรง 
                        addAns(this,index,A);           //ให้เพิ่มคำตอบลง myAns
                    }
                }    
            break;
            case 2 : 
                if(this.myAns[index] == 0 || this.myAns[index] != AllQuestion.Answer2.choice2){
                    if(A==AllQuestion.Answer2.choice2){
                        addScore(this,index,A);
                    }else{
                        addAns(this,index,A);
                    }
                } 
            break;
            case 3 : 
                if(this.myAns[index] == 0 || this.myAns[index] != AllQuestion.Answer3.choice3){
                    if(A==AllQuestion.Answer3.choice3){
                        addScore(this,index,A);
                    }else{
                        addAns(this,index,A);
                    }
                }    
            break;
            case 4 : 
                if(this.myAns[index] == 0 || this.myAns[index] != AllQuestion.Answer4.choice4){
                    if(A==AllQuestion.Answer4.choice4){
                        addScore(this,index,A);
                    }else{
                        addAns(this,index,A);
                    }
                }    
            break;
            case 5 : 
                if(this.myAns[index] == 0 || this.myAns[index] != AllQuestion.Answer5.choice5){
                    if(A==AllQuestion.Answer5.choice5){
                        addScore(this,index,A);
                    }else{
                        addAns(this,index,A);
                    }
                }    
            break;
        }};
    function addScore(Player,index,A){
        Player.score++;
        addAns(Player,index,A);
    };
    function addAns(Player,index,A){
        Player.myAns[index]=A;
    }
}

let player1 = new Player('Nice');
console.log(player1);//score=0
player1.playing(1,2);
player1.playing(2,2);
player1.playing(4,3);
player1.playing(5,'อะไรวะ');
console.log(player1);//score=1
player1.playing(1,3);
player1.playing(2,4);//ถ้าตอบถูกแล้วจะเปลี่ยนคำตอบไม่ได้
player1.playing(3,3);
player1.playing(4,4);
player1.playing(5,true);
console.log(player1);//score=3
player1.playing(1,1);
player1.playing(5,5);
console.log(player1);//score=5


/* 
//นับคะแนนจากการเปรียบเทียบ ans array กับ solution array ยังไง???
//เพราะจะเปลี่ยนคำตอบได้เรื่อยๆ
let solution = 
    [AllQuestion.Answer1.choice1,
    AllQuestion.Answer2.choice2,
    AllQuestion.Answer3.choice3];
    
    function checkscore(){
        //???
    }
    */

