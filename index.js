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
let playerScore=0,computerScore=0;
const round=(playerSelection,ComputerChoice)=>{
    if(playerSelection.toLowerCase()=='rock' && ComputerChoice=='rock'){
        console.log("Draw");
    }else if(playerSelection.toLowerCase()=='scissors' && ComputerChoice=='scissors'){
        console.log("Draw");
    }else if(playerSelection.toLowerCase()=='paper' && ComputerChoice=='paper'){
        console.log("Draw");
    }else if(playerSelection.toLowerCase()=='rock' && ComputerChoice=='paper'){
        console.log("You lose. Paper beats Rock");
        computerScore++;
    }else if(playerSelection.toLowerCase()=='rock' && ComputerChoice=='scissors'){
        console.log("You win. Rock beats Scissors");
        playerScore++;
    }else if(playerSelection.toLowerCase()=='scissors' && ComputerChoice=='rock'){
        console.log("You lose. Rock beats Paper");
        computerScore++;
    }else if(playerSelection.toLowerCase()=='scissors' && ComputerChoice=='paper'){
        console.log("You win. Scissors beats paper");
        playerScore++;
    }else if(playerSelection.toLowerCase()=='paper' && ComputerChoice=='rock'){
        console.log("You win. Paper beats rock");
        playerScore++;
    }else if(playerSelection.toLowerCase()=='paper' && ComputerChoice=='scissors'){
        console.log("You lose. Scissors beats paper");
        computerScore++;
    }else{
        console.log("Invalid choice");
    }
}
const game=()=>{
    for(let i=1;i<=5;i++){
        let playerSelection=prompt("Enter your choice");   
        let ComputerChoice=getComputerChoice();
        round(playerSelection,ComputerChoice);
    }
    if(playerScore>computerScore){
        console.log("YOU WIN THE GAME");
    }else if(computerScore>playerScore){
        console.log("YOU LOSE THE GAME");
    }else{
        console.log("GAME DRAWN");
    }
}
game();