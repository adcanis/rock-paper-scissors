//Global Settings

let playerScore = 0;
let computerScore = 0;
let result = "";
let buttons = document.querySelectorAll('button');


//Computer 

function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
} 

//Game 

function game(playerInput) {
    let computerInput = computerPlay();
    let playerIcon = document.querySelector('#playerDisplay');
    let computerIcon = document.querySelector('#computerDisplay');

    if (playerInput === 'rock' && computerInput === 'scissors') {
        playerIcon = playerDisplay.innerHTML = 'rock';
        computerIcon = computerDisplay.innerHTML = 'scissors';
        playerScore += 1;
        result = ('Rock beats scissors, you win!')
    } else if (playerInput === 'paper' && computerInput == 'rock') {
        playerIcon = playerDisplay.innerHTML = 'paper';
        computerIcon = computerDisplay.innerHTML = 'rock';
        playerScore += 1;
        result = ('Paper covers rock, you win!'); 
    } else if (playerInput === 'scissors' && computerInput === 'paper') {
        playerIcon = playerDisplay.innerHTML = 'scissors';
        computerIcon = computerDisplay.innerHTML = 'paper';
        playerScore += 1;
        result = ('Scissors cut paper, you win!');
    } else if (playerInput === computerInput) {
        result = ('its a tie...') 
    } else {
        computerScore += 1;
        result = ('computer wins this round');
    } if (playerScore === 5) {
        result = ('you win this game!')
        alert('you win this game!')
    } else if (computerScore === 5) {
        result = ('you lost the game....refresh to play again');
        alert('you lost the game...refresh to play again')
    }

}

buttons.forEach(button => {
    button.addEventListener('click', function() {
        game(button.value)
        
    })
})


