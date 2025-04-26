import {transposeGrid} from "./transposeGrid";

export function transposeDiagonalFromRight(grid) {
  // Shift the grid so that the diagonals from upper right to lower left are aligned vertically
  // Pad the grid with nulls to maintain equal length of each row
  // [
  //     [0,1,2],
  //     [3,4,5],
  //     [6,7,8]
  // ] becomes [
  //   [ 0, 1, 2, N, N],
  //   [ N, 3, 4, 5, N],
  //   [ N, N, 6, 7, 8 ]
  // ] where N is null
  let rightShift = [];
  for (let row in grid) {
    let prepend = Array(parseInt(row)).fill(null);
    let append = Array(grid[row].length - 1 - row).fill(null);
    let newRow = prepend.concat(grid[row].concat(append));
    rightShift.push(newRow);
  }

  // Transpose the grid so that the verticals become the horizontals
  // [
  //     [ N, N, 6 ],
  //     [ N, 3, 7 ],
  //     [ 0, 4, 8 ],
  //     [ 1, 5, N ],
  //     [ 2, N, N ]
  //   ]
  return transposeGrid(rightShift);
}
