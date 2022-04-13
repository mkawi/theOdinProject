import { Link } from "react-router-dom";
import { FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import logo from "../logo.svg";

function Footer() {
	return (
		<footer>
			<div className="footer-container">
				<div className="footer-desc">
					<Link to="/">
						<img src={logo} className="footer-logo" alt="logo" />
					</Link>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
						orci ligula, rhoncus at dapibus convallis, mollis sit amet dolor.
					</p>
				</div>
				<div className="footer-contact">
					<h4>Contact Us</h4>
					<ul>
						<li>
							<FaPhoneAlt /> 0121 555 2000
						</li>
						<li>
							<FaPaperPlane /> contact@company.com
						</li>
						<li>
							<FaMapMarkerAlt /> 55 Street Avenue, London, United Kingdom
						</li>
					</ul>
				</div>
			</div>
			<div className="copyright">© 2022 Company Name. All rights reserved.</div>
		</footer>
	);
}

export default Footer;
