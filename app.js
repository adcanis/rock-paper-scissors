//Global Settings

let playerScore = 0;
let computerScore = 0;
let result = "";
let buttons = document.querySelectorAll('button');
let computerIcon = document.querySelector('computerDisplay');
let playerIcon = document.querySelector('playerDisplay');

//Computer 

function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
} 

//Buttons

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled.true
    })
}

//Game 

function game(playerInput) {
    let computerInput = computerPlay();

    if (playerInput === 'rock' && computerInput === 'scissors') {
        playerScore += 1;
        playerIcon = playerDisplay.classList.add('fa-hand-rock');
        computerIcon = computerDisplay.classList.add('fa-hand-scissors');
        result = ('Rock beats scissors, you win!')
    } else if (playerInput === 'paper' && computerInput == 'rock') {
        playerScore += 1;
        playerIcon = playerDisplay.classList.add('fa-hand-paper');
        computerIcon = computerDisplay.classList.add('fa-hand-rock');
        result = ('Paper covers rock, you win!'); 
    } else if (playerInput === 'scissors' && computerInput === 'paper') {
        playerScore += 1;
        playerIcon = playerDisplay.classList.add('fa-hand-scissors');
        computerIcon = computerDisplay.classlist.add('fa-hand-paper');
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


