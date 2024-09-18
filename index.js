"use strict";
// INSTALATION PROCESS
// npm install -g typescript
// tsc -v
// tsc --init
// this installs and initiates typescript, it creates a tscconfig file
// we create a index.ts file and use the command tsc index.ts to compile it to a JS file ( an new index.js file will magically appear)
// compiling means to transform the code we write in typescript to JS, the browser and Node.js can only read JAVASCRIPT
// after compiling the code we use node.js to run our JS code
// Codecademy tutorial // 
// Types of data
// let aged = true;  // variable set to boolean value of true
// let realAge = 0; // variable set to 0 number data type
// if (aged) {    // if statement checks to see if aged variable is true
//   realAge = 4; // if true create variable realAge and set value to 4
// }
// let dogAge = realAge * 7; //creates variable dogAge with the value of realAge * 7
// console.log(`${dogAge} years`);  // logs the calculation of dogAge + 'years' string
// // 'any' type variable  /Type annotations are little pieces of code that indicate what type a variable is meant to be.
// let value: any;  // assigns the variable value with a 'any' type of data, this can take any type of value, string, number or array
// value = 42;           // assigns a number
// value = "Hello";      // assigns  a string
// value = [1, 2, 3];   // assigns an array
// // variable with no value
// let phoneNumber:string; //creates variable with no value; using typescript annotation :string, allowing it only to keep string values
// if (Math.random() > 0.5) {    //if statement uses math.random method to generate a random number; 
//   phoneNumber = '+61770102062'; // if the random number is higher than 0.5 then the variable will take this value
// } else {
//   phoneNumber = '7167762323'; // else the variable will take this value
// }
let youAreAwesome;
youAreAwesome = true;
if (youAreAwesome === true) {
    console.log('Nice');
}
else {
    console.log('Not cool man!');
}
console.log(youAreAwesome);
