/*
we create a nodelist with all the buttons of a certain id.
The forEach loop assigns each one the same functionality
*/
const buttons = document.querySelectorAll("#btn");

const buttonsDiv = document.querySelector("#buttonsDiv");
const results = document.querySelector("#results");
const score = document.querySelector("#score");
let playerScore = 0;
let computerScore = 0;

//see callback function
buttons.forEach((btn) => {
  /*I've inserted an arrow function which calls playRound. 
   if I try to call playround itslef, i either can't pass the values or it runs automatically.
   For this reason it must be wrapped up in a callback function*/
  btn.addEventListener("click", () => {
    playRound(btn.value);
  });
});

//btn.addEventListener("click", playRound);

/*Function which radomly selects computer's choice of weapon*/
function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  let computerChoice;

  if (num == 0) {
    computerChoice = "Rock";
  } else if (num == 1) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }

  return computerChoice;
}

/*Function which compares players choices and determines whether player wins or loses*/
function playRound(value) {
  let playerSelection = value;
  console.log(playerSelection);
  let computerSelection = getComputerChoice();
  /*converts all input to lowercase*/
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  /*If player chooses rock*/
  if (playerSelection === "rock" && computerSelection === "scissors") {
    results.textContent = "Rock breaks scissors.";
    playerScore++;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    results.textContent = "Paper covers rock.";
    computerScore++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    /*If player chooses paper*/
    results.textContent = "Paper covers rock.";
    playerScore++;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    results.textContent = "Scissors cuts paper.";
    computerScore++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    /*If player chooses scissors*/
    results.textContent = "Scissors cuts paper.";
    playerScore++;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    results.textContent = "Rock breaks scissors.";
    computerScore++;
  } else if (playerSelection === computerSelection) {
    /*If player and computer choose the same weapon*/
    results.textContent = "It's a tie! You've both selected the same.";
  } else {
    results.textContent = "Invalid input";
  }
  //displaying the score of each player
  score.textContent = "Player:" + playerScore + " Computer:" + computerScore;

  if (playerScore == 5 || computerScore == 5) {
    buttonsDiv.style.visibility = "hidden";
    if (playerScore == 5) {
      results.textContent = "You win!";
    } else {
      results.textContent = "Computer wins!";
    }
  }
}
