import { renderHeader } from "./header";
import { renderHomePage } from "./home";
import { renderMenuPage } from "./menu";
import { renderContactPage } from "./contact";

const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

// Navigation tabs
tabs.forEach((tab) =>
	tab.addEventListener("click", () => {
		const target = document.querySelector(tab.dataset.tabTarget);
		tabContents.forEach((tabContent) => {
			tabContent.classList.remove("active");
		});
		tabs.forEach((tab) => {
			tab.classList.remove("underline");
		});
		tab.classList.add("underline");
		target.classList.add("active");
	})
);
