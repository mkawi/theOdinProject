import AddToCart from "./AddToCart";

function ProductCard(props) {
	return (
		<div className="product-card">
			<img src={props.imgsrc} style={{ height: "200px", width: "200px" }} />
			<h3>{props.name}</h3>
			<div className="card-info">
				<div className="product-info">
					<h4>{props.price}</h4>/<h5>{props.ml}</h5>
				</div>
				<AddToCart
					name={props.name}
					price={props.price}
					imgsrc={props.imgsrc}
					addCart={props.addCart}
					toggle={props.toggle}
				/>
			</div>
		</div>
	);
}

export default ProductCard;
