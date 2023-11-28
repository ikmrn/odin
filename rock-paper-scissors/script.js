let validOptions = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * 3);
  console.log(randomIndex);
  let computerChoice = validOptions[randomIndex];
  console.log(computerChoice);
}

getComputerChoice();

function checkInput(input) {
  if (typeof input !== "string") {
    return "Invalid input. Please provide a string.";
  }

  const inputCap = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
  if (validOptions.includes(inputCap)) {
    return inputCap
  }
    return "Choose from Rock, Paper or Scissors.";

}

let playerSelection = prompt("Choice your sign!", "");
console.log(playerSelection);

let test = checkInput(playerSelection)
console.log(test)