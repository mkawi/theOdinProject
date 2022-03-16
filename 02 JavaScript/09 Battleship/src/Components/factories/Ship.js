const Ship = (length) => {
	const initShip = () => {
		const tempArr = [];
		for (let i = 0; i < length; i++) {
			tempArr.push(null);
		}
		return [...tempArr];
	};

	const initHitArr = () => {
		const tempArr = [];
		for (let i = 0; i < length; i++) {
			tempArr.push(false);
		}
		return [...tempArr];
	};

	let Ship = initShip();
	const hitArr = initHitArr();
	let sunk = false;

	const placeShip = (placementArr) => {
		if (placementArr.some((element) => element < 0)) {
			throw new Error("negative index position");
		} else if (placementArr.some((element) => element > 99)) {
			throw new Error("Index out of bound");
		} else if (placementArr.length !== Ship.length) {
			throw new Error("size mismatch");
		} else {
			Ship = [...placementArr];
		}
	};

	const setSunk = () => {
		if (!hitArr.includes(false)) {
			sunk = true;
		}
	};

	const hit = (boardIndex) => {
		if (Ship.includes(boardIndex)) {
			const index = Ship.indexOf(boardIndex);
			hitArr.splice(index, 1, true);
			setSunk();
			return true;
		} else {
			return false;
		}
	};
	const returnShip = () => {
		return Ship;
	};

	const returnHit = () => {
		return hitArr;
	};

	const isSunk = () => {
		return sunk;
	};

	return { returnShip, returnHit, isSunk, placeShip, hit };
};

export default Ship;
