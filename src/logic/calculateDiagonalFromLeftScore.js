import {transposeDiagonalFromLeft} from "./transposeDiagonalFromLeft";
import {calculateHorizontalScore} from "./calculateHorizontalScore";

export function calculateDiagonalFromLeftScore(grid) {
  const diagonalFromLeft = transposeDiagonalFromLeft(grid);
  return calculateHorizontalScore(diagonalFromLeft);
}
