//Functions in JS
//blcoks of code that performs a specific task, can be invoked whenever needed .

//syntax
//function functionName(){
    //do some work
//}
//function call
//functionName();

//example
function sum(a,b){
    //a and b is parameter 
    console.log("sum of a and b is = " + a+b);


} 


sum(90,70); // here the 90 and 70 is argument.
//Parameter: sum (placeholder inside the function).
//Argument: 90 and 70 (real value given at call time).
//
// Return Statement

    // The return statement is used to send a result back from a function.
    // When return executes, the function stops running at that point.
    // The returned value can be stored in a variable or used directly.
//Types of Functions

//Here are all the main types of functions in JavaScript:
// 1. Named Function

// A function that has its own name when declared. It’s easy to reuse and debug because the name shows up in error messages or stack traces.
function greet() {
  return "Hello!";
}
console.log(greet());
// 2. Anonymous Function

// An anonymous function is a function defined without an explicit name. It is commonly used as a callback or assigned to a variable.

const greet = function() {

  return "Hi there!";

};

console.log(greet());

