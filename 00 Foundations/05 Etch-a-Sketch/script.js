// Starting Grid Creation
const grid = document.querySelector('#grid');

let initialElements = 16 * 16;

for (let i = 0; i < initialElements; i++) {
	let div = document.createElement('div');
	grid.append(div);
}

// Starting Grid Painter
document.querySelectorAll('div').forEach((div) => {
	div.addEventListener('mouseover', () => {
		const r = Math.floor(Math.random() * 256);
		const g = Math.floor(Math.random() * 256);
		const b = Math.floor(Math.random() * 256);
		div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
	});
});

// Grid Maker
function makeGrid() {
	const perSide = prompt('Enter number of boxes per side');
	const totalBoxes = perSide * perSide;
	const boxSize = 480 / perSide;

	for (let i = 0; i < totalBoxes; i++) {
		let div = document.createElement('div');
		grid.append(div);
	}

	grid.style.gridTemplateColumns = `repeat(${perSide}, ${boxSize}px)`;
	grid.style.gridTemplateRows = `repeat(${perSide}, ${boxSize}px)`;

	document.querySelectorAll('div').forEach((div) => {
		div.addEventListener('mouseover', () => {
			const r = Math.floor(Math.random() * 256);
			const g = Math.floor(Math.random() * 256);
			const b = Math.floor(Math.random() * 256);
			div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
		});
	});
}

// Button
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
	grid.innerHTML = '';
	makeGrid();
});
