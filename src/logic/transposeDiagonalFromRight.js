import {transposeGrid} from "./transposeGrid";
import {enforceSquareGrid} from "./enforceSquareGrid";

export function transposeDiagonalFromRight(grid) {
  // Make sure the grid is square
  enforceSquareGrid(grid);

  // Shift the grid so that the diagonals from upper right to lower left are aligned vertically
  // Pad the grid with nulls to maintain equal length of each row
  // [
  //     [0, 1, 2],
  //     [3, 4, 5],
  //     [6, 7, 8]
  // ] becomes [
  //   [ 0, 1, 2, N, N],
  //   [ N, 3, 4, 5, N],
  //   [ N, N, 6, 7, 8 ]
  // ] where N is null
  const rightShiftedGrid = grid.map((row, rowIndex) => {
    const prepend = Array(rowIndex).fill(null);
    const append = Array(row.length - 1 - rowIndex).fill(null);
    const newRow = prepend.concat(row, append);
    return newRow;
  });

  // Transpose the grid so that the verticals become the horizontals
  // [
  //     [ N, N, 6 ],
  //     [ N, 3, 7 ],
  //     [ 0, 4, 8 ],
  //     [ 1, 5, N ],
  //     [ 2, N, N ]
  //   ]
  return transposeGrid(rightShiftedGrid);
}
