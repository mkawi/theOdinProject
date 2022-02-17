class Ship {
	constructor(length, direction, boolean) {
		this.length = length;
		this.hits = Array(length).fill(null);
		this.direction = direction;
		this.sunk = boolean;
	}

	getLength() {
		return this.length;
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
