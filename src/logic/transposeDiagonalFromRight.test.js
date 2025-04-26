import {transposeDiagonalFromRight} from "./transposeDiagonalFromRight";

describe("transposeDiagonalFromRight", () => {
  test("Transpose rows and columns: Transpose a 5x5 grid so that the diagonals from upper right to lower left are aligned horizontally with nulls padding the rows to keep them the same length.", () => {
    let grid = [
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19],
      [20, 21, 22, 23, 24],
    ];
    let expected = [
      [0, null, null, null, null],
      [1, 5, null, null, null],
      [2, 6, 10, null, null],
      [3, 7, 11, 15, null],
      [4, 8, 12, 16, 20],
      [null, 9, 13, 17, 21],
      [null, null, 14, 18, 22],
      [null, null, null, 19, 23],
      [null, null, null, null, 24],
    ];
    expect(transposeDiagonalFromRight(grid)).toEqual(expected);
  });
});
