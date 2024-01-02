//DOM
/*
we create a nodelist with all the buttons of a certain id.
The forEach loop assigns each one the same functionality
*/
const buttons = document.querySelectorAll("#btn");

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
  console.log("test");

  let playerSelection = value;
  console.log(playerSelection);
  let computerSelection = getComputerChoice();
  /*converts all input to lowercase*/
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  /*If player chooses rock*/
  if (playerSelection === "rock" && computerSelection === "scissors") {
    alert("You win! Rock breaks scissors.");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    alert("You lose! Paper covers rock.");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    /*If player chooses paper*/
    alert("You win! Paper covers rock.");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    alert("You lose! Scissors cuts paper.");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    /*If player chooses scissors*/
    alert("You win! Scissors cuts paper.");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    alert("You lose! Rock breaks scissors.");
  } else if (playerSelection === computerSelection) {
    /*If player and computer choose the same weapon*/
    alert("It's a tie! You've both selected the same.");
  } else {
    alert("Invalid input");
  }
}
