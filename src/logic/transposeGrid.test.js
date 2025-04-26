import {transposeGrid} from "./transposeGrid";

describe("transposeGrid", () => {
  test("Transpose rows and columns: Transpose a 3x3 grid so that the diagonals from upper left to lower right are aligned horizontally with nulls padding the rows to keep them the same length.", () => {
    let grid = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ];
    let expected = [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];
    expect(transposeGrid(grid)).toEqual(expected);
  });
});
