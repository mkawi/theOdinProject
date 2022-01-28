const renderMenuPage = (() => {
	//container
	const container = document.querySelector("#content");
	const menu = document.createElement("main");
	menu.setAttribute("id", "menu");
	menu.setAttribute("data-tab-content", "");
	menu.innerHTML = `
        <div class="hero">
            <h1>Menu</h1>
        </div>
        <div class="menu-container">
            <ul>
                <li>
                    <div class="burger-img"><img src="./images/hamburger.webp"></div>
                    <div class="burger-info">
                        <div class="title"><span>Hamburger</span> <span>£3.50</span></div>
                        <p>Buns, patty, tomato, onions, lettuce, and our secret family recipe.</p>
                    </div>
                </li>
                <li>
                    <div class="burger-img"><img src="./images/cheeseburger.png"></div>
                    <div class="burger-info">
                        <div class="title"><span>Cheeseburger</span> <span>£3.50</span></div>
                        <p>Buns, patty, tomato, onions, lettuce, and most importantly, CHEESE!</p>
                    </div>
                </li>
                <li>
                    <div class="burger-img"><img src="./images/double-cheeseburger.jpg"></div>
                    <div class="burger-info">
                        <div class="title"><span>Double Cheeseburger</span> <span>£5.00</span></div>
                        <p>Same as our cheese burger, but with more cheese and an extra patty.</p>
                    </div>
                </li>
                <li>
                    <div class="burger-img"><img src="./images/veggie-burger.webp"></div>
                    <div class="burger-info">
                        <div class="title"><span>Vegetarian Burger</span> <span>£3.50</span></div>
                        <p>Buns, veggie patty, tomato, onions, lettuce, and our secret family recipe.</p>
                    </div>
                </li>
                <li>
                    <div class="burger-img"><img src="./images/bbq-beef-burger.jpg"></div>
                    <div class="burger-info">
                        <div class="title"><span>BBQ Beef Burger</span> <span>£4.00</span></div>
                        <p>Buns, beef patty, tomato, onions, lettuce, and BBQ sauce.</p>
                    </div>
                </li>
                <li>
                    <div class="burger-img"><img src="./images/chicken-burger.jpg"></div>
                    <div class="burger-info">
                        <div class="title"><span>Chicken Burger</span> <span>£3.50</span></div>
                        <p>Buns, chicken patty, tomato, onions, and lettuce.</p>
                    </div>
                </li>
                <li>
                    <div class="burger-img"><img src="./images/fish-burger.jpg"></div>
                    <div class="burger-info">
                        <div class="title"><span>Fish Burger</span> <span>£3.50</span></div>
                        <p>Buns, fish fillet, tomato, onions, and lettuce.</p>
                    </div>
                </li>
                <li>
                    <div class="burger-img"><img src="./images/mega-burger.png"></div>
                    <div class="burger-info">
                        <div class="title"><span>Mega Burger</span> <span>£5.00</span></div>
                        <p>Buns, tomato, onions, lettuce, cheese with extra patty and bun.</p>
                    </div>
                </li>
            </ul>
        </div>`;

	container.appendChild(menu);
})();

export { renderMenuPage };
