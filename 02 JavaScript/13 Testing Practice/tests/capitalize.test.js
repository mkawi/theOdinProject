import capitalize from "../code/capitalize";

test("inputs gorilla and returns Gorilla", () => {
	expect(capitalize("gorilla")).toBe("Gorilla");
});

test("Capitalize Every Word", () => {
	expect(capitalize("the big fat gorilla went home")).toBe(
		"The Big Fat Gorilla Went Home"
	);
});

test("Handle extra spaces", () => {
	expect(capitalize("hey, hey    you, you")).toBe("Hey, Hey    You, You");
});
