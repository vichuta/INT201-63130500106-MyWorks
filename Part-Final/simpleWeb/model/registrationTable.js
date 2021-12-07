export let register = {
    subjects:[],
    totalCredit: function(){
        let sumCrcdit=0;
        register.subjects.forEach((subject)=>{sumCrcdit = sumCrcdit+ subject.subjectCredit;})
        return sumCrcdit;
    },
    add: function(subject){
        register.subjects.push({ 
            subjectId: subject.subjectId, 
            subjectName: subject.subjectName,
            subjectCredit: subject.subjectCredit});
    },
    save: function () {
        localStorage.setItem('RegisteredSubject', JSON.stringify(register.subjects));
        sessionStorage.setItem('RegisteredSubject', JSON.stringify(register.subjects));
    },
    load: function(){
        register.subjects = localStorage.getItem('RegisteredSubject');
        if (register.subjects == undefined ||register.subjects === 0) {
            register.subjects = [];
          } else {
            register.subjects = JSON.parse(register.subjects);
          }
    }
}
