// Dropdown Menu
// =======================

function openDropdown() {
	document.querySelector(".dropdown-content").classList.toggle("hide");
}

document
	.querySelector(".dropdown-menu")
	.addEventListener("click", openDropdown);

window.onclick = function (e) {
	if (!e.target.matches(".dropdown-btn")) {
		var myDropdown = document.querySelector(".dropdown-content");
		if (!myDropdown.classList.contains("hide")) {
			myDropdown.classList.add("hide");
		}
	}
};

// Slideshow
// =======================

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
	showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	let i;
	const slides = document.querySelectorAll(".slide img");
	const dots = document.querySelectorAll(".dot");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}

document.querySelector(".left-arrow").addEventListener("click", () => {
	plusSlides(-1);
});

document.querySelector(".right-arrow").addEventListener("click", () => {
	plusSlides(1);
});

setInterval(() => {
	showSlides(slideIndex);
	slideIndex++;
}, 4000);

// Form Validation
// =======================

const mail = document.querySelector("[type=email]");

mail.addEventListener("change", (e) => {
	const emailRegExp =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if (mail.value.match(emailRegExp)) {
		mail.classList = "valid";
	} else {
		mail.classList = "invalid";
	}
});

const country = document.querySelector("#country");

country.addEventListener("change", (e) => {
	const countryRegExp = /[a-zA-Z]/g;
	if (country.value.match(countryRegExp)) {
		country.classList = "valid";
	} else {
		country.classList = "invalid";
	}
});

const zip = document.querySelector("#zip");

zip.addEventListener("change", (e) => {
	const zipRegExp = /[a-zA-Z0-9]/g;
	if (zip.value.match(zipRegExp)) {
		zip.classList = "valid";
	} else {
		zip.classList = "invalid";
	}
});

const pass = document.querySelector("#pass");

pass.addEventListener("change", (e) => {
	const passRegExp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
	if (pass.value.match(passRegExp)) {
		pass.classList = "valid";
	} else {
		pass.classList = "invalid";
	}
});

const button = document.querySelector("button");

button.addEventListener("click", (e) => {
	if (
		mail.classList.contains("valid") &&
		country.classList.contains("valid") &&
		zip.classList.contains("valid") &&
		pass.classList.contains("valid")
	) {
		button.classList = "success";
		button.innerText = "Success!";
	} else {
		button.classList = "error";
		button.innerText = "Error! Please check all fields";
	}
});
