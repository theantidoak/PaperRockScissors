const buttons = document.querySelectorAll('.button');
const newGame = document.querySelector('.game');
const icons = document.querySelectorAll('.icon');
const emojis = document.querySelectorAll('.emoji');
let playerScore = 0;
let computerScore = 0;
const tally = document.querySelectorAll('.L');
const tallyR = document.querySelectorAll('.R');
const header = document.querySelector('.instructions h1');

buttons.forEach((button) => button.addEventListener('click', buttonClick));
newGame.addEventListener('click', restart);

// Play Game
function buttonClick() {
  
  // Remove event listener to prevent playing too fast
  buttons.forEach((button) => button.removeEventListener('click', buttonClick));
  const computerAnswer = randomizeCompAnswer();
  const userAnswer = this.value;
  const winner = computerAnswer == 'rock' && userAnswer == 'paper' 
  || computerAnswer == 'paper' && userAnswer == 'scissors'
  || computerAnswer == 'scissors' && userAnswer == 'rock';
  
  // Track Score
  if (winner) {
    ++playerScore;
  } else if (!winner && computerAnswer != userAnswer) {
    ++computerScore;
  };
  
  // Transform Weapons to middle and make big
  icons.forEach(icon => icon.id == this.value ? icon.classList.add('big-active') : null);
  emojis.forEach(emoji => emoji.id == computerAnswer ? emoji.classList.add('big-emoji') : null);

  // Move Weapons towards each other to Fight
  setTimeout(() => {
    icons.forEach(icon => icon.id == this.value ? icon.style.marginTop = '13rem' : null);
    emojis.forEach(emoji => emoji.id == computerAnswer ? emoji.style.marginTop = '-13rem' : null);
  }, 500);

  // End Round
  setTimeout(() => {
    // Remove Transform
    icons.forEach(icon => icon.style.marginTop = '0');
    emojis.forEach(emoji => emoji.style.marginTop = '0');
    emojis.forEach(emoji => emoji.classList.remove('big-emoji'));
    icons.forEach(icon => icon.classList.remove('big-active'));

    // Replace event listener
    buttons.forEach((button) => button.addEventListener('click', buttonClick));

    // Track Score
    if (winner) {
      icons.forEach(icon => icon.style.transitionDelay = '.3s');
      let iconChild = this.cloneNode(true).firstChild;
      for (i = 0; i < tally.length + 1; i++) {
        if (playerScore == i) {
          tally[i-1].appendChild(iconChild);
          tally[i-1].style.backgroundColor = '#FCE77D';
        }
        }
    } else if (!winner && computerAnswer != userAnswer) {
      emojis.forEach(emoji => emoji.style.transitionDelay = '.3s');
      let emojiChild = [...emojis].filter(emoji => emoji.id == computerAnswer ? emoji : null)[0].cloneNode(true).firstChild;
      for (i = 0; i < tallyR.length + 1; i++) {
        if (computerScore == i) {
          tallyR[i-1].appendChild(emojiChild);
          tallyR[i-1].style.backgroundColor = '#FCE77D';
        }
      }};

      // Display Result Message
    if (playerScore == 5 || computerScore == 5) {
      playerScore === 5 ? header.textContent = 'Congratulations! You Win!' 
      : header.textContent = 'Computer Wins. Better Luck Next Time.';

      playerScore = 0;
      computerScore = 0;
      buttons.forEach((button) => button.removeEventListener('click', buttonClick));
      newGame.style.transform = 'translateX(0)';
    }
    }, 1200);
      
  // Remove Transition Delay
  emojis.forEach(emoji => emoji.style.transitionDelay = '0s');
  icons.forEach(icon => icon.style.transitionDelay = '0s');
}

// Restart Button to reset game
function restart() {
  header.textContent = 'Choose Your Weapon';
  newGame.style.transform = 'translateX(700%)';
  buttons.forEach((button) => button.addEventListener('click', buttonClick));
  icons.forEach(icon => icon.classList.remove('big-active'));
  emojis.forEach(emoji => emoji.classList.remove('big-emoji'));
  tally.forEach(tallyl => tallyl.firstChild ? tallyl.removeChild(tallyl.firstChild) : null);
  tallyR.forEach(tallyr => tallyr.firstChild ? tallyr.removeChild(tallyr.firstChild) : null);
  tally.forEach(tallyl => tallyl.style.backgroundColor = 'rgb(36, 147, 221)');
  tallyR.forEach(tallyr => tallyr.style.backgroundColor = 'rgb(36, 147, 221)');
}

//Generate a random answer for the computer
function randomizeCompAnswer() {
  let thing = ['rock', 'paper', 'scissors']
  return thing[Math.floor(Math.random()*thing.length)] 
}
