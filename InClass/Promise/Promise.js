const friends = [
    {fullname:'Paul lee',address: 'Bangkok,Thailand'},
    {fullname:'Yoko Naree',address: 'Kyotp,Japan'}
];

function getFullName(name,surname){
    return `${name} ${surname}`;
}

function getFriendName(name,surname,callbackFn){

    //**ต้องมี return หน้า Promise เมื่อเรียกใช้ .then()*/
    return new Promise((resolve,reject)=>{
        const fullname = callbackFn(name,surname); 
        if(fullname === undefined){
            reject(new Error('cannot get full name')); //ถ้าเกิด error จะไม่ทำบรรทัดต่อไป
        }
        resolve(fullname);                          
    })
}
getFriendName('Paul','lee',getFullName)
    .then((myFriendName)=>console.log(myFriendName))
    .catch((err)=> console.log(err));    
// .then() = รับทำต่อเมื่อ Promise ทำงานเสร็จแบบ resolve
//  .catch() = จะทำงานเมื่อเกิด error หรือ Promise ทำงานเสร็จแบบ reject


function getAddress(fullname) {
    return new Promise((resolve, reject) => {
        let myFriend = friends.find((friend) => friend.fullname.includes(fullname));
        //ชื่อเพื่อนไม่มีใน friends จะเกิด error
        if (myFriend === undefined) reject(new Error('your friend was not found'));
        resolve(myFriend.address);
    });
}

getFriendName('Yoko', 'Naree', getFullName)
  .then((myFriendName) => {
    console.log(myFriendName);
    return myFriendName;
})
  .then((friendFullName) => {
    console.log(friendFullName);
    getAddress(friendFullName).then((friendAddr) => console.log(friendAddr));
})
  .catch((err)=> console.log(err));  

//2. การใช้ await (ต้องใช้ใต้ asynco)

async function main() {
    const myFriendName = await getFriendName('Paul', 'lee', getFullName);
    const myFriendAddr = await getAddress(myFriendName);
    console.log(myFriendAddr); //ทำก่อน บรรทัดที่ 44
}
main();