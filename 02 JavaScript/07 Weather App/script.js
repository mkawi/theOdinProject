const APIKEY = "6b501217fd200ab62c5fc534ed425102";
const header = document.querySelector("header");
const city = document.querySelector(".location");
const search = document.querySelector(".search");
const input = document.querySelector("#city");
const days = document.querySelector(".days");

async function getWeatherData(city) {
	try {
		const coords = await fetch(
			`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${APIKEY}`
		);
		const coordsRes = await coords.json();
		const lat = await coordsRes[0].lat;
		const lon = await coordsRes[0].lon;
		const weather = await fetch(
			`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly,alerts&appid=${APIKEY}`
		);
		const weatherRes = await weather.json();
		console.log(weatherRes);
		search.classList = "search valid";

		return weatherRes;
	} catch {
		input.value = "";
		input.placeholder = "No matching location found!";
		search.classList = "search invalid";
	}
}

const iconUrl = (code) => `https://openweathermap.org/img/wn/${code}.png`;

async function buildUI(val) {
	const data = await getWeatherData(val);

	header.innerHTML = `
        <div class="today-icon">
            <img src=${iconUrl(data.current.weather[0].icon + "@4x")}>
        </div>
        <div class="today-temp">
            <h2>${data.current.temp}<span class="degrees">&#176;C</span></h2>
        </div>
    `;

	city.innerHTML = `
        <h3>${val}</h3>
        <h4>${data.current.weather[0].description}</h4>
    `;

	const weekData = data.daily.slice(1);
	days.innerHTML = "";
	weekData.forEach((element) => {
		const day = String(new Date(element.dt * 1000)).split(" ")[0];
		const div = document.createElement("div");
		div.classList = "day";

		div.innerHTML = `
        <div class="contents">
            <h4>${day.toUpperCase()}</h4>
            <h5>${element.temp.day}<span class="degrees">&#176;C</span></h5>
        </div>
        <img src=${iconUrl(element.weather[0].icon + "@2x")}>
        `;

		days.appendChild(div);
	});
}

input.addEventListener("keyup", (e) => {
	if (e.keyCode === 13) {
		buildUI(input.value);
	}
});
