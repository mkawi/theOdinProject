import { ImCross } from "react-icons/im";

function ProductBasket(props) {
	return (
		<div className="product-basket">
			<img src={props.imgsrc} />
			<h3>{props.name}</h3>
			<input
				type="number"
				value={props.quantity}
				onChange={(e) => props.changeQuantity(props.name, e.target.value)}
			/>
			<h4>{props.price}</h4>
			<ImCross
				className="basketexit"
				onClick={() => props.deleteCartItem(props.name)}
				style={{ marginLeft: "0.5rem", minWidth: "10px", maxWidth: "12px" }}
			/>
		</div>
	);
}

export default ProductBasket;
