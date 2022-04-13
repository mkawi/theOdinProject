import { Link } from "react-router-dom";

function Hero(props) {
	return (
		<section className="hero" style={props.style}>
			<div className="hero-container">
				<h2>{props.title}</h2>
				{props.title === "Nourish Your Skin" ? (
					<Link to="/shop">
						<button class="btn">Shop Now</button>
					</Link>
				) : null}
			</div>
		</section>
	);
}

export default Hero;
