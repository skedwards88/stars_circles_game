import {transposeDiagonalFromRight} from "./transposeDiagonalFromRight";
import {calculateHorizontalScore} from "./calculateHorizontalScore";

export function calculateDiagonalFromRightScore(grid) {
  let diagonalFromRight = transposeDiagonalFromRight(grid);
  return calculateHorizontalScore(diagonalFromRight);
}
