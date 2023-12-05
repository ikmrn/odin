// Add valid options
const validOptions = ["Rock", "Paper", "Scissors"];

// Get computer choice
function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

// Check input function
function checkInput(input) {
  if (typeof input !== "string") {
    return "Invalid input. Please provide a string.🎃";
  }

  const inputCap = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
  if (validOptions.includes(inputCap)) {
    return inputCap;
  }
  console.log("Choose from Rock, Paper, or Scissors.");
  return checkInput(prompt("Choose from Rock, Paper, or Scissors.", ""));
}

// Get player choice
function getPlayerChoice(n = 0) {
  if (n) {
    let playerSelection = checkInput(
      prompt("Tie, Let's replay the round. Choose your sign!", "")
    );
    return validOptions.indexOf(playerSelection);
  } else {
    let playerSelection = checkInput(prompt("Choose your sign!", ""));
    return validOptions.indexOf(playerSelection);
  }
}

// Play the game
function playRound(playerChoice, computerChoice) {
  // Calculate game result
  let gameResult = (playerChoice - computerChoice + 3) % 3;
  console.log(`Game result: ${gameResult}`);

  // Determine the winner
  //
  if (gameResult === 0) {
    return playRound(getPlayerChoice(1), getComputerChoice());
  } else if (gameResult === 1) {
    return {
      message: `You Win! ${validOptions[playerChoice]} beats ${validOptions[computerChoice]}`,
      result: 1,
    };
  } else {
    return {
      message: `You Lose! ${validOptions[computerChoice]} beats ${validOptions[playerChoice]}`,
      result: -1,
    };
  }
}

function game(numberOfGames) {
  let gameResult = 0;
  for (let i = 0; i < 5; i++) {
    let round = playRound(getPlayerChoice(), getComputerChoice());
    let roundResult = round.result;
    gameResult += roundResult;
    console.log(gameResult);
  }
}

game(5);
