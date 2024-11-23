console.log("Hello World")

let humanScore = 0;
let computerScore = 0;

const choice = ["rock", "paper", "scissors"]

//function for the computer choice
function getComputerChoice() {    
    return choice[Math.floor(Math.random() * 3)]
}

console.log(getComputerChoice())

//function for the player choice
function getHumanChoice() {     
    let humanChoice;

    do {
        humanChoice = prompt(`Your score: ${humanScore}     Computer score: ${computerScore}   \nChoose an option: Rock (1), Paper (2), or Scissors (3)`);
    } while (humanChoice !== "1" && humanChoice !== "2" && humanChoice !== "3");

    return choice[parseInt(humanChoice) - 1];
}

//Function to determine who wins
function playRound(humanChoice, computerChoice) {
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        alert(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore ++;
        console.log(humanScore)
    } else if (humanChoice === computerChoice) {
        alert(`It's a tie! Both chose ${humanChoice}`);
    } else {
        alert(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore ++;
    }
}

//Loop to keep playing

while (true) {

    if (humanScore === 3 || computerScore === 3) {
        if (humanScore > computerScore) {
            alert(`You win the game! \nFinal score: Human ${humanScore} - Computer ${computerScore}`);
        } else {
            alert(`You loose the game! \nFinal score: Human ${humanScore} - Computer ${computerScore}`);
        }
        break;
    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    console.log(`Current score: Human ${humanScore} - Computer ${computerScore}`);
}

