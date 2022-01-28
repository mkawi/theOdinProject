/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderContactPage\": () => (/* binding */ renderContactPage)\n/* harmony export */ });\nconst renderContactPage = (() => {\r\n\t//container\r\n\tconst container = document.querySelector(\"#content\");\r\n\tconst contact = document.createElement(\"main\");\r\n\tcontact.setAttribute(\"id\", \"contact\");\r\n\tcontact.setAttribute(\"data-tab-content\", \"\");\r\n\tcontact.innerHTML = `\r\n        <div class=\"hero\">\r\n            <h1>Contact us</h1>\r\n        </div>\r\n        <div class=\"contact-container\">\r\n            <div class=\"left-section\">\r\n                <div class=\"address\">\r\n                <h4>Address</h4>\r\n                    <p>\r\n                    256 Main Street Road, <br />\r\n                    Birmingham, <br />\r\n                    West Midlands,  <br />\r\n                    B39 TK8,  <br />\r\n                    United Kingdom\r\n                    </p>\r\n                </div>\r\n                <div class=\"hours\">\r\n                <h4>Opening Hours</h4>\r\n                    <p>\r\n                    <span>Mon - Thurs:</span> 8am - 8pm<br /><span>Fri - Sun:</span> 8am - 11pm\r\n                    </p>\r\n                </div>\r\n                <div class=\"phone\">\r\n                <h4>Phone Number</h4>\r\n                    <p>(555)-555 5555</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"right-section\">\r\n                <img src=\"./images/map.png\"\r\n            </div>\r\n        </div>`;\r\n\r\n\tcontainer.appendChild(contact);\r\n})();\r\n\r\n\r\n\n\n//# sourceURL=webpack://04-restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderHeader\": () => (/* binding */ renderHeader)\n/* harmony export */ });\nconst renderHeader = (() => {\r\n\t//container\r\n\tconst container = document.querySelector(\"#content\");\r\n\tconst header = document.createElement(\"header\");\r\n\r\n\theader.innerHTML = `\r\n    <h1>Whata<span style=\"color: white;\">burger</span></h1>\r\n    <nav>\r\n      <ul class=\"links\">\r\n          <li data-tab-target=\"#home\" class=\"tab underline\">Home</li>\r\n          <li data-tab-target=\"#menu\" class=\"tab\">Menu</li>\r\n          <li data-tab-target=\"#contact\" class=\"tab\">Contact</li>\r\n      </ul>\r\n    </nav>\r\n  <nav>\r\n  `;\r\n\r\n\tcontainer.appendChild(header);\r\n})();\r\n\r\n\r\n\n\n//# sourceURL=webpack://04-restaurant-page/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderHomePage\": () => (/* binding */ renderHomePage)\n/* harmony export */ });\nconst renderHomePage = (() => {\r\n\t//container\r\n\tconst container = document.querySelector(\"#content\");\r\n\tconst home = document.createElement(\"main\");\r\n\thome.setAttribute(\"id\", \"home\");\r\n\thome.setAttribute(\"data-tab-content\", \"\");\r\n\thome.className = \"active\";\r\n\thome.innerHTML = `\r\n        <div class=\"hero center\">\r\n            <h1>Come on down for some <span style=\"color: wheat;\">delicious</span> burgers!</h1>\r\n                    <img src=\"./images/favicon.ico\">\r\n            <h2>Tasty and affordable!</h2>\r\n            <div class=\"btn-container\">\r\n                <a data-tab-target=\"#menu\" class=\"order-now\">Order Now</a>\r\n            </div>\r\n        </div>`;\r\n\r\n\tcontainer.appendChild(home);\r\n})();\r\n\r\n\r\n\n\n//# sourceURL=webpack://04-restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n\r\nconst tabs = document.querySelectorAll(\"[data-tab-target]\");\r\nconst tabContents = document.querySelectorAll(\"[data-tab-content]\");\r\n\r\n// Navigation tabs\r\ntabs.forEach((tab) =>\r\n\ttab.addEventListener(\"click\", () => {\r\n\t\tconst target = document.querySelector(tab.dataset.tabTarget);\r\n\t\ttabContents.forEach((tabContent) => {\r\n\t\t\ttabContent.classList.remove(\"active\");\r\n\t\t});\r\n\t\ttabs.forEach((tab) => {\r\n\t\t\ttab.classList.remove(\"underline\");\r\n\t\t});\r\n\t\ttab.classList.add(\"underline\");\r\n\t\ttarget.classList.add(\"active\");\r\n\t})\r\n);\r\n\n\n//# sourceURL=webpack://04-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderMenuPage\": () => (/* binding */ renderMenuPage)\n/* harmony export */ });\nconst renderMenuPage = (() => {\r\n\t//container\r\n\tconst container = document.querySelector(\"#content\");\r\n\tconst menu = document.createElement(\"main\");\r\n\tmenu.setAttribute(\"id\", \"menu\");\r\n\tmenu.setAttribute(\"data-tab-content\", \"\");\r\n\tmenu.innerHTML = `\r\n        <div class=\"hero\">\r\n            <h1>Menu</h1>\r\n        </div>\r\n        <div class=\"menu-container\">\r\n            <ul>\r\n                <li>\r\n                    <div class=\"burger-img\"><img src=\"./images/hamburger.webp\"></div>\r\n                    <div class=\"burger-info\">\r\n                        <div class=\"title\"><span>Hamburger</span> <span>£3.50</span></div>\r\n                        <p>Buns, patty, tomato, onions, lettuce, and our secret family recipe.</p>\r\n                    </div>\r\n                </li>\r\n                <li>\r\n                    <div class=\"burger-img\"><img src=\"./images/cheeseburger.png\"></div>\r\n                    <div class=\"burger-info\">\r\n                        <div class=\"title\"><span>Cheeseburger</span> <span>£3.50</span></div>\r\n                        <p>Buns, patty, tomato, onions, lettuce, and most importantly, CHEESE!</p>\r\n                    </div>\r\n                </li>\r\n                <li>\r\n                    <div class=\"burger-img\"><img src=\"./images/double-cheeseburger.jpg\"></div>\r\n                    <div class=\"burger-info\">\r\n                        <div class=\"title\"><span>Double Cheeseburger</span> <span>£5.00</span></div>\r\n                        <p>Same as our cheese burger, but with more cheese and an extra patty.</p>\r\n                    </div>\r\n                </li>\r\n                <li>\r\n                    <div class=\"burger-img\"><img src=\"./images/veggie-burger.webp\"></div>\r\n                    <div class=\"burger-info\">\r\n                        <div class=\"title\"><span>Vegetarian Burger</span> <span>£3.50</span></div>\r\n                        <p>Buns, veggie patty, tomato, onions, lettuce, and our secret family recipe.</p>\r\n                    </div>\r\n                </li>\r\n                <li>\r\n                    <div class=\"burger-img\"><img src=\"./images/bbq-beef-burger.jpg\"></div>\r\n                    <div class=\"burger-info\">\r\n                        <div class=\"title\"><span>BBQ Beef Burger</span> <span>£4.00</span></div>\r\n                        <p>Buns, beef patty, tomato, onions, lettuce, and BBQ sauce.</p>\r\n                    </div>\r\n                </li>\r\n                <li>\r\n                    <div class=\"burger-img\"><img src=\"./images/chicken-burger.jpg\"></div>\r\n                    <div class=\"burger-info\">\r\n                        <div class=\"title\"><span>Chicken Burger</span> <span>£3.50</span></div>\r\n                        <p>Buns, chicken patty, tomato, onions, and lettuce.</p>\r\n                    </div>\r\n                </li>\r\n                <li>\r\n                    <div class=\"burger-img\"><img src=\"./images/fish-burger.jpg\"></div>\r\n                    <div class=\"burger-info\">\r\n                        <div class=\"title\"><span>Fish Burger</span> <span>£3.50</span></div>\r\n                        <p>Buns, fish fillet, tomato, onions, and lettuce.</p>\r\n                    </div>\r\n                </li>\r\n                <li>\r\n                    <div class=\"burger-img\"><img src=\"./images/mega-burger.png\"></div>\r\n                    <div class=\"burger-info\">\r\n                        <div class=\"title\"><span>Mega Burger</span> <span>£5.00</span></div>\r\n                        <p>Buns, tomato, onions, lettuce, cheese with extra patty and bun.</p>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>`;\r\n\r\n\tcontainer.appendChild(menu);\r\n})();\r\n\r\n\r\n\n\n//# sourceURL=webpack://04-restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;