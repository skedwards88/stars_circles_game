import {convert1Dto2D} from "./convert1Dto2D";
import {calculateHorizontalScore} from "./calculateHorizontalScore";
import {calculateVerticalScore} from "./calculateVerticalScore";
import {calculateDiagonalFromLeftScore} from "./calculateDiagonalFromLeftScore";
import {calculateDiagonalFromRightScore} from "./calculateDiagonalFromRightScore";

export function calculateScore({squares}) {
  // Convert the 1D array into a 2D array so we can calculate the score geometrically
  const grid = convert1Dto2D(squares);

  const horizontalScores = calculateHorizontalScore(grid);
  const verticalScores = calculateVerticalScore(grid);
  const diagonalFromLeftScores = calculateDiagonalFromLeftScore(grid);
  const diagonalFromRightScores = calculateDiagonalFromRightScore(grid);

  const redScore =
    horizontalScores.red +
    verticalScores.red +
    diagonalFromLeftScores.red +
    diagonalFromRightScores.red;
  const blueScore =
    horizontalScores.blue +
    verticalScores.blue +
    diagonalFromLeftScores.blue +
    diagonalFromRightScores.blue;
  return {
    red: redScore,
    blue: blueScore,
  };
}
