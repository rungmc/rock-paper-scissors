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
        return 'Draw!';
    }
    else if (playerSelection.toLowerCase() === 'rock'){
        return (computerSelection === 'Scissors') ? 'You Win! Rock beats Scissors' : 'You Lose! Paper beats Rock';
    }
    else if (playerSelection.toLowerCase() === 'paper'){
        return (computerSelection === 'Rock') ? 'You Win! Paper beats Rock' : 'You Lose! Scissors beats Paper';
    }
    else if(playerSelection.toLowerCase() === 'scissors'){
        return (computerSelection === 'Paper') ? 'You Win! Scissors beats Paper' : 'You Lose! Rock beats Scissors';
    }

}

function game(){
    const rounds = 5;
}