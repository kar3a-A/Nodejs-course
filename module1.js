
const name = 'kkh';
const age = 17;
const email = "kkh@gmail.com"
const address = "toronto"

// module exporting with .exports 
// two or more data export as obj {}
module.exports= {
    name: name,
    age: age,

    // another way of exporting as obj in ES6 js
    email,
    address
};