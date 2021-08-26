
//แบบที่ 1 (ของตัวเอง)
function Test(year) {
    let n = year % 12;
    switch(n){
        case 0: console.log('monkey'); 
        break;
        case 1: console.log('rooster'); 
        break;
        case 2: console.log('dog');
        break;
        case 3: console.log('pig');
        break;
        case 4: console.log('rat');
        break;
        case 5: console.log('ox');
        break;
        case 6: console.log('tiger');
        break;
        case 7: console.log('rabbit'); 
        break;
        case 8: console.log('dragon'); 
        break;
        case 9: console.log('snake');
        break;
        case 10: console.log('horse'); 
        break;
        case 11: console.log('sheep'); 
        break;
    }
}
Test(2002);

//แบบที่ 2 (ของตัส)
let year = 1900;
let zodiac = {  //สร้างเป็น object zodiac
    0: 'monkey',
    1: 'rooster',
    2: 'dog',
    3: 'pig',
    4: 'rat',
    5: 'ox',
    6: 'tiger',
    7: 'rabit',
    8: 'dragon',
    9: 'snake',
    10: 'horse',
    11: 'sheep'
}

console.log(`your zodiac is : ${zodiac[year % 12]}`);