let humanScore = 0;
let computerScore = 0;

const roundResult = document.querySelector("#roundResult");
const score = document.querySelector("#score");
const winner = document.querySelector("#winner");

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

function playRound(humanChoice) {
  // Stop game if someone already won
  if (humanScore === 5 || computerScore === 5) return;

  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    roundResult.textContent =
      `It's a tie! Both chose ${humanChoice}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    roundResult.textContent =
      `You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    roundResult.textContent =
      `You lose! ${computerChoice} beats ${humanChoice}.`;
  }

  score.textContent =
    `Human: ${humanScore} | Computer: ${computerScore}`;

  if (humanScore === 5) {
    winner.textContent = "🎉 You won the game!";
  } else if (computerScore === 5) {
    winner.textContent = "💻 Computer won the game!";
  }
}

// Button event listeners
document
  .querySelector("#rock")
  .addEventListener("click", () => playRound("rock"));

document
  .querySelector("#paper")
  .addEventListener("click", () => playRound("paper"));

document
  .querySelector("#scissors")
  .addEventListener("click", () => playRound("scissors"));