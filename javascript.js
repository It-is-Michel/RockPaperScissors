// Returns a string: "rock", "paper" or "scissors"
function getComputerChoice() {
    let randomNumber = Math.random() * 3;
    // Depending on the number, return "rock", "paper" or "scissors"
    if (randomNumber <= 1){
        return "rock";
    } else if (randomNumber <= 2) {
        return "paper";
    } else {
        return "scissors";
    }
}
// Takes the user's choice
function getHumanChoice() {
    let humanChoice = prompt('Choose "rock", "paper" or "scissors".');
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}
// Returns the winner: "computer", "human", "tie"
function getWinner(computerChoice, humanChoice) {
    // Decide who wins
    if (computerChoice === humanChoice) {
        return "tie";
    } else if ((humanChoice === "rock" && computerChoice === "scissors")
            || (humanChoice === "paper" && computerChoice === "rock")
            || (humanChoice === "scissors" && computerChoice === "paper")) {
        return "human";
    } else {
        return "computer";
    }
}

function playGame () {
    let humanScore = 0;
    let computerScore = 0;
    // Play a round;
    // log the winner;
    // and incremenet the score of the winner.
    function playRound(computerChoice, humanChoice) {
        let winner = getWinner(computerChoice, humanChoice);
        // Log winner and increment winner score
        if (winner === "tie") {
            console.log(`TIE! Both said ${humanChoice}.`);
        } else if (winner === "human") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            humanScore++;
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            computerScore++;
        }
    }
    // Play 5 games
    for (let gameNum = 0; gameNum < 5; gameNum++){
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(computerChoice, humanChoice)
    }
    // Log computer and human scores
    console.log(`Computer: ${computerScore}
Human: ${humanScore}`);
}

playGame()