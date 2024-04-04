import GameBoard from "./GameBoard";

const Player = (playerNumber, isAI) => {
	const pNumber = playerNumber;
	const ai = isAI;
	const playerGameBoard = GameBoard();

	const returnPlayerNumber = () => {
		return pNumber;
	};

	const isAi = () => {
		return ai;
	};

	const returnGameBoard = () => {
		return playerGameBoard;
	};

	const generateAttack = () => {
		if (ai === true) {
			return Math.floor(Math.random() * 100);
		} else {
			return false;
		}
	};

	return { returnPlayerNumber, isAi, returnGameBoard, generateAttack };
};

export default Player;
