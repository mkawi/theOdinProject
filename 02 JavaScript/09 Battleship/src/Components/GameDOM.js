import React from "react";

const GameDOM = (props) => {
  return [
    <h2>Sink the enemies ships</h2>,
    <div id="game-board-container">
      <div className="game-board">
        {generatePlayerSquare(props.positions[0])}
      </div>
      <div className="game-board">
        {generateAiSquare(props.positions[1], props.onClickAttack)}
      </div>
    </div>,
  ];
};

const generatePlayerSquare = (positions) => {
  const componentArr = [];
  for (let i = 0; i < 100; i++) {
    componentArr.push(
      <div
        key={`player-game-square-${i}`}
        className="player-game-board-square"
        data-index={`p${i}`}
        data-ship-id={returnShipId(i, positions)}
      ></div>
    );
  }
  return componentArr;
};

const returnShipId = (currentPos, allPos) => {
  let shipId = -1;
  allPos.forEach((element, i) => {
    if (element.includes(currentPos)) {
      shipId = i;
    }
  });
  return shipId;
};

const generateAiSquare = (positions, onClickAttack) => {
  const componentArr = [];
  for (let i = 0; i < 100; i++) {
    componentArr.push(
      <div
        key={`ai-game-square-${i}`}
        className="ai-game-board-square"
        onClick={onClickAttack}
        data-index={`a${i}`}
        data-ship-id={returnShipId(i, positions)}
      ></div>
    );
  }
  return componentArr;
};

export default GameDOM;
