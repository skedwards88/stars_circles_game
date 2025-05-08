import {transposeDiagonalFromLeft} from "./transposeDiagonalFromLeft";

describe("transposeDiagonalFromLeft", () => {
  test("Transpose a 3x3 grid so that the diagonals from upper left to lower right are aligned horizontally with nulls padding the rows to keep them the same length.", () => {
    const grid = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ];
    const expected = [
      [null, null, 6],
      [null, 3, 7],
      [0, 4, 8],
      [1, 5, null],
      [2, null, null],
    ];
    expect(transposeDiagonalFromLeft(grid)).toEqual(expected);
  });

  test("Transpose a 5x5 grid so that the diagonals from upper left to lower right are aligned horizontally with nulls padding the rows to keep them the same length.", () => {
    const grid = [
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19],
      [20, 21, 22, 23, 24],
    ];
    const expected = [
      [null, null, null, null, 20],
      [null, null, null, 15, 21],
      [null, null, 10, 16, 22],
      [null, 5, 11, 17, 23],
      [0, 6, 12, 18, 24],
      [1, 7, 13, 19, null],
      [2, 8, 14, null, null],
      [3, 9, null, null, null],
      [4, null, null, null, null],
    ];
    expect(transposeDiagonalFromLeft(grid)).toEqual(expected);
  });

  test("Handles grid that already has null values inside", () => {
    const grid = [
      [0, null, 2],
      [3, 4, null],
      [null, 7, 8],
    ];
    const expected = [
      [null, null, null],
      [null, 3, 7],
      [0, 4, 8],
      [null, null, null],
      [2, null, null],
    ];
    expect(transposeDiagonalFromLeft(grid)).toEqual(expected);
  });

  test("Errors on an empty grid", () => {
    const grid = [[]];

    expect(() => transposeDiagonalFromLeft(grid)).toThrow(
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

    expect(() => transposeDiagonalFromLeft(grid)).toThrow(
      "The number of columns and number of rows in the grid must be equal and non-zero.",
    );
  });

  test("Errors on an irregular grid", () => {
    const grid = [
      [0, 1, 2],
      [3, 4, 5, 6],
      [6, 7, 8],
    ];

    expect(() => transposeDiagonalFromLeft(grid)).toThrow(
      "All of the rows in the grid must have the same length.",
    );
  });

  test("Errors on a grid with a single row", () => {
    const grid = [[0, 1, 2]];
    expect(() => transposeDiagonalFromLeft(grid)).toThrow(
      "The number of columns and number of rows in the grid must be equal and non-zero.",
    );
  });

  test("Handles a grid with a single column", () => {
    const grid = [[0], [1], [2]];
    expect(() => transposeDiagonalFromLeft(grid)).toThrow(
      "The number of columns and number of rows in the grid must be equal and non-zero.",
    );
  });
});
