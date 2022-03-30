const buttons = document.querySelectorAll('.button');
const newGame = document.querySelector('.game');
const icons = document.querySelectorAll('.icon');
const emojis = document.querySelectorAll('.emoji');
let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => button.addEventListener('click', buttonClick));
newGame.addEventListener('click', restart);


function buttonClick() {
  emojis.forEach(emoji => emoji.classList.remove('big-emoji'));
  icons.forEach(icon => icon.classList.remove('big-active'));
  const computerAnswer = randomizeCompAnswer();
  const userAnswer = this.value;
  const winner = computerAnswer == 'rock' && userAnswer == 'paper' 
  || computerAnswer == 'paper' && userAnswer == 'scissors'
  || computerAnswer == 'scissors' && userAnswer == 'rock';

  if (computerAnswer == userAnswer) {
    console.log('its a tie ' + computerAnswer + ' ' + userAnswer);
  } else if (winner) {
    console.log('Player Wins!');
    console.log('Player Score = ' + ++playerScore);
  } else {
    console.log('Computer Wins!');
    console.log('Computer Score = ' + ++computerScore);
    }
    icons.forEach(icon => icon.id == this.value ? icon.classList.add('big-active') : null);
    emojis.forEach(emoji => emoji.id == computerAnswer ? emoji.classList.add('big-emoji') : null);

  if (playerScore == 5 || computerScore == 5) {
    console.log('Game Over');
    playerScore = 0;
    computerScore = 0;
    buttons.forEach((button) => button.removeEventListener('click', buttonClick));
  }
  setTimeout(() => {
    icons.forEach(icon => icon.id == this.value ? icon.style.marginTop = '10rem' : null);
    emojis.forEach(emoji => emoji.id == computerAnswer ? emoji.style.marginTop = '-10rem' : null);
  }, 1500);
  setTimeout(() => {
    icons.forEach(icon => icon.style.marginTop = '0');
    emojis.forEach(emoji => emoji.style.marginTop = '0');
    if (winner) {
      emojis.forEach(emoji => emoji.classList.remove('big-emoji'));
    } else {
      icons.forEach(icon => icon.classList.remove('big-active'));
    }
  }, 2500)
}

function restart() {
  buttons.forEach((button) => button.addEventListener('click', buttonClick));
  icons.forEach(icon => icon.classList.remove('big-active'));
  emojis.forEach(emoji => emoji.classList.remove('big-emoji'));
}

/* This function generates a random answer from the opponent side. */
function randomizeCompAnswer() {
  let thing = ['rock', 'paper', 'scissors']
  return thing[Math.floor(Math.random()*thing.length)] 
}