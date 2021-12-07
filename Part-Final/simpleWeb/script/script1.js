import {subjects} from "../model/subject.js";
import {register} from "../model/registration.js";

register.load();
//get element
const bodyTag = document.body;

//Add Node 1 : <h1>My Website</h1>
const header1 = document.createElement('h1');
header1.textContent ='My Website';
bodyTag.appendChild(header1);

document.querySelector('h1').style.color = '';

//Add Node 2 : 
/*<div id="view-bar" class="right-bar">
        รายวิชาที่ลงทะเบียน : 0 > 
        <a  href="./home.html">ดูประวัตการลงทะเบียน</a>
      </div>
*/
const divViewbar = document.createElement('div');
divViewbar.setAttribute('id','view-bar');
divViewbar.textContent = `รายวิชาที่ลงทะเบียน : ${register.studyTable.length}     `

const alink =document.createElement('a');
alink.setAttribute('href',"./home.html");
alink.textContent = "ดูประวัตการลงทะเบียน";

bodyTag.appendChild(alink);
bodyTag.appendChild(divViewbar);

//Add Node 3 : 
/*<div id="search-bar">
    <img id="icon-search" src="./img/search.png" width="30px">
    <input id="input-search" class="searchbar" type ="text" style="display:none;">
    <button id="button-search" class="searchbar" style="display:none;">search</button>
  </div>
*/
const divSearchbar = document.createElement('div');
divSearchbar.id = 'search-bar';

const imgSearch = document.createElement('img');
imgSearch.id = "icon-search";
imgSearch.src = "./img/search.png";
imgSearch.setAttribute('width',"30px");

const inputSearch = document.createElement('input');
inputSearch.id = "input-search";
inputSearch.className = "searchbar hidden";
inputSearch.type = "text";

const buttonSearch = document.createElement('button');
buttonSearch.id = "button-search";
buttonSearch.className = "searchbar hidden";
buttonSearch.textContent = "Search";

divSearchbar.appendChild(imgSearch);
divSearchbar.appendChild(inputSearch);
divSearchbar.appendChild(buttonSearch);
bodyTag.appendChild(divSearchbar);

//Add Node 4 : <h2 style="display: inline;">รายวิชาทั้งหมด::</h2>
const header2 = document.createElement('h2');
header2.textContent ='รายวิชาทั้งหมด ::';
header2.style = "display:inline;"
bodyTag.appendChild(header2);

//Add Node 5 : subject-table
const centerTag = document.createElement('center');
const tableSubject = document.createElement('table');
tableSubject
tableSubject.innerHTML =
`<tr>
<th>รหัสวิชา</th>
<th>ชื่อวิชา</th>
<th class="text-center" >หน่วตกิจ</th>
<th class="text-center" >การลงทะเบียน</th>
</tr>
`
;
centerTag.appendChild(tableSubject)
bodyTag.appendChild(centerTag);


subjects.forEach((subject) => {
    showSubject(subject);
});

function showSubject(subject){
    let {subjectId,subjectName,subjectCredit,subjectSemester}= subject;
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

    const buttonRegister = document.createElement('button');
    buttonRegister.type = "submit";
    buttonRegister.textContent = "ลงทะเบียน";
    buttonRegister.addEventListener('click',()=>{
        register.add(subject);
        register.save();
        col4.removeChild(buttonRegister);
        col4.textContent = "ลงทะเบียนแล้ว";
        document.querySelector('#view-bar').textContent = `รายวิชาที่ลงทะเบียน : ${register.studyTable.length}     `;
    });
    
    col4.appendChild(buttonRegister);
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    row.appendChild(col4);
    tableSubject.appendChild(row);
}

//Add Event icon Serach
imgSearch.addEventListener('click',()=> {
    if(inputSearch.className == "searchbar hidden"){
        inputSearch.className = "searchbar show";
        buttonSearch.className = "searchbar show";
    }else{
        inputSearch.className = "searchbar hidden";
        buttonSearch.className = "searchbar hidden";
    }
})

//Add Event Seraching
function searching(){
    let keyword = inputSearch.value.toLocaleLowerCase();
        subjects.filter((subject)=>{
        if(!(subject.subjectId.toLowerCase().includes(keyword)||subject.subjectName.toLowerCase().includes(keyword))){
            const notMatchingRow = document.querySelector(`#${subject.subjectId}`);
            notMatchingRow.style = "display:none;"
        }else{
            const MatchingRow = document.querySelector(`#${subject.subjectId}`);
            MatchingRow.style = "display:;"
        }
        });
}
inputSearch.addEventListener('blur',searching);
buttonSearch.addEventListener('click',searching);

function showButton(){
    let registerList = register.list();
    registerList.filter((study)=>{
        if(!(study.subjectId.includes(registerList.subjectId))){
            const MatchingId = document.querySelector(`#${study.subjectId}`);
            console.log(MatchingId.lastElementChild.textContent = "ลงทะเบียนแล้ว");
        }
    });
}
showButton();










