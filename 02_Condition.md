# Header1
## Headder 2
### 
``` Sql
select *
from products p 
where not exists (select * from orderdetails od where p.productCode = od.productCode); 
```
