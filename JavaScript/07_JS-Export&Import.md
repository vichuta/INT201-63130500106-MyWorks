# JavaScript Export
1. Module Export >> โยนออก
```javascript
    // Exporting individual features
    export let name1, name2, …, nameN; // also var, const 
    export let name1 = …, name2 = …, …, nameN; // also var, const 
    export function functionName(){...}
    export class ClassName {...}

    // Export list 
    export { name1, name2, …, nameN };
    // Renaming exports 
    export { variable1 as name1, variable2 as name2, …, nameN };

    // Default exports 
    export default expression;
    export default function (…) { … } // also class, function 
    export default function name1(…) { … } // also class, function 
    export { name1 as default, … };
```
2. Module Import >> เอาเข้า
```javascript
    import defaultExport from "module-name";
    import * as name from "module-name";
    import { export1 } from "module-name";
    import { export1 as alias1 } from "module-name";
    import { export1 , export2 } from "module-name";
    import { export1 , export2 as alias2 , [...] } from "module-name";
    import defaultExport, { export1 [ , [...] ] } from "module-name";
```

## Example
* `index.html`
```html
    <!--index.html -- > //run on browser
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <title>Document</title>
    </head>
    <body>
    <script src="./main.js" type="module"></script>
    </body>
    </html>
```
* `dataFuncExport.js`
```javascript
    //named export
    export const frontEndFramework = ['Vuejs', 'React', 'Angular’]
    //or
    const frontEndFramework = ['Vuejs', 'React', 'Angular’]
    export { frontEndFramework }
    export function greeting() {
    return 'Hello, function from another module’
    }
    //default export
    export default function getInstructor() {
    return `Umaporn Supasitthimethee`;
    }
```
* `subjectExport.js`
```javascript
    const subject = 'INT201'
    export {subject}
```
* `main.js`
```javascript
    import defaultExport, {greeting, frontEndFramework as frontEnd} from './dataFuncExport.js';
    import {subject} from './subjectExport.js'
    console.log(`Frontend Framework: ${frontEnd}`);
    console.log(greeting());
    console.log(defaultExport);
    console.log(subject);
```

