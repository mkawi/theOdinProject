import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import ProductBasket from "./ProductBasket";

function Basket(props) {
	return (
		<>
			<div className="backdrop" onClick={props.toggle}></div>
			<div className="basket">
				<ImCross className="basketexit" onClick={props.toggle} />
				<h2>Your Basket</h2>
				{props.state.length !== 0 && (
					<div>
						<div className="basket-table">
							<h4>Qnty</h4>
							<h4>Price</h4>
						</div>
						<hr />
					</div>
				)}
				{props.state.map((product, index) => {
					return (
						<ProductBasket
							key={index}
							imgsrc={product.imgsrc}
							name={product.name}
							quantity={product.quantity}
							price={product.price}
							changeQuantity={props.changeQuantity}
							deleteCartItem={props.deleteCartItem}
						/>
					);
				})}
				{props.state.length === 0 ? (
					<>
						<div className="basket-total">
							<p>Your basket is empty</p>
						</div>
						<Link to="/shop">
							<button className="checkout">BROWSE PRODUCTS</button>
						</Link>
					</>
				) : (
					<>
						<div className="basket-total">
							<h3>
								Total Cost = £
								{Number(
									props.state.reduce((preValue, currentValue) => {
										const tempArray = currentValue.price.split("£");
										tempArray.shift();
										const price = Number(tempArray.join(""));
										const cost = Number(currentValue.quantity) * price;

										return preValue + cost;
									}, 0)
								).toFixed(2)}
							</h3>
						</div>
						<button
							className="checkout"
							style={{ marginTop: "1.5rem" }}
							onClick={() => alert("Send Customer to Checkout Page")}
						>
							CHECKOUT
						</button>
					</>
				)}
			</div>
		</>
	);
}

export default Basket;
