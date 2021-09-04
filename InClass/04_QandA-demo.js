/**
 * Q1 1+1=? A2
 * Q2 1*2=? A2
 * Q3 9/3=? A3
 * Q4 4*5=? A20 
 * Q5 10%8=? A2
 * 
 * ผู้เล่น ควรมี จำนวนข้อที่ตอบไปแล้ว
 *           คะแนนที่ได้
 */
//
//check question (ตอบไปกี่ข้อแล้ว)
//check answer (ตอบถูกกี่ข้อ)
//add-point 
let AllQuestion = {
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
    }
};
console.log(AllQuestion);

let player1 = {
    name : 'AAA',
    score : 0,
    Que : [1,2,3,4,5],
    Ans : [0,0,0,0,0],
    playing : function (Q,A){
        let index = Q-1;
        switch(Q){
            case 1 : 
                if(player1.Ans[index] == 0 || player1.Ans[index] != AllQuestion.Answer1.choice1){
                    if(A==AllQuestion.Answer1.choice1){
                        addScore(Q,A);
                    }else{
                        addAns(Q,A);
                    }
                }    
            break;
            case 2 : 
                if(player1.Ans[index] == 0 || player1.Ans[index] != AllQuestion.Answer2.choice2){
                    if(A==AllQuestion.Answer2.choice2){
                        addScore(Q,A);
                    }else{
                        addAns(Q,A);
                    }
                } 
            break;
            case 3 : 
                if(player1.Ans[index] == 0 || player1.Ans [index] != AllQuestion.Answer3.choice3){
                    if(A==AllQuestion.Answer3.choice3){
                        addScore(Q,A);
                    }else{
                        addAns(Q,A);
                    }
                }    
            break;
        }  
    }
};

function addScore(player,Q,A){
    player.score++;
    addAns(player,Q,A)
};
function addAns(player,Q,A){
    player.Ans[Q-1] = true;
};
console.log(printAllQuestion);