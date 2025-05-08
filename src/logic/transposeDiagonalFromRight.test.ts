import {transposeDiagonalFromRight} from "./transposeDiagonalFromRight";

describe("transposeDiagonalFromRight", () => {
  test("Transpose a 5x5 grid so that the diagonals from upper right to lower left are aligned horizontally with nulls padding the rows to keep them the same length.", () => {
    const grid = [
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19],
      [20, 21, 22, 23, 24],
    ];
    const expected = [
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

  test("Handles grid that already has null values inside", () => {
    const grid = [
      [0, null, 2],
      [3, 4, null],
      [null, 7, 8],
    ];
    const expected = [
      [0, null, null],
      [null, 3, null],
      [2, 4, null],
      [null, null, 7],
      [null, null, 8],
    ];
    expect(transposeDiagonalFromRight(grid)).toEqual(expected);
  });

  test("Errors on an empty grid", () => {
    const grid = [[]];

    expect(() => transposeDiagonalFromRight(grid)).toThrow(
      "The number of columns and number of rows in the grid must be equal and non-zero.",
    );
  });

  test("Errors on a non-square grid", () => {
    const grid = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [9, 1, 2],
    ];

    expect(() => transposeDiagonalFromRight(grid)).toThrow(
      "The number of columns and number of rows in the grid must be equal and non-zero.",
    );
  });

  test("Errors on an irregular grid", () => {
    const grid = [
      [0, 1, 2],
      [3, 4, 5, 6],
      [6, 7, 8],
    ];

    expect(() => transposeDiagonalFromRight(grid)).toThrow(
      "All of the rows in the grid must have the same length.",
    );
  });

  test("Errors on a grid with a single row", () => {
    const grid = [[0, 1, 2]];
    expect(() => transposeDiagonalFromRight(grid)).toThrow(
      "The number of columns and number of rows in the grid must be equal and non-zero.",
    );
  });

  test("Handles a grid with a single column", () => {
    const grid = [[0], [1], [2]];
    expect(() => transposeDiagonalFromRight(grid)).toThrow(
      "The number of columns and number of rows in the grid must be equal and non-zero.",
    );
  });
});
