import ArrayAnalysis from "../code/arrayAnalysis";

test("check min value", () =>
	expect(ArrayAnalysis([1, 8, 3, 4, 2, 6]).min).toBe(1));

test("check max value", () =>
	expect(ArrayAnalysis([1, 8, 3, 4, 2, 6]).max).toBe(8));

test("check max length", () =>
	expect(ArrayAnalysis([1, 8, 3, 4, 2, 6]).length).toBe(6));

test("check average", () =>
	expect(ArrayAnalysis([1, 8, 3, 4, 2, 6]).average).toBe(4));

test("check whole object", () =>
	expect(ArrayAnalysis([1, 8, 3, 4, 2, 6])).toEqual({
		average: 4,
		min: 1,
		max: 8,
		length: 6,
	}));
