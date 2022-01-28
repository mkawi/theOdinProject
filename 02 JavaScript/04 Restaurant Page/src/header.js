const renderHeader = (() => {
	//container
	const container = document.querySelector("#content");
	const header = document.createElement("header");

	header.innerHTML = `
    <h1>Whata<span style="color: white;">burger</span></h1>
    <nav>
      <ul class="links">
          <li data-tab-target="#home" class="tab underline">Home</li>
          <li data-tab-target="#menu" class="tab">Menu</li>
          <li data-tab-target="#contact" class="tab">Contact</li>
      </ul>
    </nav>
  <nav>
  `;

	container.appendChild(header);
})();

export { renderHeader };
