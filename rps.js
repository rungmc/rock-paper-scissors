let rounds = 5;
let win = 0;
let lose = 0;
let draws = 0;

function computerPlay(){
    let choice = Math.random() * (3);

    if (choice <= 1){
        return('Rock');
    }
    else if (choice <= 2){
        return('Paper');
    }
    else {
        return('Scissors');
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        draws++;
        return 'Draw!';
    }
    else if (playerSelection.toLowerCase() === 'rock'){
        if (computerSelection === 'Scissors'){
            win++;
            return 'You Win! Rock beats Scissors'
        }
        else{
            lose++;
            return 'You Lose! Paper beats Rock';
        }
    }
    else if (playerSelection.toLowerCase() === 'paper'){
        if (computerSelection === 'Rock'){
            win++;
            return 'You Win! Paper beats Rock'
        }
        else{
            lose++;
            return 'You Lose! Scissors beats Paper';
        }
    }
    else if(playerSelection.toLowerCase() === 'scissors'){
        if (computerSelection === 'Paper'){
            win++;
            return 'You Win! Scissors beats Paper'
        }
        else{
            lose++;
            return 'You Lose! Rock beats Scissors';
        }
    }
    else {
        return 'Invalid play!';
    }

}

const roundCounter = document.querySelector('#rounds');
const buttons = document.querySelectorAll('.rps');
const computer = document.querySelector('#computer');
const result = document.querySelector('#result');
const score = document.querySelector('#score');
const final = document.querySelector('#final');

function reset(){
    rounds = 5;
    win = 0;
    lose = 0;
    draws = 0;

    roundCounter.innerText = rounds;
    computer.innerText = 'n/a';
    result.innerText = 'n/a';
    score.innerText = 'Wins - 0, Losses - 0, Draws - 0';
    final.innerText = '';
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (rounds > 0){
            const cpuPlay = computerPlay();
            computer.innerText = cpuPlay;
            result.innerText = playRound(button.id,cpuPlay);
                
            rounds--;
            roundCounter.innerText = rounds;
            score.innerText = `Wins - ${win}, Losses - ${lose}, Draws - ${draws}`;
        }

        if (rounds == 0) {
            roundCounter.innerHTML = '<button id="reset">Play Again</button>';
            roundCounter.addEventListener('click', () => {
                reset();
            });

            if(win > lose) final.innerText = 'You won!';
            else if(lose > win) final.innerText = 'You lost!';
            else final.innerText = 'It was a tie!';
        }
    });
});