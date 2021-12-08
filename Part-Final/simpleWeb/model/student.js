let subjects = [];
subjects.push({subjectId: 'GEN101',subjectName:'PHYSICAL EDUCATION',subjectCredit: 1,subjectSemester: '1/2563'});
subjects.push({subjectId: 'GEN121',subjectName:'LEARNING AND PROBLEM SOLVING SKILLS',subjectCredit: 3,subjectSemester: '1/2563'});
subjects.push({subjectId: 'INT100',subjectName:'INFORMATION TECHNOLOGY FUNDAMENTALS',subjectCredit: 3,subjectSemester: '1/2563'});
subjects.push({subjectId: 'INT101',subjectName:'PROGRAMMING FUNDAMENTALS',subjectCredit: 3,subjectSemester: '1/2563'});
subjects.push({subjectId: 'INT102',subjectName:'WEB TECHNOLOGY',subjectCredit: 1,subjectSemester: '1/2563'});
subjects.push({subjectId: 'INT114',subjectName:'DISCRETE MATHEMATICS FOR INFORMATION TECHNOLOGY',subjectCredit: 3,subjectSemester: '1/2563'});
subjects.push({subjectId: 'LNG120',subjectName:'GENERAL ENGLISH',subjectCredit: 3,subjectSemester: '1/2563'});

subjects[0].Mygrade = 'A';
subjects[1].Mygrade = 'B+';
subjects[2].Mygrade = 'B';
subjects[3].Mygrade = 'B+';
subjects[4].Mygrade = 'A';
subjects[5].Mygrade = 'A';
subjects[6].Mygrade = 'B+';

subjects.push({subjectId: 'GEN111',subjectName:'PHYSICAL EDUCATION',subjectCredit: 3,subjectSemester: '2/2563'});
subjects.push({subjectId: 'INT103',subjectName:'LEARNING AND PROBLEM SOLVING SKILLS',subjectCredit: 3,subjectSemester: '2/2563'});
subjects.push({subjectId: 'INT104',subjectName:'INFORMATION TECHNOLOGY FUNDAMENTALS',subjectCredit: 3,subjectSemester: '2/2563'});
subjects.push({subjectId: 'INT105',subjectName:'PROGRAMMING FUNDAMENTALS',subjectCredit: 1,subjectSemester: '2/2563'});
subjects.push({subjectId: 'INT107',subjectName:'WEB TECHNOLOGY',subjectCredit: 3,subjectSemester: '2/2563'});
subjects.push({subjectId: 'INT200',subjectName:'DISCRETE MATHEMATICS FOR INFORMATION TECHNOLOGY',subjectCredit: 1,subjectSemester: '2/2563'});
subjects.push({subjectId: 'LNG220',subjectName:'GENERAL ENGLISH',subjectCredit: 3,subjectSemester: '2/2563'});

subjects[7].Mygrade = 'A';
subjects[8].Mygrade = 'B+';
subjects[9].Mygrade = 'B+';
subjects[10].Mygrade = 'B+';
subjects[11].Mygrade = 'B+';
subjects[12].Mygrade = 'A';
subjects[13].Mygrade = 'A';

let student = {
    id : '63130500106',
    name : 'Vichuta',
    studyResult: subjects,
    gpax: function(){
        return (this.gpaAll()/this.creditAll()).toFixed(2);
    },
    gpaAll: function(){
        let sum = 0;
        this.studyResult.forEach((subject)=>{
            sum = sum+subject.subjectCredit*checkGrade(subject.Mygrade);
        })
        return sum;
    },
    gpa: function(subjectSemester){
        let sum = 0;
        let subjectThisSemester = this.studyResult.filter((subject)=> subject.subjectSemester === subjectSemester);
        subjectThisSemester.forEach((subject)=>{
            sum = sum+subject.subjectCredit*checkGrade(subject.Mygrade);
        })
        return sum;
    },
    creditAll: function(){
        let sum = 0;
        this.studyResult.forEach((subject)=>{
            sum = sum+subject.subjectCredit
        })
        return sum;
    },
    credit: function(subjectSemester){
        let sum = 0;
        let subjectThisSemester = this.studyResult.filter((subject)=> subject.subjectSemester === subjectSemester);
        subjectThisSemester.forEach((subject)=>{
            sum = sum+subject.subjectCredit
        })
        return sum;
    },
    status: function(){
        let grade = this.gpax();
        let status = '';
        if(grade<2.00){
            status = 'Probation';
        }else if(grade>=2){
            status = 'Normal'; 
        }else{
            status = 'Retrired';
        }
        return status;
    }
}

//2.3
function checkGrade(grade){
    let score = 0;
    switch(grade){
        case 'A': score = 4;
        break;
        case 'B+': score = 3.5;
        break;
        case 'B': score = 3;
        break;
        case 'C': score = 2.5;
        break;
        case 'C+': score = 2;
        break;
        case 'D+': score = 1.5;
        break;
        case 'D': score = 1;
        break;
        case 'F': score = 0;
        break;
        case 'Fa': score = 0;
        break;
        case 'Fd': score = 0;
        break;
    }
    return score;
}


console.log(student.creditAll());        //2.2
console.log(student.credit('1/2563'));
console.log(student.credit('2/2563'));         
console.log(student.gpaAll());            //2.5
console.log(student.gpa('1/2563'));       
console.log(student.gpa('2/2563'));  
console.log(student.gpax());
        