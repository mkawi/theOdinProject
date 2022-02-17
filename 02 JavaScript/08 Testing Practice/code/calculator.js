const calculator = {
	add: (a, b) => a + b,
	subtract: (a, b) => a - b,
	multiply: (a, b) => a * b,
	divide: (a, b) => {
		return b === 0 ? null : a / b;
	},
};

export default calculator;
