import Ship from "../Ship";

describe("Initialize Ship", () => {
	test("init Ship correct", () => {
		const s3 = Ship(3);
		const s5 = Ship(5);

		expect(s3.returnShip().length).toBe(3);
		expect(s3.returnShip()).toEqual([null, null, null]);
		expect(s3.returnHit()).toEqual([false, false, false]);
		expect(s3.returnHit()).not.toEqual([true, false, false]);
		expect(s3.isSunk()).toBe(false);

		expect(s5.returnShip().length).toBe(5);
		expect(s5.returnShip()).toEqual([null, null, null, null, null]);
		expect(s5.returnHit()).toEqual([false, false, false, false, false]);
		expect(s5.isSunk()).toBe(false);
	});
});

describe("Placement", () => {
	test("check placement", () => {
		const s2 = Ship(2);
		const s5 = Ship(5);

		s2.placeShip([1, 2]);
		expect(s2.returnShip()).toEqual([1, 2]);
		s5.placeShip([5, 6, 7, 8, 9]);
		expect(s5.returnShip()).toEqual([5, 6, 7, 8, 9]);
	});

	test("check if placement valid", () => {
		const s5 = Ship(5);

		expect(() => s5.placeShip([5, 6, 7, 8, 9])).not.toThrow(Error);
		expect(() => s5.placeShip([-1, 0, 1, 2, 3])).toThrow(Error);
		expect(() => s5.placeShip([100, 101, 102, 103, 104])).toThrow(Error);
		expect(() => s5.placeShip([5, 6, 7, 8])).toThrow(Error);
	});
});

describe("Hit function", () => {
	test("hit or miss", () => {
		const s5 = Ship(5);
		const s4 = Ship(4);
		s5.placeShip([5, 6, 7, 8, 9]);
		s4.placeShip([1, 2, 3, 4]);

		expect(s5.hit(7)).toBe(true);
		expect(s5.hit(10)).toBe(false);

		s4.hit(50);
		expect(s4.returnHit()).toEqual([false, false, false, false]);
		s4.hit(3);
		expect(s4.returnHit()).toEqual([false, false, true, false]);
	});
});

describe("Destroy Ship", () => {
	test("check if sunk", () => {
		const s3 = Ship(3);
		s3.placeShip([1, 2, 3]);

		s3.hit(1);
		expect(s3.isSunk()).toBe(false);
		s3.hit(2);
		expect(s3.isSunk()).toBe(false);
		s3.hit(4);
		expect(s3.isSunk()).toBe(false);
		s3.hit(3);
		expect(s3.isSunk()).toBe(true);
	});
});
