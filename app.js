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
    if (playerInput === 'rock') {
        playerIcon = playerDisplay.setAttribute('class', 'fas fa-hand-rock');
    } else if (playerInput === 'paper') {
        playerIcon = playerDisplay.setAttribute('class', 'fas fa-hand-paper');
    } else if (playerInput === 'scissors') {
        playerIcon = playerDisplay.setAttribute('class', 'fas fa-hand-scissors');
    }

    if (computerInput === 'rock') {
        computerIcon = computerDisplay.setAttribute('class', 'fas fa-hand-rock');
    } else if (computerInput === 'paper') {
        computerIcon = computerDisplay.setAttribute('class', 'fas fa-hand-paper');
    } else if (computerInput === 'scissors') {
        computerIcon = computerDisplay.setAttribute('class', 'fas fa-hand-scissors');
    }

    if (playerInput === 'rock' && computerInput === 'scissors') {
        playerScore += 1;
        result = ('Rock beats scissors, you win!')
    } else if (playerInput === 'paper' && computerInput == 'rock') {
        playerScore += 1;
        result = ('Paper covers rock, you win!'); 
    } else if (playerInput === 'scissors' && computerInput === 'paper') {
        playerScore += 1;
        result = ('Scissors cut paper, you win!');
    } else if (playerInput === computerInput) {
        result = ('its a tie...') 
    } else {
        computerScore += 1;
        result = ('computer wins this round');
        
    } if (playerScore === 5) {
        result = ('you win this game!')
        computerDisplay.innerHTML = '';
        playerDisplay.innerHTML = '';
        alert('you win this game!')
        location.reload();

    } else if (computerScore === 5) {
        result = ('you lost the game....refresh to play again');
        computerDisplay.innerHTML = '';
        playerDisplay.innerHTML = '';
        alert('you lost the game...refresh to play again')
        location.reload();
    }

}
buttons.forEach(button => {
    button.addEventListener('click', function() {
        game(button.value)
        
    })
})


