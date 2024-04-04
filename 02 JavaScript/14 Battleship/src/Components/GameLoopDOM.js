import React, { useState, useEffect } from "react";
import GameBoardDOM from "./GameBoardDOM";
import GameLoop from "./GameLoop";
import PlacementDOM from "./PlacementDOM";
import GameDOM from "./GameDOM";
import GameOverDOM from "./GameOverDOM";

const GameLoopDOM = () => {
	const [placeShips, setPlaceShips] = useState(true);
	// eslint-disable-next-line no-unused-vars
	const [gl, setGl] = useState(GameLoop());
	const [vertical, setVertical] = useState(false);
	const [shipPlacementSize, setShipPlacementSize] = useState(5);
	const [currentSelectedShip, setCurrentSelectedShip] = useState("carrier");
	const [shipPositions, setShipPositions] = useState([]);
	const [currentColor, setCurrentColor] = useState("#06d6a0");
	const [gameOver, setGameOver] = useState([false, null]);

	useEffect(() => {
		gl.setUpPlayers();
		gl.placeShipsRandom();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const startGame = () => {
		if (gl.allShipsPlaced()) {
			setPlaceShips(false);
		}
	};

	const onClickPlaceShip = (ev) => {
		const startIndex = ev.target.getAttribute("data-index");
		const indices = gl.calculateIndices(
			+startIndex,
			vertical,
			shipPlacementSize
		);
		if (indices !== false) {
			const p1GameBoard = gl.returnGameBoards()[0];
			if (
				!checkIfPlacementContainsShip(indices) &&
				!p1GameBoard.checkIfPlaced(currentSelectedShip)
			) {
				const tempShipPosition = [...shipPositions];
				const selectedSquares = findGameSquaresWithIndices(indices);
				selectedSquares.forEach((element) => {
					tempShipPosition.push(+element.getAttribute("data-index"));
					element.style.backgroundColor = currentColor;
				});
				setShipPositions(tempShipPosition);
				gl.placeShip(1, currentSelectedShip, indices);
				setShipBtnDisable();
				incrementCurrentSelectedShip();
				console.log("here");
			}
		}
	};

	const incrementCurrentSelectedShip = () => {
		if (currentSelectedShip === "carrier") {
			setCurrentColor("#06d6a0");
			setCurrentSelectedShip("battleship");
			setShipPlacementSize(4);
		} else if (currentSelectedShip === "battleship") {
			setCurrentColor("#06d6a0");
			setCurrentSelectedShip("cruiser");
			setShipPlacementSize(3);
		} else if (currentSelectedShip === "cruiser") {
			setCurrentColor("#06d6a0");
			setCurrentSelectedShip("destroyer");
			setShipPlacementSize(2);
		}
	};

	const onClickAttack = (ev) => {
		const targetIndex = +ev.target.getAttribute("data-index").split("a")[1];
		const hitStatus = gl.attackShip(1, targetIndex);
		if (hitStatus === "hit") {
			console.log(ev.target);
			ev.target.style.backgroundColor = "#ef3e67";
		} else if (hitStatus === "miss") {
			ev.target.style.opacity = 0.25;
		}

		if (hitStatus !== "attacked") {
			const attackedIndex = gl.attackShip(2);
			const attackedDiv = document.querySelector(
				`[data-index="p${attackedIndex}"]`
			);
			if (attackedDiv.getAttribute("data-ship-id") !== "-1") {
				attackedDiv.style.backgroundColor = "#ef3e67";
			} else {
				attackedDiv.style.opacity = 0.25;
			}
		}
		const gmOv = gl.isGameOver();
		if (gmOv[0]) {
			setGameOver(gmOv);
		}
	};

	const setShipBtnDisable = () => {
		const btn = document.querySelector(`#${currentSelectedShip}`);
		btn.style.opacity = 0.25;
	};

	const changeShip = (ev) => {
		const shipName = ev.target.textContent;
		if (shipName === "Carrier") {
			setCurrentColor("#06d6a0");
			setCurrentSelectedShip("carrier");
			setShipPlacementSize(5);
		} else if (shipName === "Battleship") {
			setCurrentColor("#06d6a0");
			setCurrentSelectedShip("battleship");
			setShipPlacementSize(4);
		} else if (shipName === "Cruiser") {
			setCurrentColor("#06d6a0");
			setCurrentSelectedShip("cruiser");
			setShipPlacementSize(3);
		} else if (shipName === "Destroyer") {
			setCurrentColor("#06d6a0");
			setCurrentSelectedShip("destroyer");
			setShipPlacementSize(2);
		}
	};

	const toggleVertical = (ev) => {
		const btn = ev.target;
		if (vertical) {
			btn.textContent = "Vertical";
			setVertical(false);
		} else {
			btn.textContent = "Horizontal";
			setVertical(true);
		}
	};

	const onGameSquareHover = (ev) => {
		const startIndex = ev.target.getAttribute("data-index");
		const indices = gl.calculateIndices(
			+startIndex,
			vertical,
			shipPlacementSize
		);
		if (indices !== false) {
			if (!checkIfPlacementContainsShip(indices)) {
				const selectedSquares = findGameSquaresWithIndices(indices);
				selectedSquares.forEach((element) => {
					if (element.style.backgroundColor !== "red") {
						element.style.backgroundColor = "darkslategray";
					}
				});
			}
		}
	};

	const checkIfPlacementContainsShip = (indices) => {
		let shipFound = false;
		indices.forEach((element) => {
			if (shipPositions.includes(element)) {
				shipFound = true;
			}
		});
		return shipFound;
	};

	const findGameSquaresWithIndices = (indices) => {
		const allSquares = document.querySelectorAll(".game-board-square");
		const selectedSquares = [];
		indices.forEach((element) => {
			selectedSquares.push(allSquares[element]);
		});
		return selectedSquares;
	};

	const onGameSquareLeave = (ev) => {
		const allSquares = [...document.querySelectorAll(".game-board-square")];
		allSquares.forEach((element) => {
			if (element.style.backgroundColor === "darkslategray") {
				element.style.backgroundColor = "#596291 ";
			}
		});
	};

	const reloadPage = () => {
		window.location.reload();
	};

	const checkIfGameHasStarted = () => {
		if (gameOver[0]) {
			return <GameOverDOM player={gameOver} reload={reloadPage} />;
		} else {
			if (placeShips) {
				return [
					<PlacementDOM
						key="pl-dom"
						toggleVertical={toggleVertical}
						changeShip={changeShip}
						startGame={startGame}
					/>,
					<GameBoardDOM
						key="gb-dom"
						onGameSquareHover={onGameSquareHover}
						onGameSquareLeave={onGameSquareLeave}
						onClickPlaceShip={onClickPlaceShip}
					/>,
				];
			} else {
				return (
					<GameDOM
						positions={gl.returnShipPositions()}
						onClickAttack={onClickAttack}
					/>
				);
			}
		}
	};

	return <div id="game-container">{checkIfGameHasStarted()}</div>;
};

export default GameLoopDOM;
