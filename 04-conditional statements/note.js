// conditional statements - to implement some condition in the code.
//if statement 
let num=5;
if(num>0){
    console.log("this is num is positive")
};
//if-else statement 

num=-10;
if(num>0)
    {console.log("this num is positive")}
    else 
        console.log("this num is negative");
//ternary operators
let age=15;
let result = age>10 ? "adult" : "not adult";
console.log(result);





//switch statement
//The switch case statement in JavaScript is also used for decision-making purposes. In some cases, using the switch case statement is seen to be more convenient than if-else statements.
let number = 5;

switch (number) {
    case 0:
        console.log("Number is zero.");
        break;
    case 1:
        console.log("Nuber is one.");
        break;
    case 2:
        console.log("Number is two.");
        break;
    default:
        console.log("Number is greater than 2.");
};