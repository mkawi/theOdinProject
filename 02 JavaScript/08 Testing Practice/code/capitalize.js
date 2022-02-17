function capitalize(string) {
	let newString = string
		.split(" ")
		.map((word) =>
			word[0] ? word[0].toUpperCase() + word.split("").slice(1).join("") : word
		)
		.join(" ");
	return newString;
}

export default capitalize;
