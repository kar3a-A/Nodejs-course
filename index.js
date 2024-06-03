// global === window object from web 

global.setTimeout(() => {
    console.log('Hello')
}, 3000)


// Create a setInterval and put into a variable
let interval =  global.setInterval(() => {
    console.log('H3llO')
}, 3000);

// create setTimeout function
global.setTimeout(() => {
    clearInterval(interval);
}, 10000);

//  Console out the directory name 
console.log(__dirname);
// Console out filename 
console.log(__filename);