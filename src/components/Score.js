import React from "react";
import {calculateScore} from "../scoring";

export default function Score({playHistory}) {
  const squares = [...playHistory[playHistory.length - 1]];
  const gridSize = Math.sqrt(squares.length);

  const score = calculateScore({squares: [...squares], gridSize: gridSize});
  const redScore = score.red;
  const blueScore = score.blue;

  return (
    <div id="score">
      <div id="red-score">{`Red: ${redScore}`}</div>
      <div id="blue-score">{`Blue: ${blueScore}`}</div>
    </div>
  );
}
