 //คำถามและตัวเลือก
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
    },
    Question4 : 'What is four?',
    Answer4 : {
        choice1 : 1, choice2 : 2, choice3 : 3, choice4 : 4, choice5 : 5
    },
    Question5 : 'What is Client-side Web Server?',
    Answer5 : {
        choice1 : 'INT101', choice2 : 'INT207', choice3 : 'INT205', choice4 : 'INT202', choice5 : 'INT201'
    }
};
console.log(AllQuestion);

//เฉลย
let solution = [
    AllQuestion.Answer1.choice1,
    AllQuestion.Answer2.choice2,
    AllQuestion.Answer3.choice3,
    AllQuestion.Answer4.choice4,
    AllQuestion.Answer5.choice5
];

class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.quest = 5; // จำนวนคำถาม
        this.myAns = [0, 0, 0, 0, 0]; // 0 = แปลว่ายังไม่ได้ตอบ
        this.playing = function (Q, A) {
            let index = Q - 1;
            switch (Q) {
                case 1: addAns(this, index, A);
                    recheckScore(this);
                    break;
                case 2: addAns(this, index, A);
                    recheckScore(this);
                    break;
                case 3: addAns(this, index, A);
                    recheckScore(this);
                    break;
                case 4: addAns(this, index, A);
                    recheckScore(this);
                    break;
                case 5: addAns(this, index, A);
                    recheckScore(this);
                    break;
            }
        };

        function addAns(Player, index, A) { //เพิ่มคำตอบใน myAns
            Player.myAns[index] = A;
            return Player;
        }
        function recheckScore(Player) { //นับคะแนน
            Player.score = 0;
            for (let i = 0; i < Player.quest; i++) {
                if (solution[i] == Player.myAns[i]) {
                    Player.score += 1;
                }
            }
            return Player.score;
        }
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
player1.playing(2,4);
player1.playing(3,3);
player1.playing(4,4);
player1.playing(5,true);
console.log(player1);//score=2
player1.playing(1,1);
player1.playing(2,2);
player1.playing(4,2);
player1.playing(5,5);
console.log(player1);//score=3
player1.playing(5,'INT201');
console.log(player1);//score=4



