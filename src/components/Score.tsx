import {calculateScore} from "../logic/calculateScore";
import type {Square} from "../Types";

export default function Score({
  playHistory,
}: {
  playHistory: Square[][];
}): React.JSX.Element {
  const squares = [...playHistory[playHistory.length - 1]];

  const score = calculateScore({squares: [...squares]});
  const redScore = score.red;
  const blueScore = score.blue;

  return (
    <div id="score">
      <div id="red-score">{`Red: ${redScore}`}</div>
      <div id="blue-score">{`Blue: ${blueScore}`}</div>
    </div>
  );
}
