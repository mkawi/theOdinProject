const renderContactPage = (() => {
	//container
	const container = document.querySelector("#content");
	const contact = document.createElement("main");
	contact.setAttribute("id", "contact");
	contact.setAttribute("data-tab-content", "");
	contact.innerHTML = `
        <div class="hero">
            <h1>Contact us</h1>
        </div>
        <div class="contact-container">
            <div class="left-section">
                <div class="address">
                <h4>Address</h4>
                    <p>
                    256 Main Street Road, <br />
                    Birmingham, <br />
                    West Midlands,  <br />
                    B39 TK8,  <br />
                    United Kingdom
                    </p>
                </div>
                <div class="hours">
                <h4>Opening Hours</h4>
                    <p>
                    <span>Mon - Thurs:</span> 8am - 8pm<br /><span>Fri - Sun:</span> 8am - 11pm
                    </p>
                </div>
                <div class="phone">
                <h4>Phone Number</h4>
                    <p>(555)-555 5555</p>
                </div>
            </div>
            <div class="right-section">
                <img src="./images/map.png"
            </div>
        </div>`;

	container.appendChild(contact);
})();

export { renderContactPage };
