import reverseString from "../code/reverseString";

test("Reverse single word", () => {
	expect(reverseString("gorilla")).toBe("allirog");
});

test("Reverse sentence with spaces", () => {
	expect(reverseString("the big fat gorilla went home")).toBe(
		"emoh tnew allirog taf gib eht"
	);
});

test("Handle extra spaces", () => {
	expect(reverseString("hey, hey    you, you")).toBe("uoy ,uoy    yeh ,yeh");
});
