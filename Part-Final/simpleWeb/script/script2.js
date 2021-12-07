import {register} from "../model/registration.js";

register.load();
const bodyTag = document.body;

//Add Element <h1>Your Register::</h1><hr>
const header1YourRegister = document.createElement('h1');
header1YourRegister.textContent = 'Your Registed::';
const hrTag = document.createElement('hr');

bodyTag.appendChild(header1YourRegister);
bodyTag.appendChild(hrTag);

//Add Element <a>Back</a>
const alink =document.createElement('a');
alink.setAttribute('href',"./index.html");
alink.textContent = "Back";

bodyTag.appendChild(alink);

//Add button removeAll
const buttonCancelAllRegister = document.createElement('button');
buttonCancelAllRegister.type = "submit";
buttonCancelAllRegister.style.float = "right";
buttonCancelAllRegister.textContent = "ยกเลิกการลงทะเบียนทั้งหมด";
buttonCancelAllRegister.addEventListener('click',()=>{
    register.removeAll();
    location.reload();
});
bodyTag.appendChild(buttonCancelAllRegister);

//Add subject-list from LocalStorage
const centerTag = document.createElement('center');
const tableSubject = document.createElement('table');
tableSubject
tableSubject.innerHTML =
`<tr>
<th>รหัสวิชา</th>
<th>ชื่อวิชา</th>
<th class="text-center" >หน่วตกิจ</th>
<th></th>
</tr>
`
;
centerTag.appendChild(tableSubject)
bodyTag.appendChild(centerTag);

if(register.studyTable.length == 0){
    document.querySelector('table').style.display = 'none';
    const pText = document.createElement('p');
    pText.textContent = "กรุณาไปลงทะเบียนก่อน !!!";
    bodyTag.appendChild(pText);
}else{
    register.studyTable.forEach((subject)=>{
        let {subjectId,subjectName,subjectCredit}= subject;
        const row = document.createElement('tr');
        row.id = subjectId;
        row.style = "display: ;";
    
        const col1 = document.createElement('td');
        col1.className = 'text-center';
        col1.textContent = subjectId;
        
        const col2 = document.createElement('td');
        col2.textContent = subjectName;
    
        const col3 = document.createElement('td');
        col3.className = 'text-center';
        col3.textContent = subjectCredit;
        
        const col4 = document.createElement('td');
        col4.className = 'text-center';
        
        const buttonCancelRegister = document.createElement('button');
        buttonCancelRegister.type = "submit";
        buttonCancelRegister.textContent = "ยกเลิก";
        buttonCancelRegister.addEventListener('click',()=>{
            register.remove(subjectId);
            location.reload();
        });
    
        col4.appendChild(buttonCancelRegister);
        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        row.appendChild(col4);
        tableSubject.appendChild(row);
    });

    const pTotalCredit = document.createElement('p');
    pTotalCredit.textContent =`จำนวนหน่วยกิตรวม : ${register.totalCredit()}`;
    bodyTag.appendChild(pTotalCredit);
}





