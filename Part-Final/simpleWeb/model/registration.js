import { subjects } from "./subject.js";
export let register = {
    studyTable:[],
    totalCredit: function(){
        let sumCrcdit=0;
        register.studyTable.forEach((subject)=>{sumCrcdit = sumCrcdit+ subject.subjectCredit;})
        return sumCrcdit;
    },
    add: function(subject){
        register.studyTable.push({ 
            subjectId: subject.subjectId, 
            subjectName: subject.subjectName,
            subjectCredit: subject.subjectCredit});
    },
    save: function () {
        localStorage.setItem('RegisteredSubject', JSON.stringify(register.studyTable));
        sessionStorage.setItem('RegisteredSubject', JSON.stringify(register.studyTable));
    },
    load: function(){
        register.studyTable = localStorage.getItem('RegisteredSubject');
        if (register.studyTable == undefined ||register.studyTable === 0) {
            register.studyTable = [];
          } else {
            register.studyTable = JSON.parse(register.studyTable);
          }
    },
    list: function () {
        this.load();
        const subjectsRegisted = [];
        register.studyTable.forEach((subj) => {
          subjects.forEach((subject) => {
            if (subj.subjectId.includes(subject.subjectId))
            subjectsRegisted.push({ ...subject});
          });
        });
        return subjectsRegisted;
    },
    remove: function(subjId){
        if (confirm(`Are you sure to cancel ${subjId}?`)) {
            let indexTofind = register.studyTable.findIndex((subject)=>{
                return subject.subjectId.includes(subjId)
            });
            register.studyTable.splice(indexTofind,1);
            this.save();
          }
    },
    removeAll: function(){
        if (confirm('Are you sure to remove all register?')) {
            register.studyTable = [];
            localStorage.removeItem('RegisteredSubject');
          }
    }
}
