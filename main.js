const buttons = document.querySelectorAll('.button');
const newGame = document.querySelector('.game');
let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => button.addEventListener('click', buttonClick));
newGame.addEventListener('click', restart);

function buttonClick() {
  const computerAnswer = randomizeCompAnswer();
  const userAnswer = this.value;

  if (computerAnswer == userAnswer) {
    console.log('its a tie ' + computerAnswer + ' ' + userAnswer);
  } else if (computerAnswer == 'rock' && userAnswer == 'paper' 
    || computerAnswer == 'paper' && userAnswer == 'scissors'
    || computerAnswer == 'scissors' && userAnswer == 'rock') {
      console.log('Player Wins!');
      console.log('Player Score = ' + ++playerScore);
  } else {
      console.log('Computer Wins!');
      console.log('Computer Score = ' + ++computerScore);
  }
  if (playerScore == 5 || computerScore == 5) {
    console.log('Game Over');
    playerScore = 0;
    computerScore = 0;
    buttons.forEach((button) => button.removeEventListener('click', buttonClick));
  }
}

function restart() {
  buttons.forEach((button) => button.addEventListener('click', buttonClick));
}

/* This function generates a random answer from the opponent side. */
function randomizeCompAnswer() {
  let thing = ['rock', 'paper', 'scissors']
  return thing[Math.floor(Math.random()*thing.length)] 
}