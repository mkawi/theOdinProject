import GameBoard from "../GameBoard";

describe("init game board", () => {
	test("board size correct", () => {
		const gb = GameBoard();
		expect(gb.returnGameBoard()).toHaveLength(100);
	});

	test("board objects empty", () => {
		const gb = GameBoard();
		expect(gb.returnGameBoard()).toEqual(expect.arrayContaining([null]));
	});

	test("init number of attacks", () => {
		const gb = GameBoard();
		expect(gb.returnAttacks()).toEqual([]);
	});

	test("init number of misses", () => {
		const gb = GameBoard();
		expect(gb.returnMisses()).toEqual([]);
	});

	test("init ships", () => {
		const gb = GameBoard();
		expect(gb.returnShips()).toEqual({
			carrier: expect.anything(),
			battleship: expect.anything(),
			cruiser: expect.anything(),
			destroyer: expect.anything(),
		});
	});
});

// fix mock for shipfactory
describe("Place ships on the board", () => {
	test("placement of Ship", () => {
		const gb = GameBoard();

		gb.placeShip("carrier", [0, 1, 2, 3, 4]);

		expect(gb.returnShips()["carrier"].Ship.returnShip()).toEqual([
			0, 1, 2, 3, 4,
		]);
		expect(() => gb.placeShip("carrier", [60, 70, 80])).toThrowError();

		gb.placeShip("battleship", [5, 6, 7, 8]);
		gb.placeShip("cruiser", [9, 10, 11]);
		gb.placeShip("destroyer", [15, 16]);

		expect(gb.returnShips()["battleship"].Ship.returnShip()).toEqual([
			5, 6, 7, 8,
		]);
		expect(gb.returnShips()["cruiser"].Ship.returnShip()).toEqual([9, 10, 11]);
		expect(gb.returnShips()["destroyer"].Ship.returnShip()).toEqual([15, 16]);
	});

	test("can not place ships on same spot", () => {
		const gb = GameBoard();
		gb.placeShip("battleship", [1, 2, 3, 4]);
		expect(gb.placeShip("cruiser", [3, 4, 5])).toBe(false);
	});
});

describe("check if placed", () => {
	const gb = GameBoard();
	test("placed Ship should return true on check", () => {
		gb.placeShip("battleship", [1, 2, 3, 4]);
		expect(gb.checkIfPlaced("carrier")).toBe(false);
		expect(gb.checkIfPlaced("battleship")).toBe(true);
	});
});

describe("Ship attacks", () => {
	test("register hit", () => {
		const gb = GameBoard();
		gb.placeShip("carrier", [0, 1, 2, 3, 4]);

		expect(gb.receiveAttack(2)).toBe("hit");
		expect(gb.receiveAttack(10)).toBe("miss");
		expect(gb.returnAttacks()).toEqual([2, 10]);
	});

	test("attack on same all ready attacked coordinate", () => {
		const gb = GameBoard();
		gb.placeShip("carrier", [0, 1, 2, 3, 4]);

		expect(gb.receiveAttack(3)).toBe("hit");
		expect(gb.receiveAttack(3)).toBe("attacked");
		expect(gb.returnAttacks()).toEqual([3]);
	});

	test("register Ship misses", () => {
		const gb = GameBoard();
		gb.placeShip("carrier", [0, 1, 2, 3, 4]);

		expect(gb.receiveAttack(3)).toBe("hit");
		expect(gb.receiveAttack(10)).toBe("miss");
		expect(gb.returnMisses()).toEqual([10]);
		expect(gb.receiveAttack(25)).toBe("miss");
		expect(gb.returnMisses()).toEqual([10, 25]);
	});

	test("are all Ship sunk", () => {
		const gb = GameBoard();

		gb.placeShip("carrier", [0, 1, 2, 3, 4]);
		gb.placeShip("battleship", [5, 6, 7, 8]);
		gb.placeShip("cruiser", [9, 10, 11]);
		gb.placeShip("destroyer", [15, 16]);

		expect(gb.allSunk()).toBe(false);

		for (let i = 0; i < 17; i++) {
			gb.receiveAttack(i);
		}

		expect(gb.allSunk()).toBe(true);
	});
});
