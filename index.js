const getComputerChoice=()=>{
    let randomNumber=Math.ceil(Math.random()*3);
    if(randomNumber==1){
        return "rock";
    }else if(randomNumber==2){
        return "paper";
    }else{
        return "scissors";
    }
}
let playerSelection=prompt("Enter your choice");
console.log(playerSelection);
let ComputerChoice=getComputerChoice();
const round=(playerSelection,ComputerChoice)=>{
    if(playerSelection.toLowerCase()=='rock' && ComputerChoice=='rock'){
        console.log("Draw");
    }else if(playerSelection.toLowerCase()=='scissors' && ComputerChoice=='scissors'){
        console.log("Draw");
    }else if(playerSelection.toLowerCase()=='paper' && ComputerChoice=='paper'){
        console.log("Draw");
    }else if(playerSelection.toLowerCase()=='rock' && ComputerChoice=='paper'){
        console.log("You lose. Paper beats Rock");
    }else if(playerSelection.toLowerCase()=='rock' && ComputerChoice=='scissors'){
        console.log("You win. Rock beats Scissors");
    }else if(playerSelection.toLowerCase()=='scissors' && ComputerChoice=='rock'){
        console.log("You lose. Rock beats Paper");
    }else if(playerSelection.toLowerCase()=='scissors' && ComputerChoice=='rock'){
        console.log("You win. Scissors beats paper");
    }else if(playerSelection.toLowerCase()=='paper' && ComputerChoice=='rock'){
        console.log("You win. Paper beats rock");
    }else{
        console.log("You lose. Scissors beats paper");
    }
}
round(playerSelection,ComputerChoice);