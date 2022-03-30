
let para = document.querySelector('.pp');
let para2 = document.querySelector('.pc');
let para3 = document.querySelector('.pd');
let gameButton = document.querySelector('.game');
gameButton.addEventListener('click', playGame);
let element = document.getElementById("newLine");

/* This function generates a random answer from the opponent side. */
function randomizeCompAnswer() {
  let thing = ['rock', 'paper', 'scissors']
  return thing[Math.floor(Math.random()*thing.length)] 
}

/* This function prompts an answer from the user, compares the answer to the opponent answer, 
and gives a result and response.*/
function playRound(playerSelection, computerSelection=randomizeCompAnswer()) {

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

/* This function updates the score by comparing to an html element. */
function updateScore(result) {
  if (result.charAt(4) == 'L' || result.charAt(0) == 'T') {
    para2.textContent = para2.textContent === '0' ? para2.textContent = '1' :
    para2.textContent === '1' ? para2.textContent = '2' :
    para2.textContent === '2' ? para2.textContent = '3' :
    para2.textContent === '3' ? para2.textContent = '4' :
    para2.textContent === '4' ? para2.textContent = '5 Woah! That\'s some bad luck...' :
    para2.textContent = "Restart Game";
  } else if (result.charAt(4) == 'W') {
    para.textContent = para.textContent === '0' ? para.textContent = '1' :
    para.textContent === '1' ? para.textContent = '2' :
    para.textContent === '2' ? para.textContent = '3' :
    para.textContent === '3' ? para.textContent = '4' :
    para.textContent === '4' ? para.textContent = '5 Woah! That\'s some good luck...' :
    para.textContent = "Restart Game";
  } else {
    null;
  };
}

/* This function gives the player the final message */
function giveFinalScore() {
  if (parseInt(para.textContent) === parseInt(para2.textContent)) {
    return "<br>It's a tie!"
  } else if (parseInt(para.textContent) > parseInt(para2.textContent)) {
    return "<br>You win the game!"
  } else if (parseInt(para.textContent) < parseInt(para2.textContent)) {
    return "<br>You lose. Play again!"
  };
}

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