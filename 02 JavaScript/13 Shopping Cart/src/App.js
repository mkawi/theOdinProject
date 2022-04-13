import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Shop from "./Pages/Shop";
import Basket from "./Components/Basket";
import "./App.css";

function App() {
	const [openBasket, setOpenBasket] = useState("closed");
	const [cart, setCart] = useState([]);

	function addToCart(pSrc, pName, pQuantity, pPrice) {
		if (cart.some((product) => product.name === pName)) {
			setCart((prevCart) =>
				prevCart.map((product) =>
					product.name === pName
						? {
								...product,
								quantity: String(Number(product.quantity) + Number(pQuantity)),
						  }
						: product
				)
			);
		} else {
			setCart((prevCart) => [
				...prevCart,
				{ imgsrc: pSrc, name: pName, quantity: pQuantity, price: pPrice },
			]);
		}
	}

	function changeQuantity(pName, value) {
		if (value <= 0) {
			setCart((prevCart) =>
				prevCart.filter((product) => product.name !== pName)
			);
		} else {
			setCart((prevCart) =>
				prevCart.map((product) =>
					product.name === pName
						? {
								...product,
								quantity: value,
						  }
						: product
				)
			);
		}
	}

	function deleteCartItem(pName) {
		setCart((prevCart) => prevCart.filter((product) => product.name !== pName));
	}

	function toggleBasket() {
		if (openBasket === "open") {
			setOpenBasket("closed");
		} else {
			setOpenBasket("open");
		}
	}

	return (
		<div className="App">
			<Header toggle={toggleBasket} count={cart.length} />
			<Routes>
				<Route
					path="/"
					element={<Home addCart={addToCart} toggle={toggleBasket} />}
				/>
				<Route
					path="shop"
					element={<Shop addCart={addToCart} toggle={toggleBasket} />}
				/>
				<Route path="about" element={<About />} />
			</Routes>
			<Footer />
			{openBasket === "open" && (
				<Basket
					toggle={toggleBasket}
					state={cart}
					changeQuantity={changeQuantity}
					deleteCartItem={deleteCartItem}
				/>
			)}
		</div>
	);
}

export default App;
