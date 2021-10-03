/*แบบฝึกหัด 3 Body Mass Index (BMI) Calculator Program
•Write function to calculate BMI and use letand const in your program
•The Body Mass Index is the body mass in kilogram divided by the square of body height in meters. 
Show at least 3 test data.BMI = kg/m^2
Georgia’s weight is 36.5 pounds, and her height is 39 inches. 
What is Georgia’s BMI?*/

function BMI(weight,height){
  const results = weight/(height*height);
  if(results<18.5){
    return 'Underweight'
  }else if(18.5<results&&results<24.9){
    return 'Healthy'
  }else if(25.0<results<29.9){
    return 'Overweight'
  }else if(30.00<results){
    return 'Obese'
  }
}
function pound_to_kg(pounds){
  const kg = pounds*0.453592;
  return kg;
}
function inches_to_meter(inches){
  const meter = inches*0.0254;
  return meter;
}
let Georgia = {weight: 36.5,height: 39}
console.log(BMI(pound_to_kg(Georgia.weight),inches_to_meter(Georgia.height)));
