import {transposeGrid} from "./transposeGrid";
import {calculateHorizontalScore} from "./calculateHorizontalScore";
import type {Score, Square} from "../Types";

export function calculateVerticalScore(grid: Square[][]): Score {
  // transpose the grid so that the rows become the columns
  const vertical = transposeGrid(grid);

  // Calculate the transposed grid score
  return calculateHorizontalScore(vertical);
}
