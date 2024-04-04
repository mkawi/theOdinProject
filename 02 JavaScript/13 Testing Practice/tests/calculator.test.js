import calculator from "../code/calculator";

test("Adds 1 and 2 to equal 3", () => expect(calculator.add(1, 2)).toBe(3));

test("Subtract 1 and 2 to equal -1", () =>
	expect(calculator.subtract(1, 2)).toBe(-1));

test("Multiply 2 and 4 to equal 8", () =>
	expect(calculator.multiply(2, 4)).toBe(8));

test("divide 4 and 2 to equal 2", () =>
	expect(calculator.divide(4, 2)).toBe(2));

test("number divided by 0 equals null", () =>
	expect(calculator.divide(10, 0)).toBeNull());
