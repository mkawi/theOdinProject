import "../styles/Listing.css";

function Listing(props) {
	return (
		<div className="listing">
			<div className="listing-header">
				<div className="left">
					<h4 contentEditable="true" onBlur={props.changeRole}>
						{props.role}
					</h4>
				</div>
				<div className="right">
					<span contentEditable="true" onBlur={props.changeCompany}>
						{props.company}
					</span>
					<h4 contentEditable="true" onBlur={props.changeDuration}>
						{props.duration}
					</h4>
				</div>
			</div>
			{props.description ? (
				<p contentEditable="true" onBlur={props.changeDescription}>
					{props.description}
				</p>
			) : (
				""
			)}
		</div>
	);
}

export default Listing;
