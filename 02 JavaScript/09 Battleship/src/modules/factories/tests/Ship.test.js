import Ship from "../Ship";

test("has length property", () => {
	let ship1 = new Ship(4, 5);
	expect(ship1.length).toBe(4);
});

test("ship is horizontal", () => {
	let ship1 = new Ship(4, 5);
	expect(ship1.direction).toBe("horizontal");
});

test("ship is vertical", () => {
	let ship1 = new Ship(4, 5, "vertical");
	expect(ship1.direction).toBe("vertical");
});

test("creates ship coords", () => {
	let ship1 = new Ship(4, 5);
	expect(ship1.startCoords).toEqual(5);
});

test("hits the ship", () => {
	let ship1 = new Ship(4, 5);
	ship1.hit(0);
	expect(ship1.hits[0]).toEqual("hit");
});

test("sinks the ship", () => {
	let ship1 = new Ship(4, 5);
	ship1.hit(0);
	ship1.hit(1);
	ship1.hit(2);
	ship1.hit(3);
	expect(ship1.isSunk()).toBeTruthy();
});

test("does not sink the ship", () => {
	let ship1 = new Ship(4, 5);
	ship1.hit(0);
	ship1.hit(1);
	expect(ship1.isSunk()).toBeFalsy();
});
