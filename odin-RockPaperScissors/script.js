function getComputerChoice() {
    
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random()*options.length)];
}


function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return "tie"
    } else if (
        playerSelection == "rock" && computerSelection == "scissors"
        || playerSelection == "scissors" && computerSelection == "paper"
        || playerSelection == "paper" && computerSelection == "rock") {

            return "win"
    } else {
        return "lose"
    }
}

function playRounds(playerSelection) {

    let computerSelection;
    let playerResult;

 
    computerSelection = getComputerChoice();

    playerResult = playRound(playerSelection, computerSelection);

    if (playerResult == "win") {
        playerScore += 1 ;
        document.getElementById("result").textContent=
            `You Win! ${playerSelection} beats ${computerSelection}`;

    } else if (playerResult == "lose") {
        computerScore += 1 ;
        document.getElementById("result").textContent=
            `You Lose! ${computerSelection} beats ${playerSelection}`;

    } else {
        document.getElementById("result").textContent=
            `It's a Tie! You both chose ${playerSelection}`;
    }

    document.getElementById("score").textContent=
            `The score is ${playerScore} - ${computerScore}`;
    
    if (computerScore ==  5) {
        document.getElementById("result").textContent=
            `You lost the game :(`;
        
        playerScore = 0;
        computerScore = 0;
    } else if (playerScore == 5) {
        document.getElementById("result").textContent=
            `You won the game :)`;
        
        playerScore = 0;
        computerScore = 0;
    }

}

let playerScore = 0;
let computerScore = 0;

// const result = document.querySelector('#result');

const buttonRock = document.querySelector('#rock');
buttonRock.addEventListener('click', function() {
    playRounds("rock")
});

const buttonScissors = document.querySelector('#scissors');
buttonScissors.addEventListener('click', function() {
    playRounds("scissors")
});

const buttonPaper = document.querySelector('#paper');
buttonPaper.addEventListener('click', function() {
    playRounds("paper")
});
