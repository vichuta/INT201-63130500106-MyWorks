//rounding error, it affects any programming language that uses binary floating-point numbers.




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


//if-else
//switch...case
//while
let count = 0
while(count < 5) {
    console.log(count);
count++;
}
//do...while
let count = 0
do{
    console.log(count+=count); 
    count++;
}
while(count < 5);
//for
//for-in
//for-of
