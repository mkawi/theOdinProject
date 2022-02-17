import getRandomNum from "../utils/randomNum";

class Player {
	constructor(name, turn = false) {
		this.name = name;
		this.shots = [];
		this.turn = turn;
	}

	getRandomMove() {
		let randomMove = getRandomNum(100);
		while (this.shots.includes(randomMove)) {
			randomMove = getRandomNum(100);
		}
		this.shots.push(randomMove);
		return randomMove;
	}
}

export default Player;
