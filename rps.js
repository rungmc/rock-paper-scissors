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
    else {
        return 'Invalid play!';
    }

}

function game(rounds = 5){
    let wins = 0;
    let losses = 0;

    for (let i = 0; i < rounds; i++){
        let playerSelection = prompt('What are you throwing?');
        let computerSelection = computerPlay();
        if (playRound(playerSelection, computerSelection).slice(4,7) === 'Win'){
            wins++;
        }
        else if (playRound(playerSelection, computerSelection).slice(4,8) === 'Lose'){
            losses++;
        }
        console.log(playRound(playerSelection, computerSelection));
    }

    if (wins > losses){
        console.log('You won with a score of ' + wins + ' - ' + losses);
    }
    else if (losses > wins){
        console.log('You lost with a score of ' + wins + ' - ' + losses);
    }
    else {
        console.log('You tied with a score of ' + wins + ' - ' + losses);
    }
}