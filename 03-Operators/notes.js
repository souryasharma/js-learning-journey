//operators.
//Arithmetic operators-perform mathematical calculations like addition, subtraction, multiplication, etc.

let a =10;
let b =5;
console.log("a+b = " + (a + b));
console.log("a-b = " + (a-b));
console.log("a*b = " + (a*b));
console.log("a/b = " + (a/b));

//modulus % (it gives the remainder)
console.log("a%b = " + (a%b))
//exponentiation
console.log("a**b= " + (a**b)) //it means a^b

 //unary operators
// increment operator 
//pre-increment operator(++a)
 let r=3;
 console.log(++r);//(first increment then prints its)
 //post-increment (a++)

 console.log(r++);
 
 console.log(r);
 
//assingment operators 
 let y =5;
 let i=5;

 y += 4 ; 
 console.log("y= ",y);//9
 y -= 5; 
y *=6; 
 y /=5;
 y**=4;
 y%=10;


 //comparison operators 
 // equal to == (it gives false or true)
 let p =90;
  let q = 80;
  
console.log( "90==80" , p == q);

console.log("90!=80" ,p!=q) //! is describe it not equal to 
let c= 10;
let m = "10";
console.log(c==m);//but the data type is not same so here we aplly stricter version of comparision operators.
//=== it checks data type also with the value 
console.log(c===m); // it will give false because the data type of c is not equal to m .
console.log(c!==m);
//logical operators 
//are mainly used to perform the logical operations that determine the equality or difference between the values.

const o=true ,l =false;
console.log(o && l); //logical and - it determine that if two different values .. and one is true and one is false it will flase and if only both are true or both are flase it will give true or flase.
console.log(o||l); //logical or -returns true if at least one operand is true.
console.log(!(o==l) );