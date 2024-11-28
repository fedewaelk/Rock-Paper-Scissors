let humanScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];
const body = document.querySelector("body");

// results container
const results = document.createElement("div");
body.appendChild(results);

results.style.display = "flex";
results.style.justifyContent = "center";
results.style.border = "solid";
results.style.height = "20px"
results.style.width = "500px"
results.style.margin = "20px auto"

// Container
const container = document.createElement("div");
body.appendChild(container);

container.style.display = "flex";
container.style.justifyContent = "center";
container.style.gap = "10px";
container.style.marginTop = "20px";

// buttons
const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";

[rockButton, paperButton, scissorsButton].forEach((button) => {
    button.style.padding = "10px 20px";
    button.style.fontSize = "16px";
    button.style.cursor = "pointer";
    });

container.appendChild(rockButton);
container.appendChild(paperButton);
container.appendChild(scissorsButton);

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        results.textContent = `You win! ${humanChoice} beats ${computerChoice}. Score: Human ${humanScore} - Computer ${computerScore}`;
    } else if (humanChoice === computerChoice) {
        results.textContent = `It's a tie! Both chose ${humanChoice}. Score: Human ${humanScore} - Computer ${computerScore}`;
    } else {
        computerScore++;
        results.textContent = `You lose! ${computerChoice} beats ${humanChoice}. Score: Human ${humanScore} - Computer ${computerScore}`;
    }

    checkWinner();
}

function checkWinner() {
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            results.textContent = `You win the game! Final score: Human ${humanScore} - Computer ${computerScore}`;
        } else {
            results.textContent = `You lose the game! Final score: Human ${humanScore} - Computer ${computerScore}`;
        }

        // buttons deactivation
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
}

rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissorsButton.addEventListener("click", () => playRound("scissors"));
