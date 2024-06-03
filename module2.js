
// input the exported value from other module with require 
const obj = require('./module1');


// another way of exporting value from other module with 
// directed {...} obj name without using obj.(...) back
const {email, address} = require('./module1');

console.log(obj.name, obj.age,'\b')
console.log(email,address)