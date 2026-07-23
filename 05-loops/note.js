//loops - loops are used to execute a piece of code again & again. 
//for loops 
//for loop syntax 
/*for(let i=1; i<=5;i++){
console.log("sourya sharma") }*/

for(let i=1;i<=10;i++){
console.log("sourya sharma");
}
//calculate sum of 1 to 5 
let sum =0;
for( let i =1; i<=5;i++){
    sum=sum+i;
}
console.log("sum = " , sum);
//while loop
//syntax
//while(condition){
//do some work}
//intialisation is done outside the loop and updation is done inside the loop
 //print upto number 10 using while loop.
 let x=1;
 while(x<=10){
    console.log(x);
    x++;
 }//no semicolon in while loop 
 //do-while loop
 //do{
 //do some work } while(condition); semicolon in do while loop.
 let m=1;
 do{
    console.log("sourya sharma")
m++}while(m<=10);
 
//for of loops in js  it is used in array string maps set and ect.
//syntax for(let val of iterable)
//iterating over a string 
let myname="souryasharma"
let size=0;
for(let i of myname){
    console.log("i=", i)
}
//for in loops 
//it give us the keys of the object 
let student = {
    name: "Aman",
    age: 20,
    college: "BPIT"
};
for (let key in student) {
    console.log(key + " : " + student[key]);
}

