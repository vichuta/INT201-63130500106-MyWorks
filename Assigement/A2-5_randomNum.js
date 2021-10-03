function getRandomNumber(){
    return Math.floor(Math.random() * 100) + 1; //สุ่มตัวเลขระหว่าง1-100 โดยใช้การ random
  }
  
  function sum(a,b,c){
    return a+b+c // เป็นfunctionไว้รวมผลบวก
  }
  
  function max(a,b,c){
    if(a>b&&a>c) return a // เป็นfunctionที่ไว้เปรียบเทียบหาค่ามากสุด 
    else if(b>a&&b>c) return b
    else if(c>a&&c>b) return c
  }
  
  function min(a,b,c){
    if(a<b&&a<c) return a // เป็นfunctionที่ไว้เปรียบเทียบหาค่าน้อยสุด 
    else if(b<a&&b<c) return b
    else if(c<a&&c<b) return c
    }
  
  function find(a,b,c){
    const sum_fin = sum(a,b,c) 
    const min_fin = min(a,b,c)
    const max_fin = max(a,b,c)
    console.log(`sum is ${sum_fin}`) 
    console.log(`min is ${min_fin}`) 
    console.log(`max is ${max_fin}`) 
  }
  
  function main(){
    const a = getRandomNumber();
    const b = getRandomNumber();
    const c = getRandomNumber();
    console.log(`number1 is ${a}`) 
    console.log(`number2 is ${b}`) 
    console.log(`number3 is ${c}`) 
    find(a,b,c)
  }
  
  main()