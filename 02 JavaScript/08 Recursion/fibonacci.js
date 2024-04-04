function fibs(num) {
	const fibArr = [];

	for (let i = 0; i < num; i++) {
		if (i < 2) {
			fibArr.push(i);
		} else {
			fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
		}
	}

	return fibArr;
}

console.log(fibs(8));
console.log(fibs(12));

function fibsRec(num, arr = [0, 1]) {
	if (arr.length >= num) return arr;

	return fibsRec(num, [...arr, arr[arr.length - 2] + arr[arr.length - 1]]);
}

console.log(fibsRec(8));
console.log(fibsRec(12));
