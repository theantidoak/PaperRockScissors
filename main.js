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
  }
  
  // Transform Weapons to middle and make big
  icons.forEach(icon => icon.id == this.value ? icon.classList.add('big-active') : null);
  emojis.forEach(emoji => emoji.id == computerAnswer ? emoji.classList.add('big-emoji') : null);

  // Move Weapons towards each other to Fight
  setTimeout(() => {
    icons.forEach(icon => icon.id == this.value ? icon.style.marginTop = '10rem' : null);
    emojis.forEach(emoji => emoji.id == computerAnswer ? emoji.style.marginTop = '-10rem' : null);
  }, 500);

  //End Round
  setTimeout(() => {
    // Remove Transform
    icons.forEach(icon => icon.style.marginTop = '0');
    emojis.forEach(emoji => emoji.style.marginTop = '0');
    emojis.forEach(emoji => emoji.classList.remove('big-emoji'));
    icons.forEach(icon => icon.classList.remove('big-active'));
    
    // Display Result Message
    if (playerScore == 5 || computerScore == 5) {
      if (playerScore === 5) {
        header.textContent = 'Congratulations! You Win!';
      } else {
        header.textContent = 'Computer Wins. Better Luck Next Time.';
      }
      playerScore = 0;
      computerScore = 0;
      buttons.forEach((button) => button.removeEventListener('click', buttonClick));
      newGame.style.transform = 'translateY(0)';
    }
    
    // Replace event listener
    buttons.forEach((button) => button.addEventListener('click', buttonClick));

    // Track Score
    if (winner) {
      icons.forEach(icon => icon.style.transitionDelay = '.3s');
      // Get left side icon
      let iconChild = this.cloneNode(true).firstChild;
      for (i = 0; i < tally.length; i++) {
        if (tally[3].firstChild) {
          tally[4].appendChild(iconChild);
          return;
        } else if (tally[2].firstChild) {
          tally[3].appendChild(iconChild);
          return;
        } else if (tally[1].firstChild) {
          tally[2].appendChild(iconChild);
          return;
        } else if (tally[0].firstChild) {
          tally[1].appendChild(iconChild);
          return;
        } else {
          tally[0].appendChild(iconChild);
          return;
        }
        }
    } else if (!winner && computerAnswer != userAnswer) {
      emojis.forEach(emoji => emoji.style.transitionDelay = '.3s');
      // Get right side icon
      let emojiArray = [...emojis].filter(emoji => {
        if (emoji.id == computerAnswer) {
          return emoji;
        }})
      let emojiChild = emojiArray[0].cloneNode(true).firstChild;
      for (i = 0; i < tallyR.length; i++) {
        if (tallyR[3].firstChild) {
          tallyR[4].appendChild(emojiChild);
          return;
        } else if (tallyR[2].firstChild) {
          tallyR[3].appendChild(emojiChild);
          return;
        } else if (tallyR[1].firstChild) {
          tallyR[2].appendChild(emojiChild);
          return;
        } else if (tallyR[0].firstChild) {
          tallyR[1].appendChild(emojiChild);
          return;
        } else {
          tallyR[0].appendChild(emojiChild);
          return;
        }
      }}
    }, 1200)
      
  // Remove Transition Delay
  emojis.forEach(emoji => emoji.style.transitionDelay = '0s');
  icons.forEach(icon => icon.style.transitionDelay = '0s');
}

// Restart Button to reset game
function restart() {
  header.textContent = 'Choose Your Weapon';
  newGame.style.transform = 'translateY(1000%)';
  buttons.forEach((button) => button.addEventListener('click', buttonClick));
  icons.forEach(icon => icon.classList.remove('big-active'));
  emojis.forEach(emoji => emoji.classList.remove('big-emoji'));
  tally.forEach(tallyl => {
    if (tallyl.firstChild) {
      tallyl.removeChild(tallyl.firstChild);
    }
  tallyR.forEach(tallyr => {
    if (tallyr.firstChild) {
      tallyr.removeChild(tallyr.firstChild);
    }
  })})
}

//Generate a random answer for the computer
function randomizeCompAnswer() {
  let thing = ['rock', 'paper', 'scissors']
  return thing[Math.floor(Math.random()*thing.length)] 
}