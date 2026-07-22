//Variables in JS
//Variables are containers for data

//Variable Rules.
//Variable names are case sensitive “a” & “A” is different.

//Only letters, digits, underscore( _ ) and $ is allowed. (not even space)

//Only a letter, underscore( _ ) or $ should be 1st character.

//Reserved words cannot be variable names.



//var methode 

var age=5;
console.log(age);
console.clear();//use to clear the console upto before

 var age=33;
 console.log(age);//reassigning is allowed and can be updated also( it act as a global-scoped behaviour)

 //let method
 let value=450;
 console.log(value); //Variable cannot be re-declared but can be updated. A block scope variable.
 value=550;
 console.log(value);
 
 //const methode
 const price=660;
 console.log(price);//Variable cannot be re-declared or updated. A block scope variable.

 

 //data types.

 //primitive data types.
 
 //1.number-Represents numeric values (integers and decimals).
 let n= 43;
 let pie=3.14;
  n=456
  console.log(pie);
  console.log(n);

  //2.string-Represents text enclosed in single or double quotes.
  
  let s="hello world!";
  console.log(s);

  //3.boolean: Represents a logical value (true or false).
  let bool=true;

  //4.undefined:Represents a logical value (true or false).
  let notassigned;
  console.log(notassigned);

  //5.Null: Represents an intentional absence of any value.

let empty = null;
//6. BigInt: Represents integers larger than 
let bigNumber = 123456789012345678901234567890;
//7. Symbol: Represents unique and immutable values, often used as object keys.
let sym = Symbol('unique');


/* non-primitive data types
  object 
  array
 function */


 /*1.object- it contains key and values pair. 
  name is key and sourya sharma is value .
 to get key value we can type object.key
 or object["key name"]*/
 const student={
    name: "sourya sharma",
    age:20,
    college: "bpit",
    marks: 190,
    ispass:true,

 };
 console.log(student.age);
 console.log(student);
 console.log(student["name"]);
 student["age"]=student["age"]+1;//right new variable get assinged to left variable 
 console.log(student.age);

 //important
 //const value can't be updated but for object the values can be updated if we are updating only keys not the whole object .
