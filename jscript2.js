function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Step 3–6: Play the game
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  // Get human choice
  function getHumanChoice() {
    return prompt("Enter rock, paper, or scissors:");
  }

  // Play one round
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log(`It's a tie! Both chose ${humanChoice}.`);
      return;
    }

    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(
        `You win! ${humanChoice} beats ${computerChoice}.`
      );
    } else {
      computerScore++;
      console.log(
        `You lose! ${computerChoice} beats ${humanChoice}.`
      );
    }
  }

  // Play 5 rounds
  for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}`);

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    console.log(
      `Score -> Human: ${humanScore}, Computer: ${computerScore}`
    );
  }

  // Declare overall winner
  console.log("Final Score:");
  console.log(`Human: ${humanScore}`);
  console.log(`Computer: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (computerScore > humanScore) {
    console.log("Computer won the game!");
  } else {
    console.log("The game ended in a tie!");
  }
}

// Start the game
playGame();