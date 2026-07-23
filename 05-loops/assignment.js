//Qs1. Print all even numbers from 0 to 100.

for(let num=0;num<=100;num++){
    if(num%2===0){
        console.log(num);
    }
}

/*Qs2.Create a game where you start with any random game number. Ask the user to keep
guessing the game number until the user enters correct value.*/
let number=prompt("enter your number");
let gamenumber=50;
do{
    if(number===gamenumber){
        alert=("you won the game");

    }
    else{
        number=prompt("enter your number");
    }
    
}while(number !== gamenumber)