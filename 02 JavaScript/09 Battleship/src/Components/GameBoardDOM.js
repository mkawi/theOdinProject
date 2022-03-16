import React from "react";

const GameBoardDOM = (props) => {
  return (
    <div className="game-board">
      {generateSquare(
        props.onGameSquareHover,
        props.onGameSquareLeave,
        props.onClickPlaceShip
      )}
    </div>
  );
};

const generateSquare = (hoverFunc, leaveFunc, onClickPlaceShip) => {
  const componentArr = [];
  for (let i = 0; i < 100; i++) {
    componentArr.push(
      <div
        key={i}
        className="game-board-square"
        data-index={i}
        onMouseOver={hoverFunc}
        onMouseLeave={leaveFunc}
        onClick={onClickPlaceShip}
      ></div>
    );
  }
  return componentArr;
};

export default GameBoardDOM;
