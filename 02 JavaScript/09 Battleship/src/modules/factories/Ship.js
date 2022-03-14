class Ship {
	constructor(length, startCoords, direction = "horizontal", sunk = false) {
		this.length = length;
		this.startCoords = startCoords;
		this.direction = direction;
		this.sunk = sunk;
		this.hits = Array(length).fill(null);
	}

	getLength() {
		return this.length;
	}

	getStartCoords() {
		return this.startCoords;
	}

	getDirection() {
		return this.direction;
	}

	getHits() {
		return this.hits;
	}

	hit(num) {
		this.hits[num] = "hit";
	}

	isSunk() {
		if (this.hits.every((index) => index === "hit")) {
			this.sunk = true;
			return this.sunk;
		} else {
			this.sunk = false;
			return this.sunk;
		}
	}
}

export default Ship;
