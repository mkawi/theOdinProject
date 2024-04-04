import { Link } from "react-router-dom";
import Hero from "../Components/Hero";
import ProductCard from "../Components/ProductCard";

function Shop(props) {
	return (
		<main>
			<Hero title="Shop" style={{ height: "20vh" }} />
			<div className="shop">
				<div className="shop-products">
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
				<div className="shop-products">
					<ProductCard
						imgsrc="./images/rdn-behentrimonium-chloride-2pct-conditioner-240ml.webp"
						name="Behentrimonium Conditioner"
						ml="240ml"
						price="£7.49"
						addCart={props.addCart}
						toggle={props.toggle}
					/>
					<ProductCard
						imgsrc="./images/rdn-buffet-copper-bottle-30ml.webp"
						name="Buffet Copper Peptides"
						ml="30ml"
						price="£4.99"
						addCart={props.addCart}
						toggle={props.toggle}
					/>
					<ProductCard
						imgsrc="./images/rdn-caffeine-solution-5pct-egcg-30ml.webp"
						name="5% Caffeine Solution"
						ml="50ml"
						price="£3.99"
						addCart={props.addCart}
						toggle={props.toggle}
					/>
				</div>
				<div className="shop-products">
					<ProductCard
						imgsrc="./images/rdn-natural-moisturizing-factors-ha-30ml.webp"
						name="Natural Moisturizing Factors"
						ml="30ml"
						price="£5.49"
						addCart={props.addCart}
						toggle={props.toggle}
					/>
					<ProductCard
						imgsrc="./images/rdn-concealer-30-y-8ml.webp"
						name="Concealer 365"
						ml="8ml"
						price="£4.49"
						addCart={props.addCart}
						toggle={props.toggle}
					/>
					<ProductCard
						imgsrc="./images/rdn-glycolic-acid-7pct-toning-solution-240ml.webp"
						name="Glycolic Acid 7% Toner"
						ml="240ml"
						price="£6.99"
						addCart={props.addCart}
						toggle={props.toggle}
					/>
				</div>
			</div>
		</main>
	);
}

export default Shop;
