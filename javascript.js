// returns a string: "rock", "paper" or "scissors"
function getComputerChoice() {
    let randomNumber = Math.random() * 3;
    // depending on the number, return "rock", "paper" or "scissors"
    if (randomNumber <= 1){
        return "rock";
    } else if (randomNumber <= 2) {
        return "paper";
    } else {
        return "scissors";
    }
}
// takes the user's choice
function getHumanChoice() {
    let humanChoice = prompt('Choose "rock", "paper" or "scissors".');
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}
// returns the winner: "computer", "human", "tie"
function getWinner(computerChoice, humanChoice) {
    // decide who wins
    if (computerChoice === humanChoice) {
        return "tie";
    } else if ((computerChoice === "rock" && humanChoice === "scissors")
            || (computerChoice === "paper" && humanChoice === "rock")
            || (computerChoice === "scissors" && humanChoice === "paper")) {
        return "computer";
    } else {
        return "human";
    }
}

let humanScore = 0;
let computerScore = 0;