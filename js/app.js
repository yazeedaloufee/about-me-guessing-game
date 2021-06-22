'use strict' 
let c=0; 
let username= prompt("what is your name?")
alert("welcome "+username+". i will ask you a few questions about me if you dont mind.")

let answer1 = prompt("am i an engineer? yes/no")

switch (answer1.toLowerCase()){
    case "yes":
    case "y" :
        c++;
    alert("correct")
    break;
    default :
    alert("try harder")
    break;
}

let answer2 = prompt("do i have bachelors of sience in civil engineering? yes/no")
switch (answer2.toLowerCase()){
    case "yes":
    case "y" :
    alert("not really, i am an electronics engineer")
    break;
    default :
    c++;
    alert("true, i am an electronics engineer")
    break;
}

let answer3 = prompt("have i worked at the german jordanian university? yes/no")
switch (answer3.toLowerCase()){
    case "yes":
    case "y" :
        c++;
    alert("correct, I have worked there for 18 months")
    break;
    default :
    alert("you need to be more accurate, I have worked there for 18 months")
    break;
}

let answer4 = prompt("have i worked as a teacher before? yes/no")
switch (answer4.toLowerCase()){
    case "yes":
    case "y" :
        c++;
    alert("correct, but i don't want it anymore")
    break;
    default :
    alert("i have actully, but i don't want it anymore")
    break;
}
let answer5 = prompt("do i want to work at google? yes/no")
switch (answer5.toLowerCase()){
    case "yes":
    case "y" :
        c++;
    alert("correct, pray for me")
    break;
    default :
    alert("incorrect. i really want that , pray form me!")
    break;
}
alert("so "+username+", try to read through the page to find more information about me. and refresh the page to answer the questions again. try to get them all right this time")

let i =0;
let coderAge=28;
let userGuess=null;

for(i;i<4;i++)
{  userGuess= Number(prompt("try gueessing my age"));
if(userGuess> coderAge){alert("you should guess a lower number")}
else if(userGuess< coderAge){alert("you should guess a higher number")}
else if(coderAge == userGuess){
    alert("nice guess!")
    c++;
    break;}
    console.log(i);

    if (i==3){
        alert(" my age is 28 better luck next time")
    }
}

 i =0;

let userInput='';
let sport= ["basketball", "calisthenics", "swiming", "body building"]

for(i;i<6;i++)
{  userInput= prompt("guess what sport did i use to play");
    switch(userInput.toLocaleLowerCase()){
        case sport[0]:
        case sport[1]:
        case sport[2]:
        case sport[3]:
            alert("good answer")
            c++;
            i=6;
            break;
            default:
                alert("try again")
                break;
    }
    }
    alert("i played "+sport);

    alert(" you have answered  "+c+" out of 7 questions correctly")
