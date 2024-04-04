import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { ReactComponent as Cart } from "../cart.svg";

function Header(props) {
	return (
		<header className="App-header">
			<div className="header-container">
				<Link to="/">
					<img src={logo} className="App-logo" alt="logo" />
				</Link>
				<nav>
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
					<Link to="/shop">Shop</Link>
					<div>
						<Cart
							fill="#fff"
							height="20px"
							width="20px"
							className="cart"
							onClick={props.toggle}
						/>
						{props.count > 0 && (
							<span className="cart-count">{props.count}</span>
						)}
					</div>
				</nav>
			</div>
		</header>
	);
}

export default Header;
