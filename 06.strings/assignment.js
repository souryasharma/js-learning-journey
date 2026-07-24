//Qs1. Prompt the user to enter their full name. Generate a username for them based on the input.
//Start username with @, followed by their full name and ending with the fullname length.
//eg: user name =“shradhakhapra”, username should be “@shradhakhapra13”
//solution 1.
// let nameinput=prompt("enter your name to create username");
// let symbol="@";
// let size=nameinput.length;
// let username=symbol.concat(nameinput).concat(size);

// console.log(username);
//solution2.
let nameinput=prompt("enter your name to create your user name");
let username = `@${nameinput}${nameinput.length}`;
console.log(username);

