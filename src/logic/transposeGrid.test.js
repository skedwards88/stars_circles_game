import {transposeGrid} from "./transposeGrid";

describe("transposeGrid", () => {
  test("it swaps the rows and columns in a grid", () => {
    const grid = [
      ["A", "B", "", "", ""],
      ["C", "", "", "D", "E"],
      ["F", "G", "H", "I", ""],
      ["", "J", "", "K", "L"],
      ["M", "N", "", "", ""],
    ];
    const expectedGrid = [
      ["A", "C", "F", "", "M"],
      ["B", "", "G", "J", "N"],
      ["", "", "H", "", ""],
      ["", "D", "I", "K", ""],
      ["", "E", "", "L", ""],
    ];
    expect(transposeGrid(grid)).toEqual(expectedGrid);
  });

  test("it works on grids that are wider than tall", () => {
    let grid = [
      [0, 1, 2, 10],
      [3, 4, 5, 11],
      [6, 7, 8, 12],
    ];
    let expected = [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [10, 11, 12],
    ];
    expect(transposeGrid(grid)).toEqual(expected);
  });

  test("it works on grids that are taller than wide", () => {
    let grid = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [9, 10, 11],
    ];
    let expected = [
      [0, 3, 6, 9],
      [1, 4, 7, 10],
      [2, 5, 8, 11],
    ];
    expect(transposeGrid(grid)).toEqual(expected);
  });

  test("it works on empty grids", () => {
    let grid = [];
    let expected = [];
    expect(transposeGrid(grid)).toEqual(expected);
  });

  test("it rejects grids that have uneven row lengths", () => {
    const grid = [
      ["A", "", "C"],
      ["", "B", "", "E"],
      ["D", "", ""],
    ];
    expect(() => transposeGrid(grid)).toThrow(
      "All of the rows in the grid must have the same length.",
    );
  });
});
