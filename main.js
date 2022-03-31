const buttons = document.querySelectorAll('.button');
const newGame = document.querySelector('.game');
const icons = document.querySelectorAll('.icon');
const emojis = document.querySelectorAll('.emoji');
let playerScore = 0;
let computerScore = 0;
const tally = document.querySelectorAll('.L');
const tallyR = document.querySelectorAll('.R');
const header = document.querySelector('.instructions h1');

<<<<<<< HEAD
let para = document.querySelector('.pp');
let para2 = document.querySelector('.pc');
let para3 = document.querySelector('.pd');
let gameButton = document.querySelector('.game');
gameButton.addEventListener('click', playGame);
let element = document.getElementById("newLine");
=======
buttons.forEach((button) => button.addEventListener('click', buttonClick));
newGame.addEventListener('click', restart);
>>>>>>> rps-ui

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
    icons.forEach(icon => icon.id == this.value ? icon.style.marginTop = '10rem' : null);
    emojis.forEach(emoji => emoji.id == computerAnswer ? emoji.style.marginTop = '-10rem' : null);
  }, 500);

<<<<<<< HEAD
  playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();

  if (playerSelection === 'rock' && computerSelection === 'paper' ||
  playerSelection === 'scissors' && computerSelection === 'rock' ||
  playerSelection === 'paper' && computerSelection === 'scissors') {
    let result =
      playerSelection === 'rock' && computerSelection === 'paper' ?
      "You Lose! Paper beats Rock... <br>" :
      playerSelection === 'paper' && computerSelection === 'scissors' ?
      "You Lose! Scissors beats Paper... <br>" :
      playerSelection === 'scissors' && computerSelection === 'rock' ?
      "You Lose! Rock beats Scissors... <br>" :
      null;
    element.innerHTML += result;
    updateScore(result);
  } else if (playerSelection === 'paper' && computerSelection === 'rock' ||
  playerSelection === 'rock' && computerSelection === 'scissors' ||
  playerSelection === 'scissors' && computerSelection === 'paper') {
    let result =
      playerSelection === 'paper' && computerSelection === 'rock' ?
      "You Win! Paper beats Rock... <br>" :
      playerSelection === 'rock' && computerSelection === 'scissors' ?
      "You Win! Rock beats Scissors... <br>" :
      playerSelection === 'scissors' && computerSelection === 'paper' ?
      "You Win! Scissors beats Paper... <br>" :
      null;
    element.innerHTML += result;
    updateScore(result);
  } else if (playerSelection === computerSelection) {
    let result = playerSelection === 'rock' && computerSelection === 'rock' ? 
    "It's a ROCK tie... <br>" : playerSelection === 'paper' && computerSelection === 'paper' ?
    "It's a PAPER tie... <br>" : playerSelection === 'scissors' && computerSelection === 'scissors' ?
    "It's a SCISSORS tie... <br>" : null;
    element.innerHTML += result;
    updateScore(result);
  } else { 
    let result = `That's not how you play the game. 
      '${playerSelection}' is not an answer. Point for Computer... <br>`;
    element.innerHTML += result;
    updateScore(result);
  };
}
=======
  // End Round
  setTimeout(() => {
    // Remove Transform
    icons.forEach(icon => icon.style.marginTop = '0');
    emojis.forEach(emoji => emoji.style.marginTop = '0');
    emojis.forEach(emoji => emoji.classList.remove('big-emoji'));
    icons.forEach(icon => icon.classList.remove('big-active'));

    // Replace event listener
    buttons.forEach((button) => button.addEventListener('click', buttonClick));
>>>>>>> rps-ui

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
      newGame.style.transform = 'translateY(0)';
    }
    }, 1200);
      
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
  tally.forEach(tallyl => tallyl.firstChild ? tallyl.removeChild(tallyl.firstChild) : null);
  tallyR.forEach(tallyr => tallyr.firstChild ? tallyr.removeChild(tallyr.firstChild) : null);
  tally.forEach(tallyl => tallyl.style.backgroundColor = 'rgb(36, 147, 221)');
  tallyR.forEach(tallyr => tallyr.style.backgroundColor = 'rgb(36, 147, 221)');
}

<<<<<<< HEAD
/* This function loops the playRound function five times and gives a final score. */
function playGame() {
  let element = document.getElementById("newLine");
    
  
  para.textContent = 0;
  para2.textContent = 0;
  element.innerHTML = "Verdict: <br/>";
  for (let i = 0; i < 5; i++) {
    outcome = playRound();
    console.log(outcome);
  };
  element.innerHTML += `${giveFinalScore()}`;
  
}

/* Use element.appendChild(para3) to display each score.
Step 1: Create the para variable with document.createElement('p')
Step 2: Create loop with while(), but also try with for().
Step 3: With each loop, para.textContent = " "
Step 4: After Everything, Before the next loop, append the para to the div with element.appendChild(para)
*/
=======
//Generate a random answer for the computer
function randomizeCompAnswer() {
  let thing = ['rock', 'paper', 'scissors']
  return thing[Math.floor(Math.random()*thing.length)] 
}
>>>>>>> rps-ui
