let playerScore = 0;
let computerScore = 0;
let ties = 0;

function computerPlay() {
	let choices = [ 'paper', 'scissors', 'rock' ];
	return choices[Math.floor(Math.random() * choices.length)];
}

function playerPlay(input) {
	input = prompt('Rock, paper, or scissors?').toLowerCase();

	while (true) {
		if (input == 'rock' || input == 'paper' || input == 'scissors') {
			break;
		} else {
			input = prompt('Please enter one of the following: rock, paper, scissors').toLowerCase();
		}
	}
	return input;
}

function playRound(computerSelection, playerSelection) {
	var computerSelection = computerPlay();
	var playerSelection = playerPlay();

	if (playerSelection == computerSelection) {
		ties++;
		return alert("It's a tie. \nPlayer Score: " + playerScore + ' Computer Score: ' + computerScore);
	} else if (playerSelection == 'paper') {
		computerSelection == 'scissors' ? computerScore++ : playerScore++;
		if (computerSelection == 'scissors') {
			return alert(
				'You lose. Scissors beats paper. \nPlayer Score: ' + playerScore + ' Computer Score: ' + computerScore
			);
		} else {
			return alert(
				'You win. Paper beats rock. \nPlayer Score: ' + playerScore + ' Computer Score: ' + computerScore
			);
		}
	} else if (playerSelection == 'scissors') {
		computerSelection == 'rock' ? computerScore++ : playerScore++;
		if (computerSelection == 'rock') {
			return alert(
				'You lose. Rock beats scissors. \nPlayer Score: ' + playerScore + ' Computer Score: ' + computerScore
			);
		} else {
			return alert(
				'You win. Scissors beats paper. \nPlayer Score: ' + playerScore + ' Computer Score: ' + computerScore
			);
		}
	} else if (playerSelection == 'rock') {
		computerSelection == 'paper' ? computerScore++ : playerScore++;
		if (computerSelection == 'paper') {
			return alert(
				'You lose. Paper beats rock. \nPlayer Score: ' + playerScore + ' Computer Score: ' + computerScore
			);
		} else {
			return alert(
				'You win. Rock beats scissors. \nPlayer Score: ' + playerScore + ' Computer Score: ' + computerScore
			);
		}
	} else {
		alert('There was an error with the game.');
	}
}

function game() {
	for (round = 0; round < 5; round++) {
		playRound();
	}
	if (playerScore > computerScore) {
		alert('You win. Beautiful!');
	} else if (playerScore < computerScore) {
		alert('You lose. Sad!');
	} else {
		alert("It's a tie");
	}
	playerScore = 0;
	computerScore = 0;
	ties = 0;
}

game();
