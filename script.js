console.log("hello");

let pink = document.querySelector('.pink');
let blue= document.querySelector('.blue');
let shopping = document.querySelector('.shopping');
let sleeping = document.querySelector('.sleeping');
let coffee = document.querySelector('.coffee');
let water= document.querySelector('.water');
let button= document.querySelector('button');
let message= document.querySelector('.message');
let q2
let q3

let answer1;
let answer2;
let answer3;

pink.addEventListener("click", function() {
    pink.style.border = "3px solid white";
    answer1 = "pink";
    console.log(answer1);
});

blue.addEventListener("click", function(){
    blue.style.border = "3px solid white";
    console.log(answer1);
    answer1 = "blue";
});


shopping.addEventListener("click", function(){
    shopping.style.border = "3px solid white";
    console.log(answer2);
    answer2 = "shopping";
});

sleeping.addEventListener("click", function(){
    sleeping.style.border = "3px solid white";
    console.log(answer2);
    answer2 = "sleeping";
});

coffee.addEventListener("click", function(){
    coffee.style.border = "3px solid white";
    console.log(answer3);
    answer3 = "coffee";
});

water.addEventListener("click", function(){
    water.style.border = "3px solid white";
    console.log(answer3); 
    answer3 = "water";
});

 button.addEventListener("click", function(){
console.log("work");


 if ( answer1 === "pink" && answer2 === "shopping" && answer3 === "water"){
        message.innerHTML = " You Are Monica!";
        console.log("mon");
 }

 else if( answer1 === "pink" && answer2 === "shopping" && answer3 === "coffee"){
        message.innerHTML = "You Are Rachel!";
        console.log("rachel");
    }
 else if( answer1 === "pink" && answer2 === "sleeping" && answer3 === "water"){
        message.innerHTML =" You Are Pheobe!";
 }
 else if(answer1 === "blue" && answer2 ===  "shopping" && answer3 === "water"){
       message.innerHTML =" You are Chandler";
  }
   else if(answer1 === "blue" && answer2 ===  "sleeping" && answer3 === "coffee"){
        message.innerHTML = "You are Ross";
        
   } else if(answer1 === "blue" && answer2 === "sleeping" && answer3 ===  "water"){
       message.innerHTML = "You are Joey";
   }
});