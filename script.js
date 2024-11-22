console.log("Hello World")

const choice = ["rock", "paper", "scissors"]

function getComputerChoice() {
    return choice[Math.floor(Math.random() * 3)]
}

console.log(getComputerChoice())

function getHumanChoice() {
    let humanChoice;

    do {
        humanChoice = prompt("Choose an option: Rock (1), Paper (2), or Scissors (3)");
    } while (humanChoice !== "1" && humanChoice !== "2" && humanChoice !== "3");

    return choice[parseInt(humanChoice) - 1];
}

console.log(getHumanChoice())