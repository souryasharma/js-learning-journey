//strings
//String is a sequence of characters used to represent text
let str="souryasharma"
console.log(str)
console.log(str.length)// use to find the number of string 
console.log(str[6]);
//String Indices it start with index 0


//Template Literals in JS
//A way to have embedded expressions in strings.
let sentence=`this is template literals`
let obj={
    item:"pen",
    price:10,
    quantity:90,
};
let output=`the cost of ${obj.item} is ${obj.price} rupees ` ;
console.log(output);
//String Interpolation-To create strings by doing substitution of placeholders

//`string text ${expression} string text`

//about /n and \t
let name="sourya\nsharma"//add to next line 
console.log(name);
name="sanskriti\tsingh"// add extra one space between two string but does not change the length of the string 
console.log(name);

//string methods-these are built in functions to manipulate a string
//.str.toUppercase()
// it makes the string in capital letters 
console.log(name.toUpperCase());
//string is immutable means there is no change in orignal string by any methods 
name="PRITISHKUMAR"
let NEW=name.toLocaleLowerCase();
console.log(NEW);
name="  souryaaaa  "
 console.log(name.trim()) //removes whitespaces.
 // it not removes the whitespaces in middel.

 //str.slice(startindex,endindex)// retruns parts of string
 let greeting = `hello user`
 let newgreetings=greeting.slice(4,8);
console.log(newgreetings);
//str1+str2+str3
let newgreetings2=greeting.concat(newgreetings);
console.log(newgreetings2);
//str.replace(searchval,new val)
console.log(greeting.replace("user","world"));
//str.charAt(idx)
console.log((greeting.charAt(6)));

