import React from "react";

const PlacementDOM = (props) => {
	return (
		<div id="interface">
			<button className="interface-btn" onClick={props.toggleVertical}>
				Vertical
			</button>
			<button className="interface-btn" id="carrier" onClick={props.changeShip}>
				Carrier
			</button>
			<button
				className="interface-btn"
				id="battleship"
				onClick={props.changeShip}
			>
				Battleship
			</button>
			<button className="interface-btn" id="cruiser" onClick={props.changeShip}>
				Cruiser
			</button>
			<button
				className="interface-btn"
				id="destroyer"
				onClick={props.changeShip}
			>
				Destroyer
			</button>
			<button
				className="interface-btn"
				id="start-game-btn"
				onClick={props.startGame}
			>
				Start Game
			</button>
		</div>
	);
};

export default PlacementDOM;
