

```Javascript
function distance(p1, p2) {
    console.log(typeof p1); //object
    console.log(typeof p2); //object
    // ** ‐ The exponentiation assignment operator
    return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
}
//1.เป็นการโยน ileteral ไปเป็น parameter
console.log(distance({ x: 1, y: 1 }, { x: 2, y: 2 })); //actual parameter
```
## Rest parameter
* คือ การใช้ `...` ที่เป็น parameter ของ function
```Javascript
function getStudentsInClass(instructor, ta, ...students) {   //...students คือ array 
    return students;
}
let studentSec2 = getStudentsInClass('Umaporn', 'Tisanai', 'A', 'B', 'C');
console.log(studentSec2);
[instructor, ta, ...student] = ['Umaporn', 'Tisanai', 'A', 'B', 'C'];
console.log(student);
```