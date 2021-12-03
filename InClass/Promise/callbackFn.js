const friend = [
    {fullName:'Paul lee',address: 'Bangkok,Thailand'},
    {fullName:'Yoko Naree',address: 'Kyotp,Japan'}
];

function getFullName(name,surname){
    return `${name} ${surname}`;
}

function getFriendName(name,surname,callbackFn){
    const fullname = callbackFn(name,surname); 
    console.log(fullname);                          //  print --> Paul lee
}

//getFullName is callback function 
getFriendName('Paul','lee',getFullName);
