function getComputerChoice() {
   const choices = ["rock", "paper", "scissors"]; 
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}   

console.log(getComputerChoice())

function getHumanChoice() {
    let humanScore = 0;
    let computerScore = 0;
    let userInput = prompt("Enter rock, paper, or scissors:");
    
    if (userInput === null) {
    return "You cancelled the game.";
  }

  let choice = userInput.toLowerCase().trim();

  if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
    return choice;
  } else {
    alert("Invalid choice! Please type exactly 'rock', 'paper', or 'scissors'.");
    return getHumanChoice(); 
    }   
}

console.log(getHumanChoice())

function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
 
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } 
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } 
    else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }

    function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        } else {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        }
    }

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    console.log(`Final Score - Human: ${humanScore}, Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer won the game!");
    } else {
        console.log("The game is a tie!");
    }
}

playGame();     
} 