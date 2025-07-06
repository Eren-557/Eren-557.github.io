const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;


function playGame(playerChoice) {
    
    const computerChoice = choices[Math.floor(Math.random() * 3)] 
    let result = "";
    
    if (playerChoice === computerChoice) {
        result = "IT's A TIE"
    }

    else{
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN": "YOU LOOSE";
                break;
        
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN": "YOU LOOSE";
                break;

            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN": "YOU LOOSE";
                break;

        }

        playerDisplay.textContent = `PLAYER: ${playerChoice}`;
        computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
        resultDisplay.textContent = result;

        resultDisplay.classList.remove("greenText", "redText");

        switch (result) {
            case "YOU WIN":
                playerScore++;
                resultDisplay.classList.add("greenText");
                playerScoreDisplay.textContent = playerScore;
                break;
        
            case "YOU LOOSE":
                computerScore++;
                resultDisplay.classList.add("redText");
                computerScoreDisplay.textContent = computerScore;
                break;
        }
    }

}