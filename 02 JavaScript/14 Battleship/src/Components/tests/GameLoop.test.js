import gameLoop from "../GameLoop";

describe("Init game loop", () => {
	test("set up one player and one ai", () => {
		const gl = gameLoop();

		gl.setUpPlayers();
		const [p1, ai] = gl.returnPlayers();

		expect(p1.returnPlayerNumber()).toBe(1);
		expect(ai.returnPlayerNumber()).toBe(2);
		expect(p1.isAi()).toBe(false);
		expect(ai.isAi()).toBe(true);
	});
});

describe("Ship placement", () => {
	test("place ships random", () => {
		const gl = gameLoop();
		gl.setUpPlayers();

		expect(() => gl.placeShipsRandom()).not.toThrow();
	});

	test("take dom input and calculate right Ship placement indices", () => {
		const gl = gameLoop();

		expect(gl.calculateIndices(1, false, 5)).toEqual([1, 2, 3, 4, 5]);
		expect(gl.calculateIndices(1, true, 5)).toEqual([1, 11, 21, 31, 41]);
	});

	test("out of bound indices", () => {
		const gl = gameLoop();

		// horizontal
		expect(gl.calculateIndices(9, false, 5)).toBe(false);
		expect(gl.calculateIndices(96, false, 5)).toBe(false);
		expect(gl.calculateIndices(2, false, 5)).not.toBe(false);

		//vertical
		expect(gl.calculateIndices(81, true, 5)).toBe(false);
		expect(gl.calculateIndices(62, true, 5)).toBe(false);
		expect(gl.calculateIndices(50, true, 5)).not.toBe(false);
	});
});

describe("placement phase ready", () => {
	test("check if all ships have been placed", () => {
		const gl = gameLoop();
		gl.setUpPlayers();

		expect(gl.allShipsPlaced()).toBe(false);
		gl.placeShipsRandom();
		expect(gl.allShipsPlaced()).toBe(false);

		gl.placeShip(1, "carrier", [1, 2, 3, 4, 5]);
		gl.placeShip(1, "battleship", [6, 7, 8, 9]);
		gl.placeShip(1, "cruiser", [10, 11, 12]);
		gl.placeShip(1, "destroyer", [16, 17]);
		expect(gl.allShipsPlaced()).toBe(true);
	});

	test("return all Ship placements", () => {
		const gl = gameLoop();
		gl.setUpPlayers();
		gl.placeShipsRandom();
		gl.placeShip(1, "carrier", [1, 2, 3, 4, 5]);
		gl.placeShip(1, "battleship", [6, 7, 8, 9]);
		gl.placeShip(1, "cruiser", [10, 11, 12]);
		gl.placeShip(1, "destroyer", [16, 17]);

		const [p1, ai] = gl.returnShipPositions();

		expect(p1[0]).toEqual([1, 2, 3, 4, 5]);
		expect(p1[1]).toEqual([6, 7, 8, 9]);
		expect(p1[2]).toEqual([10, 11, 12]);
		expect(p1[3]).toEqual([16, 17]);
	});
});

describe("Attack", () => {
	test("check if ai sunk", () => {
		const gl = gameLoop();
		gl.setUpPlayers();
		gl.placeShipsRandom();

		expect(gl.isGameOver()).toEqual([false, null]);

		for (let i = 0; i < 100; i++) {
			gl.attackShip(1, i);
		}

		expect(gl.isGameOver()).toEqual([true, 1]);
	});

	test("check if player sunk", () => {
		const gl = gameLoop();
		gl.setUpPlayers();
		gl.placeShipsRandom();
		gl.placeShip(1, "carrier", [1, 2, 3, 4, 5]);
		gl.placeShip(1, "battleship", [6, 7, 8, 9]);
		gl.placeShip(1, "cruiser", [10, 11, 12]);
		gl.placeShip(1, "destroyer", [16, 17]);

		for (let i = 0; i < 100; i++) {
			gl.attackShip(2, i);
		}

		expect(gl.isGameOver()).toEqual([true, 2]);
	});
});
