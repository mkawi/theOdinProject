import { ReactComponent as Cart } from "../cart.svg";
import React, { useState } from "react";

function AddToCart(props) {
	const [quantity, setQuantity] = useState(1);

	function updateQuantity(e) {
		if (e.target.value > 0) {
			setQuantity(e.target.value);
		} else {
			setQuantity(1);
		}
	}

	return (
		<div className="addtocart">
			<input type="number" onChange={updateQuantity} value={quantity} />
			<button
				onClick={() => {
					props.addCart(props.imgsrc, props.name, quantity, props.price);
					props.toggle();
				}}
			>
				<Cart fill="#fff" height="20px" width="20px" className="cart" />
			</button>
		</div>
	);
}

export default AddToCart;
