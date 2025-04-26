import {transposeGrid} from "./transposeGrid";

export function transposeDiagonalFromLeft(grid) {
  // debugger
  // Shift the grid so that the diagonals from upper left to lower right are aligned vertically
  // Pad the grid with nulls to maintain equal length of each row
  // [
  //     [0,1,2],
  //     [3,4,5],
  //     [6,7,8]
  // ] becomes [
  //   [ N, N, 0, 1, 2 ],
  //   [ N, 3, 4, 5, N ],
  //   [ 6, 7, 8, N, N ]
  // ] where N is null
  let leftShift = [];
  grid.map((row, rowIndex) => {
    let prepend = Array(grid[rowIndex].length - 1 - rowIndex).fill(null);
    let append = Array(parseInt(rowIndex)).fill(null);
    let newRow = prepend.concat(grid[rowIndex].concat(append));
    leftShift.push(newRow);
  });

  // Transpose the grid so that the verticals become the horizontals
  // [
  //     [ N, N, 6 ],
  //     [ N, 3, 7 ],
  //     [ 0, 4, 8 ],
  //     [ 1, 5, N ],
  //     [ 2, N, N ]
  //   ]
  return transposeGrid(leftShift);
}
