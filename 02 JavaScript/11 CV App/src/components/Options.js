import "../styles/Options.css";

function Options(props) {
	return (
		<div className="option-btns">
			<button className="add" onClick={props.add}>
				+
			</button>
			<button className="remove" onClick={props.remove}>
				-
			</button>
		</div>
	);
}

export default Options;
