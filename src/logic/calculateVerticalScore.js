import {transposeGrid} from "./transposeGrid";
import {calculateHorizontalScore} from "./calculateHorizontalScore";

export function calculateVerticalScore(grid) {
  // transpose the grid so that the rows become the columns
  const vertical = transposeGrid(grid);

  // Calculate the transposed grid score
  return calculateHorizontalScore(vertical);
}
