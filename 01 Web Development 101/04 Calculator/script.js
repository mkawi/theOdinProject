// DOM Selectors
const screen = document.querySelector("#screen");
const reset = document.querySelector("#reset");
const del = document.querySelector("#delete");
const equals = document.querySelector("#equal");
const decimal = document.querySelector("#decimal");
const numbers = document.querySelectorAll(".num");
const ops = document.querySelectorAll(".operator");

let displayVal = [0];

// ==================
// Operator Functions
// ==================

function operation() {
	if (displayVal.length === 1 || displayVal.length === 2) {
		screen.innerText = displayVal[0];
		displayVal.splice(1);
		return displayVal[0];
	}

	if (typeof displayVal[displayVal.length - 1] === "string") displayVal.pop();

	joinNumbers();

	if (displayVal.indexOf(".") !== -1) {
		dot();
	}
	if (displayVal.indexOf("/") !== -1) {
		divide();
	}
	if (displayVal.indexOf("*") !== -1) {
		multiply();
	}
	if (displayVal.indexOf("-") !== -1) {
		subtract();
	}
	if (displayVal.indexOf("+") !== -1) {
		add();
	}

	screen.innerText = displayVal;
}

function add() {
	for (let i = 0; i < displayVal.length; i++) {
		if (displayVal[i] === "+") {
			displayVal.splice([i - 1], 3, displayVal[i - 1] + displayVal[i + 1]);
			i = 0;
		}
	}
}

function subtract() {
	for (let i = 0; i < displayVal.length; i++) {
		if (displayVal[i] === "-") {
			displayVal.splice([i - 1], 3, displayVal[i - 1] - displayVal[i + 1]);
			i = 0;
		}
	}
}

function multiply() {
	for (let i = 1; i < displayVal.length; i++) {
		if (displayVal[i] === "*") {
			displayVal.splice([i - 1], 3, displayVal[i - 1] * displayVal[i + 1]);
			i = 0;
		}
	}
}

function divide() {
	for (let i = 0; i < displayVal.length; i++) {
		if (displayVal[i] === "/") {
			displayVal.splice([i - 1], 3, displayVal[i - 1] / displayVal[i + 1]);
			i = 0;
		}
	}
}

function dot() {
	for (let i = 1; i < displayVal.length; i++) {
		if (displayVal[i] === ".") {
			displayVal.splice(i - 1, 3, +`${displayVal[i - 1]}.${displayVal[i + 1]}`);
			i = 0;
		}
	}
}

// ==================
// Main Functions
// ==================

function pressKey(btn) {
	if (screen.innerText === "0") {
		screen.innerText = "";
	}

	if (displayVal.length === 15) {
	} else {
		screen.innerText += btn;
		displayVal.push(btn);
	}

	console.log(displayVal);
	console.log(screen.innerText);
}

function trimOperations(operator) {
	if (displayVal[0] === operator) {
		screen.innerText = "";
		displayVal.pop();
	}
	for (let i = 0; i < displayVal.length; i++) {
		if (
			typeof displayVal[i] === "string" &&
			typeof displayVal[i + 1] === "string"
		) {
			displayVal.pop();
			screen.innerText = displayVal.join("");
		}
	}
}
function joinNumbers() {
	for (let i = 0; i < displayVal.length; i++) {
		if (
			typeof displayVal[i] === "number" &&
			typeof displayVal[i + 1] === "number"
		) {
			displayVal.splice(
				displayVal.indexOf(displayVal[i]),
				2,
				displayVal[i] * 10 + displayVal[i + 1]
			);
			i = -1;
		}
	}
}

// ==================
// Event Listeners
// ==================

numbers.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		pressKey(Number(e.target.innerText));
	});
});

ops.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		const operator = e.target.innerText;
		if (operator === "+") {
			pressKey("+");
			trimOperations("+");
		} else if (operator === "-") {
			pressKey("-");
			trimOperations("-");
		} else if (operator === "÷") {
			pressKey("/");
			trimOperations("/");
		} else if (operator === "x") {
			pressKey("*");
			trimOperations("*");
		}
	});
});

equals.addEventListener("click", operation);

decimal.addEventListener("click", () => {
	pressKey(".");
	trimOperations(".");

	// Limit Decimals
	for (let i = displayVal.length - 2; i >= 0; i--) {
		if (typeof displayVal[i] === "string") {
			if (displayVal[i] === ".") {
				displayVal.pop();
				screen.innerText = screen.innerText.slice(
					0,
					screen.innerText.length - 1
				);
			}
			break;
		}
	}

	if (screen.innerText === ".") {
		screen.innerText = "0.";
	}
});

del.addEventListener("click", () => {
	displayVal.pop();
	screen.innerText = screen.innerText.slice(0, screen.innerText.length - 1);
	if (screen.innerText === "") {
		screen.innerText = "0";
		displayVal = [0];
	}
});

reset.addEventListener("click", () => {
	screen.innerText = "0";
	displayVal = [0];
});
