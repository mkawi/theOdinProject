import React from "react";

const GameOverDOM = (props) => {
	return (
		<div id="game-over-container">
			{setText(props.player[1])}
			<button onClick={props.reload}>Play Again</button>
		</div>
	);
};

const setText = (player) => {
	if (player === 1) {
		return <h2>You Win! Computer Loses</h2>;
	} else {
		return <h2>Computer Wins! You Lose</h2>;
	}
};

export default GameOverDOM;
