import ProductCard from "./ProductCard";

function FeaturedProducts(props) {
	return (
		<div className="featured-products">
			<h2>Featured Products</h2>
			<div className="products">
				<ProductCard
					imgsrc="./images/rdn-niacinamide-10pct-zinc-1pct-30ml.webp"
					name="Niacinamide 10% Zinc 1%"
					ml="30ml"
					price="£5.49"
					addCart={props.addCart}
					toggle={props.toggle}
				/>
				<ProductCard
					imgsrc="./images/rdn-aha-30pct-bha-2pct-peeling-solution-30ml.webp"
					name="AHA/BHA Peeling Solution"
					ml="30ml"
					price="£6.99"
					addCart={props.addCart}
					toggle={props.toggle}
				/>
				<ProductCard
					imgsrc="./images/rdn-salicylic-acid-2pct-masque-50ml.webp"
					name="Salicylic Acid 2% Masque"
					ml="50ml"
					price="£3.99"
					addCart={props.addCart}
					toggle={props.toggle}
				/>
			</div>
		</div>
	);
}

export default FeaturedProducts;
