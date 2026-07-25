//arrays - it is a collections of items
//The indexing starts at 0, so the first element is at position 0, the second at position 1, and so on.
//Arrays can hold any type of data-such as numbers, strings, objects, or even other arrays-making them a flexible and essential part of JavaScript programming. 
let marks= [90,60,50,80,78];
console.log(marks);

//another method
//constructor
let a= new Array(30,60,90,80,97);
console.log(a);

//1.accessing elements of an array.

 let heroes=[ "ironman","hulk","spiderman","captainamerica"];
 console.log(heroes[0]);
 console.log(heroes[1]);
 console.log(heroes[2]);
//array length = a[a.length-1];//
 console.log(heroes[heroes.length-1]);//for last item

 //modifying the array elements 
 let b=[80,70,60,50];
 console.log(b);
 b[2]="sourya sharma";
 console.log(b);

 //adding elements to the array 
 b.push("node.js");//adding the element in last 
 b.unshift("web development");//adding the element in starting
 console.log(b);

//looping over an array 
for(i=0;i<b.length;i++){
    console.log(b[i]);
}
//for of loop
for(let el of b){
    console.log(el);
};
let cities=["delhi","Patna","jaipur","haryana"];
for(let el of cities){
    console.log(el.toUpperCase());
}
//arrays method
//push() //add to end (change the orignal array) 
// unshift() // add to start (change the orignal array) 
//shift(): delete from start and return 
//pop // delete from end and return(change the orignal array) 
//toString-- coverts array to string (( not change the orignal array) )
//concat(): joins multiple arrays & retruns result(not change the original array )
//slice(): returnsa piece of the array(dont change the original array )
//slice(startinx,endinx)(dont change the original array )
//



//splice() change original array(add,remove,replace)
