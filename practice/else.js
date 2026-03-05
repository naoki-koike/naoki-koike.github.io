"use strict";

function addToBody(text){                                                  
    document.body.innerHTML += "<p>" + text + "</p>";
}

/*
let name = prompt("What's your name?");
addToBody("Hi " + name + "!");
*/

let temp = prompt("What is the temperature outside?");
temp=Number(temp);
if (temp <= 32){
	addToBody("It's freezing! Watch out for ice!");
}else if (temp < 80){
	addToBody("Go for a walk.");
}else{
	addToBody("Go to the beach!");
}
