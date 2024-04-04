import "./Score.css";

function Score(props) {
	return (
		<div className="score">
			<h4>
				Score: <span className="bold">{props.score}</span>
			</h4>
			<h4>
				Best Score: <span className="bold">{props.bestscore}</span>
			</h4>
		</div>
	);
}

export default Score;
