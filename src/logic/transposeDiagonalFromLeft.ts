import {transposeGrid} from "./transposeGrid";
import {enforceSquareGrid} from "./enforceSquareGrid";

export function transposeDiagonalFromLeft<T>(grid: T[][]): T[][] {
  // Make sure the grid is square
  enforceSquareGrid(grid);

  // Shift the grid so that the diagonals from upper left to lower right are aligned vertically
  // Pad the grid with nulls to maintain equal length of each row
  // [
  //     [0, 1, 2],
  //     [3, 4, 5],
  //     [6, 7, 8]
  // ] becomes [
  //   [ N, N, 0, 1, 2 ],
  //   [ N, 3, 4, 5, N ],
  //   [ 6, 7, 8, N, N ]
  // ] where N is null
  const leftShiftedGrid = grid.map((row, rowIndex) => {
    const prepend = Array(row.length - 1 - rowIndex).fill(null);
    const append = Array(rowIndex).fill(null);
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
  return transposeGrid(leftShiftedGrid);
}
