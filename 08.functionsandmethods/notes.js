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
    console.log("sum of a and b is = "+ (a+b)
    );


} 


sum(90,70);  // here the 90 and 70 is argument.
  //Parameter: sum (placeholder inside the function).
  //Argument: 90 and 70 (real value given at call time).
   //
 // Return Statement

    // The return statement is used to send a result back from a function.
    // When return executes, the function stops running at that point.
    // The returned value can be stored in a variable or used directly.
    function mul(a,b){
         let mul=a*b;
        return mul;
    }
   
let value =mul(2,3);
console.log(value);
//types of functions 
//arrow funtions 
//it is compact way of writing a function.
//const functionName = ( param1, param2 ...) => {

//do some work }

//sum function in form of arrow function form 
const arrowsum=(x,y) => {
    u=x+y;
    console.log("the sum of x and y is " + u);

}
arrowsum(4,5);
const arrowmul=(o,m) =>{
    i=o*m;
    console.log("the multiplication of o and m is " + i);

}
arrowmul(6,8);
// named function
//A function that has its own name when declared. It’s easy to reuse and debug because the name shows up in error messages or stack traces.
const printhello=() =>{
    console.log("hello");

}
printhello();


