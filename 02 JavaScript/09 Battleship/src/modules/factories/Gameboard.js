class Gameboard {
	constructor(playerName) {
		this.owner = playerName;
		this.board = [];
		this.missedAttacks = [];
		this.shipsLeft = true;
		this.lastShot = {
			hit: false,
			location: false,
		};
	}

	fillBoard() {
		for (let i = 0; i < 100; i++) {
			this.board.push({ ship: false, beenHit: false });
		}
	}

	placeShip(ship) {
		if ((ship.direction = "horizontal")) {
			for (let i = 0; i < ship.length; i++) {
				this.board[ship.startCoords + i].ship = true;
			}
		} else {
			for (let i = 0; i < ship.length; i++) {
				this.board[ship.startCoords + i * 10].ship = true;
			}
		}
	}

	receiveHit(coords) {
		this.board[coords].beenHit = true;
	}

	isShipSunk(coords) {
		return this.board[coords].ship.isSunk() === true ? true : false;
	}

	areAllSunk() {
		for (let cell of this.board) {
			if (cell.ship !== false && !cell.beenHit) {
				this.shipsLeft = true;
				return;
			}
		}
		this.shipsLeft = false;
	}
}

export default Gameboard;
