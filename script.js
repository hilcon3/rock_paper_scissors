
function getComputerChoice(){
  let computerMove = Math.floor(Math.random()*3) + 1;

  if(computerMove === 1){
    return "Rock";
   } else if (computerMove == 2){
    return "Paper";
   } else {
    return "Scissors";
   }

}

function playRound(playerSelection, computerSelection){

  //Tie game
  if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
    return -1;
  } 

  if (playerSelection.toLowerCase() === "rock"){
    if(computerSelection.toLowerCase() === "paper"){
      return 0;
    } else if (computerSelection.toLowerCase() === "scissors"){
      return 1;
    }
  } 
  
  if (playerSelection.toLowerCase() === "paper") {

    if (computerSelection.toLowerCase() === "rock"){
      return 1;
    } else if (computerSelection.toLowerCase() === "scissors"){
      return 0;
    }

  }
  
  if (playerSelection.toLowerCase() === "scissors") {

    if (computerSelection.toLowerCase() === "paper"){
      return 1;
    } else if (computerSelection.toLowerCase() === "rock"){
      return 0;
    }
  }
}

function game(){
  let playerScore = 0;
  //repeat the game 5 times
  for(let i = 0; i < 5; i++){
    playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    computerChoice = getComputerChoice();
    console.log(`${playerChoice}   ${computerChoice}`);


    const playerChoice_formatted = playerChoice.charAt(0).toUpperCase().concat(playerChoice.substr(1));

    const result = playRound(playerChoice, computerChoice);

    if(result === 1){
      playerScore++;
      console.log(`You win! ${playerChoice_formatted} beats ${computerChoice}`);
    } else if (result === 0){
      console.log(`You lose! ${computerChoice} beats ${playerChoice_formatted}`);
    } else if(result === -1){
      console.log("It's a tie!");
    }
  }
  console.log(`Score: ${playerScore}`);
}

game();
