// ALGO

// Input from user
function getUserChoice() {
    let userChoice = prompt("Choose either Rock | Paper | Scissor");
    userChoice = userChoice.toLowerCase();
    return userChoice;
}

// Random input from computer
function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    const randomNumber = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomNumber];
    return computerChoice;
}

function startGame() {
    let userScore = 0; 
    let computerScore = 0; 

    while (userScore < 5 && computerScore < 5) {
        const userChoice = getUserChoice();
        const computerChoice = getComputerChoice();
        let scoreValue = checkScore(userChoice, computerChoice);

        if (scoreValue === "user") {
            userScore++;
        }
        else if (scoreValue === "computer") {
            computerScore++;
        }

        showScore(userScore, computerScore);
        getWinner(userScore, computerScore);
    }
}

function showScore(userScore, computerScore) {
    console.log(`User score is: ${userScore}`);
    console.log(`Computer score is: ${computerScore}`);
}

function checkScore(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        console.log("tie");
    }
    else if ((userChoice === "rock" && computerChoice === "scissor") || (userChoice === "scissor" && computerChoice === "paper") || (userChoice === "paper" && computerChoice === "rock")) {
        console.log(`You Win! ${userChoice} beats ${computerChoice}`);
        return "user";
    }
    else if ((userChoice === "scissor" && computerChoice === "rock") || (userChoice === "paper" && computerChoice === "scissor") || (userChoice === "rock" && computerChoice === "paper")) {
        console.log(`You Lose! ${computerChoice} beats ${userChoice}`);
        return "computer"
    }
}

function getWinner(userScore, computerScore) {
    if (userScore === 5) {
        console.log("User Wins")
    }
    else if (computerScore === 5) {
        console.log("Computer Wins");
    }
}

// START THE GAME
startGame();



