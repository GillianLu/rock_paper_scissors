//PSUEDOCODE

// rock paper scissors 
// computer vs. human 

//game is played round by round = function playRound 
// function called getComputerChoice 
// return one of the ff: [rock, paper, scissors]
// use Math.random to get a number from 0-2, which corresponds to the place of the list items

//function getHumanChoice 
//window.prompt to get the user's input (rock, paper,scissors)


//scoring
// humanScore & computerScore 


//CODE Below

let gameChoices = ['rock', 'paper', 'scissors'];
let winner = document.getElementById('winner');
let gameResults = document.getElementById('gameResults');
const rock = document.getElementById('rockBtn');
const paper = document.getElementById('paperBtn');
const scissors = document.getElementById('scissorsBtn');
const gameContainer = document.getElementById('game-container');
const scoreContainer = document.getElementById('score-container');
const instructionsContainer = document.getElementById('instructions-container');
const playButton = document.getElementById('playButton');
const submitButton = document.getElementById('humanChoiceSubmit');
const computerScoreDisplay = document.getElementById('computerRealScore');
const humanScoreDisplay = document.getElementById('humanRealScore');
const gameWinner = document.getElementById('overallWinner');
const gameReset = document.getElementById('gameReset');

let humanScore = 0; 
let computerScore = 0;
let humanChoice = '';

gameReset.addEventListener('click', () => {
  resetGame();
})

function resetGame(){
  humanScore = 0;
  computerScore = 0;
  humanScoreDisplay.textContent = humanScore;
  computerScoreDisplay.textContent = computerScore;
  gameWinner.textContent = '';
  gameResults.textContent = '';
  winner.textContent = '';
  rock.style.backgroundColor = '';
  paper.style.backgroundColor = '';
  scissors.style.backgroundColor = '';
  submitButton.style.display = 'block';
  gameReset.style.display = 'none';
  gameContainer.style.display = 'none';
  scoreContainer.style.display = 'none';
  instructionsContainer.style.display = 'flex';

}

function getComputerChoice() {
 let computerChoice = Math.floor(Math.random() * 3);
 return gameChoices[computerChoice];
}

function getHumanChoice() {

 rock.addEventListener('click', () => {
  humanChoice = 'rock';
  rock.style.backgroundColor = 'lightblue';
  paper.style.backgroundColor = '';
  scissors.style.backgroundColor = '';
 }); 

 paper.addEventListener('click', () => {
  humanChoice = 'paper';
  rock.style.backgroundColor = '';
  paper.style.backgroundColor = 'lightblue';
  scissors.style.backgroundColor = '';
  
 }); 

 scissors.addEventListener('click', () => {
  humanChoice = 'scissors';
  rock.style.backgroundColor = '';
  paper.style.backgroundColor = '';
  scissors.style.backgroundColor = 'lightblue';
 }); 

 return humanChoice;
}

function playRound(computerSelection, humanSelection) {
 gameResults.textContent = `${computerSelection} vs. ${humanSelection}`;

 //GAME MECHANICS
 if(computerSelection === humanSelection) {
  winner.textContent = 'TIE!';
 } else if (

  (computerSelection === 'rock' && humanSelection === 'scissors') ||
  (computerSelection === 'scissors' && humanSelection === 'paper') || 
  (computerSelection === 'paper' && humanSelection == 'rock') 

 ){
  computerScore += 1;
  computerScoreDisplay.textContent = computerScore;
  winner.textContent = 'Computer wins this round!';
 } else {
   humanScore += 1; 
   humanScoreDisplay.textContent = humanScore;
   winner.textContent = 'Human wins this round!';
  }

  //SCORING
  if(computerScore == 3 && computerScore > humanScore) {
    gameWinner.style.display = 'block';
    gameWinner.textContent = 'Computer WINS!';
    submitButton.style.display = 'none';
    gameReset.style.display = 'block';

  } else if (humanScore == 3 && humanScore > computerScore) {
    gameWinner.style.display = 'block';
    gameWinner.textContent = 'Human WINS!'
    submitButton.style.display = 'none';
    gameReset.style.display = 'block';
  }


}

playButton.addEventListener('click',() => {
 gameContainer.style.display = 'flex';
 scoreContainer.style.display = 'flex';
 instructionsContainer.style.display = 'none';
})

submitButton.addEventListener('click', () => {
 let computerSelection = getComputerChoice();
 let humanSelection =  getHumanChoice();
 playRound(computerSelection, humanSelection);
});

getHumanChoice();