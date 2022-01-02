// DOM Selectors
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const score = document.querySelector('h1');
const state = document.querySelector('h2');

// Scores
let playerScore = 0;
let computerScore = 0;

// Computer Selection
const getComputerChoice = () => {
	let choices = [ 'rock', 'paper', 'scissors' ];
	return choices[Math.floor(Math.random() * choices.length)];
};

// Player Selection
const getUserChoice = (userInput) => {
	if (userInput.target.innerText === 'ROCK') {
		return 'rock';
	} else if (userInput.target.innerText === 'PAPER') {
		return 'paper';
	} else if (userInput.target.innerText === 'SCISSORS') {
		return 'scissors';
	}
};

// Round Generator
const determineWinner = (userChoice, computerChoice) => {
	if (userChoice === computerChoice) {
		state.innerText = 'That was a tie';
	} else if (userChoice === 'rock' && computerChoice === 'paper') {
		state.innerText = 'Paper beats Rock. The computer won this round!';
		computerScore++;
	} else if (userChoice === 'rock' && computerChoice === 'scissors') {
		state.innerText = 'Rock beats Scissors. You won this round!';
		playerScore++;
	} else if (userChoice === 'paper' && computerChoice === 'scissors') {
		state.innerText = 'Scissors beats Paper. The computer won this round!';
		computerScore++;
	} else if (userChoice === 'paper' && computerChoice === 'rock') {
		state.innerText = 'Paper beats Rock. You won this round!';
		playerScore++;
	} else if (userChoice === 'scissors' && computerChoice === 'rock') {
		state.innerText = 'Rock beats Scissors. The computer won this round!';
		computerScore++;
	} else if (userChoice === 'scissors' && computerChoice === 'paper') {
		state.innerText = 'Scissors beats Paper. You won this round!';
		playerScore++;
	}
};

// Event Listeners
rock.addEventListener('click', (e) => {
	determineWinner(getUserChoice(e), getComputerChoice());
	endCheck();
	score.innerText = playerScore + ':' + computerScore;
	if (computerScore === 5 || playerScore === 5) {
		computerScore = 0;
		playerScore = 0;
	}
});

paper.addEventListener('click', (e) => {
	determineWinner(getUserChoice(e), getComputerChoice());
	endCheck();
	score.innerText = playerScore + ':' + computerScore;
	if (computerScore === 5 || playerScore === 5) {
		computerScore = 0;
		playerScore = 0;
	}
});

scissors.addEventListener('click', (e) => {
	determineWinner(getUserChoice(e), getComputerChoice());
	endCheck();
	score.innerText = playerScore + ':' + computerScore;
	if (computerScore === 5 || playerScore === 5) {
		computerScore = 0;
		playerScore = 0;
	}
});

// END GAME CHECK
const endCheck = () => {
	if (computerScore === 5 && playerScore < 5) {
		state.innerText = 'COMPUTER WINS, YOU LOSE!';
	} else if (playerScore === 5 && computerScore < 5) {
		state.innerText = 'YOU WIN, COMPUTER LOSES!';
	}
};
