import Player from "../Player";

describe("initialize player", () => {
	test("initial setup of a player", () => {
		const p1 = Player(1, false);
		const p2 = Player(2, true);

		expect(p1.returnPlayerNumber()).toBe(1);
		expect(p1.isAi()).toBe(false);
		expect(p1.returnGameBoard()).toEqual(expect.anything());

		expect(p2.returnPlayerNumber()).toBe(2);
		expect(p2.isAi()).toBe(true);
		expect(p2.returnGameBoard()).toEqual(expect.anything());
	});
});

describe("Ai tests", () => {
	test("attacks", () => {
		const p1 = Player(1, false);
		const ai = Player(2, true);

		expect(ai.generateAttack()).toEqual(expect.any(Number));
		expect(p1.generateAttack()).toBe(false);
	});
});
