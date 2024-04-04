import { FaRecycle, FaRegHeart, FaTruck } from "react-icons/fa";

function CompanyLove() {
	return (
		<div className="company-love">
			<h2>Why Customers Love Us</h2>
			<div className="product-features">
				<div className="feature">
					<FaRecycle />
					<h4>EcoFriendly</h4>
					<p>
						We work to do our part leaving the smallest and kindest footprint
						possible
					</p>
				</div>
				<div className="feature">
					<FaRegHeart />
					<h4>Made with Love</h4>
					<p>
						We believe there is a lot of kindness in the world, we just don't
						see it or talk about it
					</p>
				</div>
				<div className="feature">
					<FaTruck />
					<h4>Free Delivery</h4>
					<p>
						Speedy, hassle-free shopping just got even better. Free delivery for
						orders over £25
					</p>
				</div>
			</div>
		</div>
	);
}

export default CompanyLove;
