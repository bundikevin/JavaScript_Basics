/******* Arithmetic Operators *******/

// let x = 10;

// let y = 10;

// let result = x+y;
// console.log(result);

//addition
// function sum(x,y){
//    return sum = x+y;
// }
// console.log("The sum is:"+sum(20,20));

//subtraction
// function minus(x,y){
//    return minus = x-y;
// }
// console.log("The subtraction is:" + minus(80,20));

//Multiplication
// function product(x,y){
//    return product = x*y;
// }
// console.log("The product is:" + product(80,20));

//Division
// function division(x,y){
//    return division = x/y;
// }
// console.log("The division is:" + division(80,20));

//Modulus
// function modulus(x,y){
//    return modulus = x%y;
// }
// console.log("The modulus is:" + modulus(5,2));

//Exponential
// function exponential(x,y){
//    return exponential = x**y;
// }
// console.log("The exponential is:" + exponential(8,2));

//Incremental
// let a = 10;
// a++;
// console.log("The result is:" + a);

//Decrement
// let b = 10;
// b--;
// console.log("The result is:" + b);

/********* Assignment Operators  *********/
// let x = 10;

// x = 10 + 20;

// x **= 5;

// console.log(x)

/****** Comparison Operators =, ==, ===, !=, !==, >, < ********/
let x = 41;

let y = 40;

//Three equal signs check the type also but double equal signs only checks value
//!= double !== checks value and type too
let result = x < y;

//console.log("The answer is : " + result);

console.log("The value is : " + result);

/*
Ternary Operator : like if-then-else
takes 3 arguments
condition ? value if true : value if false
*/
// let answer = x < y ? x : y;
// console.log(answer);


/******* Logical Operators *******/
// let d = true;
// let e = true;

// console.log((10>4) && (5>20));

/******* Type Operators typeof which returns type of variable instanceof *******/

let firstName = 'Kevin';

console.log(typeof firstName);
console.log(typeof 12345)
console.log(typeof true)

let lastName = new String("Bundi");
console.log (lastName instanceof String);

/****** Bitwise Operators & AND, | OR, ^XOR, ~NOT,>> Right Shift *******/

console.log('*******************BITWISE OPERATORS***********************');

let A = 1;
let B = 2;

console.log(A & B);
console.log(A | B);
console.log(5 ^ 3);
console.log(~ B);
console.log(A >> B);
//console.log(A < B);