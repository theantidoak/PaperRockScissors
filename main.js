
let para = document.querySelector('.pp');
let para2 = document.querySelector('.pc');

function computerPlay() {
    
    let thing = ['rock', 'paper', 'scissors']
    return thing[Math.floor(Math.random()*thing.length)] 
};

function playRound(playerSelection, computerSelection=computerPlay()) {

    playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
    
    if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'scissors' && computerSelection === 'rock' || playerSelection === 'paper' && computerSelection === 'scissors') {
        
        para2.textContent = parseInt(para2.textContent) === 0 ? para2.textContent = '1' 
        : parseInt(para2.textContent) === 1 ? para2.textContent = '2'
        : parseInt(para2.textContent) === 2 ? para2.textContent = '3'
        : parseInt(para2.textContent) === 3 ? para2.textContent = '4'
        : parseInt(para2.textContent) === 4 ? para2.textContent = '5'
        : null;
        
        return playerSelection === 'rock' && computerSelection === 'paper' ? "You Lose! Paper beats Rock" 
        : playerSelection === 'paper' && computerSelection === 'scissors' ? "You Lose! Scissors beats Paper"
        : playerSelection === 'scissors' && computerSelection === 'rock' ? "You Lose! Rock beats Scissors" : null;

    } else if (playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'paper') {
        
        para.textContent = parseInt(para.textContent) === 0 ? para.textContent = '1' 
        : parseInt(para.textContent) === 1 ? para.textContent = '2'
        : parseInt(para.textContent) === 2 ? para.textContent = '3'
        : parseInt(para.textContent) === 3 ? para.textContent = '4'
        : parseInt(para.textContent) === 4 ? para.textContent = '5'
        : null;
        
        return playerSelection === 'paper' && computerSelection === 'rock' ? "You Win! Paper beats Rock" 
        : playerSelection === 'rock' && computerSelection === 'scissors' ? "You Win! Rock beats Scissors"
        : playerSelection === 'scissors' && computerSelection === 'paper' ? "You Win! Scissors beats Paper" 
        : null;
    
    } else if (playerSelection === computerSelection) {
        return "It's a tie"

    } else {
        para2.textContent = parseInt(para2.textContent) === 0 ? para2.textContent = '1' 
        : parseInt(para2.textContent) === 1 ? para2.textContent = '2'
        : parseInt(para2.textContent) === 2 ? para2.textContent = '3'
        : parseInt(para2.textContent) === 3 ? para2.textContent = '4'
        : parseInt(para2.textContent) === 4 ? para2.textContent = '5'
        : null;
        return "That's not how you play the game. Point for Computer."
    }
};

function game() {

    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    para.textContent = para.textContent + ' ' + finalScore();
    

    function finalScore() {
    if (parseInt(para.textContent) === parseInt(para2.textContent)) {
        return "It's a tie!"
    } else if (parseInt(para.textContent) > parseInt(para2.textContent)) {
        return "You win the game!"
    } else if (parseInt(para.textContent) < parseInt(para2.textContent)) {
        return "You lose. Play again!"
    }
}
};


/* Changed and Unused */
/*} else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        para.textContent = parseInt(para.textContent) === 0 ? para.textContent = '1' 
        : parseInt(para.textContent) === 1 ? para.textContent = '2'
        : parseInt(para.textContent) === 2 ? para.textContent = '3'
        : parseInt(para.textContent) === 3 ? para.textContent = '4'
        : parseInt(para.textContent) === 4 ? para.textContent = '5'
        : null;
        return "You Win! Rock beats Scissors"; */
    /* }  else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        para2.textContent = parseInt(para2.textContent) === 0 ? para2.textContent = '1' 
        : parseInt(para2.textContent) === 1 ? para2.textContent = '2'
        : parseInt(para2.textContent) === 2 ? para2.textContent = '3'
        : parseInt(para2.textContent) === 3 ? para2.textContent = '4'
        : parseInt(para2.textContent) === 4 ? para2.textContent = '5'
        : null;
        return "You Lose! Scissors beats Paper"; */
    /* } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        para2.textContent = parseInt(para2.textContent) === 0 ? para2.textContent = '1' 
        : parseInt(para2.textContent) === 1 ? para2.textContent = '2'
        : parseInt(para2.textContent) === 2 ? para2.textContent = '3'
        : parseInt(para2.textContent) === 3 ? para2.textContent = '4'
        : parseInt(para2.textContent) === 4 ? para2.textContent = '5'
        : null;
        return "You Lose! Rock beats Scissors"; */
    /* } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        para.textContent = parseInt(para.textContent) === 0 ? para.textContent = '1' 
        : parseInt(para.textContent) === 1 ? para.textContent = '2'
        : parseInt(para.textContent) === 2 ? para.textContent = '3'
        : parseInt(para.textContent) === 3 ? para.textContent = '4'
        : parseInt(para.textContent) === 4 ? para.textContent = '5'
        : null;
        return "You Win! Scissors beats Paper" */