const images = document.getElementsByClassName("avatarImg");
const avatarInput = document.getElementById("avatarRegister");

for (let i = 0; i < images.length; i++) {
	images[i].addEventListener("click", function (e) {
		// Remove selected
		for (let k = 0; k < images.length; k++) {
			images[k].classList = "avatarImg";
		}

		// Add selected
		e.target.classList.add("selected");

		// Change input value
		let selectedValue;

		selectedValue = e.target.src
			.toString()
			.substring(e.target.src.length - 5)
			.split("")
			.map((letter) => (Number(letter) ? letter : ""))
			.join("");

		avatarInput.value = selectedValue;
	});
}
