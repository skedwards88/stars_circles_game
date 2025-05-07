import {transposeDiagonalFromLeft} from "./transposeDiagonalFromLeft";
import {calculateHorizontalScore} from "./calculateHorizontalScore";
import type {Score, Square} from "../Types";

export function calculateDiagonalFromLeftScore(grid: Square[][]): Score {
  const diagonalFromLeft = transposeDiagonalFromLeft(grid);
  return calculateHorizontalScore(diagonalFromLeft);
}
