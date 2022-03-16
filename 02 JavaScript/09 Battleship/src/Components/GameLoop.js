import Player from "./factories/Player";

const gameLoop = () => {
	let p1 = null;
	let ai = null;

	const setUpPlayers = () => {
		p1 = Player(1, false);
		ai = Player(2, true);
	};

	const placeShipsRandom = () => {
		const rand = Math.floor(Math.random() * 4);
		if (rand < 1) {
			placeShip(2, "carrier", [2, 3, 4, 5, 6]);
			placeShip(2, "battleship", [45, 55, 65, 75]);
			placeShip(2, "cruiser", [38, 48, 58]);
			placeShip(2, "destroyer", [98, 99]);
		} else if (rand >= 1 && rand <= 2) {
			placeShip(2, "carrier", [32, 42, 52, 62, 72]);
			placeShip(2, "battleship", [84, 85, 86, 87]);
			placeShip(2, "cruiser", [29, 39, 49]);
			placeShip(2, "destroyer", [6, 16]);
		} else {
			placeShip(2, "carrier", [91, 92, 93, 94, 95]);
			placeShip(2, "battleship", [58, 68, 78, 88]);
			placeShip(2, "cruiser", [74, 75, 76]);
			placeShip(2, "destroyer", [54, 64]);
		}

		return true;
	};

	const allShipsPlaced = () => {
		const gb1 = p1.returnGameBoard();
		const gb2 = ai.returnGameBoard();

		let allPlaced = !gb1.checkIfPlaced("carrier")
			? false
			: !gb1.checkIfPlaced("battleship")
			? false
			: !gb1.checkIfPlaced("cruiser")
			? false
			: !gb1.checkIfPlaced("destroyer")
			? false
			: true;
		if (allPlaced === true) {
			allPlaced = !gb2.checkIfPlaced("carrier")
				? false
				: !gb2.checkIfPlaced("battleship")
				? false
				: !gb2.checkIfPlaced("cruiser")
				? false
				: !gb2.checkIfPlaced("destroyer")
				? false
				: true;
		}
		return allPlaced;
	};

	const attackShip = (player, position) => {
		if (player === 1) {
			return ai.returnGameBoard().receiveAttack(position);
		} else {
			let attack = ai.generateAttack();
			while (p1.returnGameBoard().receiveAttack(attack) === "attacked") {
				attack = ai.generateAttack();
			}
			return attack;
		}
	};

	const returnShipPositions = () => {
		const p1Ships = p1.returnGameBoard().returnShips();
		const aiShips = ai.returnGameBoard().returnShips();

		const p1PosArray = [];
		const AiPosArray = [];

		Object.keys(p1Ships).forEach((element) => {
			p1PosArray.push(p1Ships[element].Ship.returnShip());
		});

		Object.keys(aiShips).forEach((element) => {
			AiPosArray.push(aiShips[element].Ship.returnShip());
		});

		return [p1PosArray, AiPosArray];
	};

	const placeShip = (numb, name, location) => {
		let placed = false;
		let killCount = 0;
		while (!placed && killCount < 10) {
			if (numb === 1) {
				placed = p1.returnGameBoard().placeShip(name, location);
			} else {
				placed = ai.returnGameBoard().placeShip(name, location);
			}
			killCount++;
		}
		if (placed === false) {
			throw new Error("cant place Ship");
		}
	};

	const calculateIndices = (startIndex, vertical, shipSize) => {
		const tempArr = [startIndex];
		if (!vertical) {
			for (let i = 1; i < shipSize; i++) {
				tempArr.push(startIndex + i);
			}
		} else {
			for (let i = 1; i < shipSize; i++) {
				tempArr.push(startIndex + 10 * i);
			}
		}
		if (checkIfOutOfBound(tempArr, vertical)) {
			return false;
		} else {
			return tempArr;
		}
	};

	const checkIfOutOfBound = (chosenCoords, vertical) => {
		if (!vertical) {
			for (let i = 0; i < chosenCoords.length - 1; i++) {
				const lastDigit = chosenCoords[i].toString().split("").pop();
				if (+lastDigit === 9) {
					return true;
				}
			}
		} else {
			if (chosenCoords[chosenCoords.length - 1] > 99) {
				return true;
			}
		}
		return false;
	};

	const isGameOver = () => {
		if (ai.returnGameBoard().allSunk()) {
			return [true, 1];
		} else if (p1.returnGameBoard().allSunk()) {
			return [true, 2];
		}

		return [false, null];
	};

	const returnPlayers = () => {
		return [p1, ai];
	};

	const returnGameBoards = () => {
		return [p1.returnGameBoard(), ai.returnGameBoard()];
	};

	return {
		setUpPlayers,
		returnPlayers,
		returnGameBoards,
		placeShipsRandom,
		calculateIndices,
		placeShip,
		allShipsPlaced,
		returnShipPositions,
		attackShip,
		isGameOver,
	};
};

export default gameLoop;
