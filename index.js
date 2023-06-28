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
const round=(playerSelection)=>{
    ComputerChoice=getComputerChoice();
    if(playerSelection.toLowerCase()=='rock' && ComputerChoice=='rock'){
        result.textContent="Draw";
    }else if(playerSelection.toLowerCase()=='scissors' && ComputerChoice=='scissors'){
        result.textContent="Draw";
    }else if(playerSelection.toLowerCase()=='paper' && ComputerChoice=='paper'){
        result.textContent="Draw";
    }else if(playerSelection.toLowerCase()=='rock' && ComputerChoice=='paper'){
        result.textContent="You lose. Paper beats Rock";
        computerScore++;
    }else if(playerSelection.toLowerCase()=='rock' && ComputerChoice=='scissors'){
        result.textContent="You win. Rock beats Scissors";
        playerScore++;
    }else if(playerSelection.toLowerCase()=='scissors' && ComputerChoice=='rock'){
        result.textContent="You lose. Rock beats Paper";
        computerScore++;
    }else if(playerSelection.toLowerCase()=='scissors' && ComputerChoice=='paper'){
        result.textContent="You win. Scissors beats paper";
        playerScore++;
    }else if(playerSelection.toLowerCase()=='paper' && ComputerChoice=='rock'){
        result.textContent="You win. Paper beats rock";
        playerScore++;
    }else if(playerSelection.toLowerCase()=='paper' && ComputerChoice=='scissors'){
        result.textContent="You lose. Scissors beats paper";
        computerScore++;
    }else{
        result.textContent="Invalid choice";
    }
}
const main=document.querySelector(".main");
const rock=document.createElement('button');
const paper=document.createElement('button');
const scissors=document.createElement('button');
const result=document.querySelector('.result')
rock.textContent="ROCK";
paper.textContent="PAPER";
scissors.textContent="SCISSORS";
main.appendChild(rock);
main.appendChild(paper);
main.appendChild(scissors);
const btn=document.querySelectorAll("button");
btn.forEach((button)=>button.addEventListener('click',(e)=>{
    let content=e.target.textContent;
    round(content);
}));