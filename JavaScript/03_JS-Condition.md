# JavaScript Condition
* rounding error, it affects any programming language that uses binary floating-point numbers.
* if-else
* switch...case
* while
* do...while
* for
* for-in
* for-of
# Type Conversions
## 1. Explicit Conversions = แปลง type ด้วย function
```JavaScript
    Number('3');    //3
    String(false);  //"false"
    Boolean([]);    //true
```
## 2. Implicit Conversions = แปลง type ให้อัตโนมัติ
```JavaScript
    'a' + 1     //'a1'  (เปลี่ยน Number -> String)
    '5' * '4'   //20    (เปลี่ยน String -> Number)
    true + 1    //2     (true มีค่าเป็น 1)
    false +1    //1     (false มีค่าเป็น 0)
    null * 1    //0     (null มีค่าเป็น 0)
```
| Value     | to String    | to Number | to Boolean   |
|:----------|:------------:|:---------:|:-----------: |
|uuderfined |`"underfined"`|`NaN`      |`false`       |
|null       |`"null"`      |`0`        |`false`       |
|true       |`"true"`      |`1`        |              |   
|false      |`"false"`     |`0`        |              | 
|""         |              |`0`        |`false`       |
|"1.2"      |              |`1.2`      |`true`        |   
|"one"      |              |`NaN`      |`true`        | 
|0          |`"0"`         |           |`false`       |
|-0         |`"0"`         |           |`false`       |
|1          |`"1"`         |           |`true`        |
|Infinity   |`"Infinity"`  |           |`true`        |
|-Infinity  |`"-Infinity"` |           |`true`        |
|NaN        |`"NaN"`       |           |`false`       |
|[ ]        |`""`          |`0`        |`true`        |
