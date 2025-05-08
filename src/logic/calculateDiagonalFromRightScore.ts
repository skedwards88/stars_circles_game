import {transposeDiagonalFromRight} from "./transposeDiagonalFromRight";
import {calculateHorizontalScore} from "./calculateHorizontalScore";
import type {Score, Square} from "../Types";

export function calculateDiagonalFromRightScore(grid: Square[][]): Score {
  const diagonalFromRight = transposeDiagonalFromRight(grid);
  return calculateHorizontalScore(diagonalFromRight);
}
