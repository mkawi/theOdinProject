import Gameboard from "../Gameboard";
import Ship from "../Ship";

test("creates gameboard of 10x10", () => {
	let g = new Gameboard("Player 1");
	g.fillBoard();
	expect(g.board.length).toBe(100);
});

test("returns false if there's already a ship", () => {
	let g = new Gameboard();
	g.fillBoard();
	let ship1 = new Ship(4, 5);
	g.placeShip(ship1);
	expect(g.placeShip(ship1)).toBeFalsy();
});

test("place horizontal ship of length 1 at pos 0", () => {
	let g = new Gameboard("Player 1");
	g.fillBoard();
	let ship1 = new Ship(1, 0);
	g.placeShip(ship1);
	expect(g.board[0].ship).toBeTruthy();
});

test("accepts horizontal ship of 4 at pos 4", () => {
	let g = new Gameboard("Player 1");
	g.fillBoard();
	let ship1 = new Ship(4, 4);
	g.placeShip(ship1);
	expect(g.board[4] && g.board[5] && g.board[6] && g.board[7]).toBeTruthy();
});

test("accepts vertical ship of 4 at pos 4", () => {
	let g = new Gameboard("Player 1");
	g.fillBoard();
	let ship1 = new Ship(4, 4, "vertical");
	g.placeShip(ship1);
	expect(g.board[40] && g.board[50] && g.board[60] && g.board[70]).toBeTruthy();
});

// test("reject horizontal boat that goes over the right edge", () => {
// 	let g = new Gameboard("Player 1");
// 	g.fillBoard();
// 	let ship1 = new Ship(4, 4, "vertical");
// 	expect(g.placeShip(ship1)).toBeFalsy();
// });

// test("reject vertical ship that goes over bottom edge", () => {
// 	let g = new Gameboard("Player 1");
// 	expect(g.placeShip(7, 5, 4, "v")).toBe(false);
// });

test("hit ship, return with true if ship has been hit", () => {
	let g = new Gameboard("Player 1");
	g.fillBoard();
	let ship1 = new Ship(4, 5);
	g.placeShip(ship1);
	g.receiveHit(5);
	expect(g.board[5].beenHit && g.board[5].ship).toBeTruthy();
});

test("missed hit, return with false if ship hasn't been hit", () => {
	let g = new Gameboard("Player 1");
	g.fillBoard();
	let ship1 = new Ship(4, 5);
	g.placeShip(ship1);
	g.receiveHit(2);
	expect(g.board[5].beenHit && g.board[5].ship).toBeFalsy();
});

// test("2x hit ship return pos with 'hit'", () => {
// 	let g = new Gameboard("Player 1");
// 	g.placeShip(0, 0, 5, "v");
// 	g.receiveAttack(0, 0);
// 	g.receiveAttack(1, 0);
// 	expect(
// 		g.board[0][0].ship.tiles[g.board[0][0].shipPos] &&
// 			g.board[1][0].ship.tiles[g.board[1][0].shipPos]
// 	).toBe("hit");
// });

// // checks if ship on board[pos] is sunk
// test("sunk ship returns sunk", () => {
// 	let g = new Gameboard("Player 1");
// 	g.placeShip(0, 0, 2, "v");
// 	g.receiveAttack(0, 0);
// 	g.receiveAttack(1, 0);

// 	expect(g.isSunk(0, 0)).toBeTruthy();
// });

// //checks if all ships on board are sunk
// test("are all ships on the board sunk?", () => {
// 	let g = new Gameboard("Player 1");
// 	g.placeShip(0, 0, 2, "v");
// 	g.placeShip(0, 4, 2, "h");
// 	g.receiveAttack(0, 0);
// 	g.receiveAttack(1, 0);
// 	g.receiveAttack(0, 4);
// 	g.receiveAttack(0, 5);

// 	expect(g.areAllSunk(g.board)).toBeTruthy();
// });
