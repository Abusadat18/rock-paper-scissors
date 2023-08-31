let userScore = 0; 
let computerScore = 0; 

const choiceBtns = document.querySelectorAll(".choice");
const computerChoiceResult = document.querySelector(".comp-choice");
const resultDiv = document.querySelector(".result");
const userScoreResult = document.querySelector(".user-score");
const compScoreResult = document.querySelector(".computer-score");

choiceBtns.forEach((btn) => {
        btn.addEventListener("click", playRound);
})

function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    const randomNumber = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomNumber];
    computerChoiceResult.textContent = `Computer chose ${computerChoice}`;
    return computerChoice;
}

function playRound(e) { 
        const userChoice = e.target.dataset.key;
        const computerChoice = getComputerChoice();
        let scoreValue = checkScore(userChoice, computerChoice);

        if (scoreValue === "user") {
            userScore++;
        }
        else if (scoreValue === "computer") {
            computerScore++;
        }
        showScore(userScore, computerScore);
}

function showScore(userScore, computerScore) {
    userScoreResult.textContent = `User score is: ${userScore}`;
    compScoreResult.textContent = `Computer score is: ${computerScore}`;
    getWinner(userScore, computerScore);
}

function checkScore(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        displayResult("tie");
    }
    else if ((userChoice === "rock" && computerChoice === "scissor") || (userChoice === "scissor" && computerChoice === "paper") || (userChoice === "paper" && computerChoice === "rock")) {
        displayResult(`${userChoice} beats ${computerChoice}`)
        return "user";
    }
    else if ((userChoice === "scissor" && computerChoice === "rock") || (userChoice === "paper" && computerChoice === "scissor") || (userChoice === "rock" && computerChoice === "paper")) {
        displayResult(`${computerChoice} beats ${userChoice}`);
        return "computer"
    }
}

function getWinner(userScore, computerScore) {
    if (userScore === 5) {
        removeEvtListner();
        displayResult("You Win")
    }
    else if (computerScore === 5) {
        removeEvtListner();
        displayResult("Computer Wins");
    }
}

function removeEvtListner() {
    choiceBtns.forEach((btn) => {
        btn.removeEventListener("click", playRound);
    })
}

function displayResult(text) {
    resultDiv.textContent = text;
}



