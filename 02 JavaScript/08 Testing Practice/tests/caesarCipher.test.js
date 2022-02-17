import caesarCipher from "../code/caesarCipher";

test("hello world equals mjqqt btwqi with a shift of 5", () => {
	expect(caesarCipher("hello world", 5)).toBe("mjqqt btwqi");
});

test("handle negative numbers", () => {
	expect(caesarCipher("hello world", -10)).toBe("xubbe mehbt");
});

test("handle large positive shifts", () =>
	expect(caesarCipher("hello world", 1000)).toBe("tqxxa iadxp"));

test("handle capitals", () =>
	expect(caesarCipher("HeLlO WoRlD", 5)).toBe("MjQqT BtWqI"));
