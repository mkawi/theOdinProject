Number.prototype.mod = function (n) {
	return ((this % n) + n) % n;
};

const caesarCipher = (string, shift) => {
	return string.replace(/[a-zA-Z]/g, (letter) => {
		let newLetter = String.fromCharCode(
			(letter.toLowerCase().charCodeAt(0) + shift - 97).mod(26) + 97
		);
		return letter === letter.toUpperCase()
			? newLetter.toUpperCase()
			: newLetter;
	});
};

export default caesarCipher;
