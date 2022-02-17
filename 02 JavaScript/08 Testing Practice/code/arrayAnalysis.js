const ArrayAnalysis = (array) => {
	return {
		average: array.reduce((accum, curr) => accum + curr) / array.length,
		min: array.sort((a, b) => a - b)[0],
		max: array.sort((a, b) => b - a)[0],
		length: array.length,
	};
};

export default ArrayAnalysis;
