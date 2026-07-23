
 // more thing to learn 
 //alert - this provide one time message in the form of pop up box 
 alert("hello user!");
 
//prompt - this provide one time message in the form of pop of box and also take iput from  user
let userinput = prompt("enter your name")
console .log(userinput);
 //Qs1. Get user to input a number using prompt(“Enter a number:”). Check if the number is a multiple of 5 or not.

let x=prompt("enter a number")
if (number % 5 ===0){
    console.log("this number is multiple of 5")
}
else {
    console.log("this number is not multiple of 5")
}

//Qs2. Write a code which can give grades to students according to their scores:
//80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
let marks=prompt("enter your marks");
let grade;
if(marks>=90 && marks<=100){
  grade ="A";

}
else if(marks>=70 && marks<=89){
 grade ="B";
}
else if(marks>=60 && marks<=69){
  grade ="c";
}

else if(marks>=50 && marks<=59){
    grade ="D";
}

else if (marks>=0 && marks<=49){
   grade ="F";
}

console.log("according to your scores,your grade was : " , grade);
