//if condition
let a = 0;
let b = 1;
let c = 5;
let d = 12;

check(a);
check(b);
check(c);
check(d);

function check(x) {
    if(x=0){
        console.log(x +' this number is 0');
    }else if(x>0 && x<=5){
        console.log(x +' this number in 0-5');
    }else if(x>5 && x<=10){
        console.log(x +' this number in 5-10');
    }else{
        console.log(x +' this number more than 10');
    }
}
