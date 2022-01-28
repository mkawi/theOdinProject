const renderHomePage = (() => {
	//container
	const container = document.querySelector("#content");
	const home = document.createElement("main");
	home.setAttribute("id", "home");
	home.setAttribute("data-tab-content", "");
	home.className = "active";
	home.innerHTML = `
        <div class="hero center">
            <h1>Come on down for some <span style="color: wheat;">delicious</span> burgers!</h1>
                    <img src="./images/favicon.ico">
            <h2>Tasty and affordable!</h2>
            <div class="btn-container">
                <a data-tab-target="#menu" class="order-now">Order Now</a>
            </div>
        </div>`;

	container.appendChild(home);
})();

export { renderHomePage };
