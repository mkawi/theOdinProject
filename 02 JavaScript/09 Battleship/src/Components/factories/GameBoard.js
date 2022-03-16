import Ship from "./Ship";

const GameBoard = () => {
	const generateEmptyGameBoard = () => {
		const tempArr = [];
		for (let i = 0; i < 100; i++) {
			tempArr.push(null);
		}
		return [...tempArr];
	};

	const gb = generateEmptyGameBoard();
	const ships = {
		carrier: {
			Ship: Ship(5),
		},
		battleship: {
			Ship: Ship(4),
		},
		cruiser: {
			Ship: Ship(3),
		},
		destroyer: {
			Ship: Ship(2),
		},
	};

	const attacks = [];
	const misses = [];

	const checkIfPlaced = (name) => {
		if (ships[name].Ship.returnShip().includes(null)) {
			return false;
		}
		return true;
	};

	const placeShip = (name, location) => {
		if (checkForShipAtLocation(location)) {
			ships[name].Ship.placeShip(location);
			return true;
		} else {
			return false;
		}
	};

	const checkForShipAtLocation = (location) => {
		for (let i = 0; i < location.length; i++) {
			if (ships["carrier"].Ship.returnShip().includes(location[i])) {
				return false;
			} else if (ships["battleship"].Ship.returnShip().includes(location[i])) {
				return false;
			} else if (ships["cruiser"].Ship.returnShip().includes(location[i])) {
				return false;
			} else if (ships["destroyer"].Ship.returnShip().includes(location[i])) {
				return false;
			}
		}
		return true;
	};

	const checkIfShipHit = (attackCoord) => {
		if (ships["carrier"].Ship.hit(attackCoord)) {
			return true;
		} else if (ships["battleship"].Ship.hit(attackCoord)) {
			return true;
		} else if (ships["cruiser"].Ship.hit(attackCoord)) {
			return true;
		} else if (ships["destroyer"].Ship.hit(attackCoord)) {
			return true;
		}

		return false;
	};

	const receiveAttack = (attackCoord) => {
		if (!attacks.includes(attackCoord)) {
			attacks.push(attackCoord);
			if (checkIfShipHit(attackCoord)) {
				return "hit";
			} else {
				misses.push(attackCoord);
				return "miss";
			}
		} else {
			return "attacked";
		}
	};

	const allSunk = () => {
		let sunk = true;
		if (!ships["carrier"].Ship.isSunk()) {
			sunk = false;
		} else if (!ships["battleship"].Ship.isSunk()) {
			sunk = false;
		} else if (!ships["cruiser"].Ship.isSunk()) {
			sunk = false;
		} else if (!ships["destroyer"].Ship.isSunk()) {
			sunk = false;
		}

		return sunk;
	};

	const returnGameBoard = () => {
		return gb;
	};

	const returnAttacks = () => {
		return attacks;
	};

	const returnMisses = () => {
		return misses;
	};

	const returnShips = () => {
		return ships;
	};

	return {
		returnGameBoard,
		returnAttacks,
		returnMisses,
		returnShips,
		placeShip,
		receiveAttack,
		allSunk,
		checkIfPlaced,
	};
};

export default GameBoard;
