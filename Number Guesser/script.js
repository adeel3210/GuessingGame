let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget(){
  return Math.floor(Math.random() * 9)
}

function compareGuesses(humanGuess,computerGuess,target){
  if(Math.abs(target - humanGuess) < Math.abs(target - computerGuess)){
    return true;
  }else if(Math.abs(target - humanGuess) > Math.abs(target - computerGuess)){
    return false;
  } else {
    return true;
  }
}

function updateScore(winner){
  if(winner === "human"){
    humanScore++;
  } else if (winner==="computer"){
    computerScore++;
  }
}

function advanceRound(){
  currentRoundNumber +=1;
}
