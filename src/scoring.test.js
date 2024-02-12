import {
  calculateHorizontalScore,
  calculateVerticalScore,
  transposeGrid,
  transposeDiagonalFromLeft,
  calculateDiagonalFromLeftScore,
  calculateDiagonalFromRightScore,
  transposeDiagonalFromRight,
  calculateScore,
  squaresToGrid,
} from "./scoring";

function getEmptySquares(gridSize) {
  return Array.from({ length: gridSize * gridSize }, () => ({
    color: "",
    symbol: "",
    valid: {
      red: {
        star: true,
        circle: true,
      },
      blue: {
        star: true,
        circle: true,
      },
    },
  }));
}

// Horizontal Scoring
test("Horizontal Scoring: Empty grid has score of 0 for both colors", () => {
  let expected = {
    red: 0,
    blue: 0,
  };
  const gridSize = 5;
  const squares = getEmptySquares(gridSize);
  const grid = squaresToGrid(squares, gridSize);
  expect(calculateHorizontalScore(grid)).toEqual(expected);
});

test("Horizontal Scoring: Matching colors are scored, shape is not considered.", () => {
  let expected = {
    red: 1,
    blue: 0,
  };
  const gridSize = 5;
  const squares = getEmptySquares(gridSize);
  const grid = squaresToGrid(squares, gridSize);

  grid[0][0] = { ...grid[0][0], ...{ color: "red", shape: "star" } };
  grid[0][1] = { ...grid[0][1], ...{ color: "red", shape: "circle" } };
  grid[0][2] = { ...grid[0][2], ...{ color: "red", shape: "star" } };
  grid[0][3] = { ...grid[0][3], ...{ color: "blue", shape: "star" } };
  grid[0][4] = { ...grid[0][4], ...{ color: "blue", shape: "star" } };

  expect(calculateHorizontalScore(grid)).toEqual(expected);
});

test("Horizontal Scoring: Overlapping sets are counted.", () => {
  let expected = {
    red: 3,
    blue: 0,
  };
  const gridSize = 5;
  const squares = getEmptySquares(gridSize);
  const grid = squaresToGrid(squares, gridSize);

  grid[3][0] = { ...grid[3][0], ...{ color: "red", shape: "star" } };
  grid[3][1] = { ...grid[3][1], ...{ color: "red", shape: "circle" } };
  grid[3][2] = { ...grid[3][2], ...{ color: "red", shape: "star" } };
  grid[3][3] = { ...grid[3][3], ...{ color: "red", shape: "star" } };
  grid[3][4] = { ...grid[3][4], ...{ color: "red", shape: "star" } };

  expect(calculateHorizontalScore(grid)).toEqual(expected);
});

test("Horizontal Scoring: Vertical sets are not counted.", () => {
  let expected = {
    red: 0,
    blue: 0,
  };
  const gridSize = 5;
  const squares = getEmptySquares(gridSize);
  const grid = squaresToGrid(squares, gridSize);

  grid[0][0] = { ...grid[0][0], ...{ color: "red", shape: "star" } };
  grid[1][0] = { ...grid[1][0], ...{ color: "red", shape: "circle" } };
  grid[2][0] = { ...grid[2][0], ...{ color: "red", shape: "star" } };
  grid[3][0] = { ...grid[3][0], ...{ color: "blue", shape: "star" } };
  grid[4][0] = { ...grid[4][0], ...{ color: "blue", shape: "star" } };

  expect(calculateHorizontalScore(grid)).toEqual(expected);
});

// Vertical Scoring
test("Vertical Scoring: Empty grid has score of 0 for both colors", () => {
  let expected = {
    red: 0,
    blue: 0,
  };
  const gridSize = 5;
  const squares = getEmptySquares(gridSize);
  const grid = squaresToGrid(squares, gridSize);

  expect(calculateVerticalScore(grid)).toEqual(expected);
});

test("Vertical Scoring: Matching colors are scored, shape is not considered.", () => {
  let expected = {
    red: 1,
    blue: 0,
  };
  const gridSize = 5;
  const squares = getEmptySquares(gridSize);
  const grid = squaresToGrid(squares, gridSize);

  grid[0][0] = { ...grid[0][0], ...{ color: "red", shape: "star" } };
  grid[1][0] = { ...grid[1][0], ...{ color: "red", shape: "circle" } };
  grid[2][0] = { ...grid[2][0], ...{ color: "red", shape: "star" } };
  grid[3][0] = { ...grid[3][0], ...{ color: "blue", shape: "star" } };
  grid[4][0] = { ...grid[4][0], ...{ color: "blue", shape: "star" } };

  expect(calculateVerticalScore(grid)).toEqual(expected);
});

test("Vertical Scoring: Overlapping sets are counted.", () => {
  let expected = {
    red: 3,
    blue: 0,
  };
  const gridSize = 5;
  const squares = getEmptySquares(gridSize);
  const grid = squaresToGrid(squares, gridSize);

  grid[0][0] = { ...grid[0][0], ...{ color: "red", shape: "star" } };
  grid[1][0] = { ...grid[1][0], ...{ color: "red", shape: "circle" } };
  grid[2][0] = { ...grid[2][0], ...{ color: "red", shape: "star" } };
  grid[3][0] = { ...grid[3][0], ...{ color: "red", shape: "star" } };
  grid[4][0] = { ...grid[4][0], ...{ color: "red", shape: "star" } };

  expect(calculateVerticalScore(grid)).toEqual(expected);
});

// Transpose rows and columns
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

// Transpose diagonals from upper left to lower right
test("Transpose rows and columns: Transpose a 3x3 grid so that the diagonals from upper left to lower right are aligned horizontally with nulls padding the rows to keep them the same length.", () => {
  let grid = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];
  let expected = [
    [null, null, 6],
    [null, 3, 7],
    [0, 4, 8],
    [1, 5, null],
    [2, null, null],
  ];
  expect(transposeDiagonalFromLeft(grid)).toEqual(expected);
});

test("Transpose rows and columns: Transpose a 5x5 grid so that the diagonals from upper left to lower right are aligned horizontally with nulls padding the rows to keep them the same length.", () => {
  let grid = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
  ];
  let expected = [
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

// Transpose diagonals from upper right to lower left
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

// Diagonal from upper left scoring
test("Diagonal from upper left scoring: Empty grid has score of 0 for both colors", () => {
  let expected = {
    red: 0,
    blue: 0,
  };
  const gridSize = 5;
  const squares = getEmptySquares(gridSize);
  const grid = squaresToGrid(squares, gridSize);

  expect(calculateDiagonalFromLeftScore(grid)).toEqual(expected);
});

test("Diagonal from upper left scoring: Matching colors are scored, shape is not considered.", () => {
  let expected = {
    red: 1,
    blue: 0,
  };
  const gridSize = 5;
  const squares = getEmptySquares(gridSize);
  const grid = squaresToGrid(squares, gridSize);

  grid[0][0] = { ...grid[0][0], ...{ color: "red", shape: "star" } };
  grid[1][1] = { ...grid[1][1], ...{ color: "red", shape: "circle" } };
  grid[2][2] = { ...grid[2][2], ...{ color: "red", shape: "star" } };
  grid[3][3] = { ...grid[3][3], ...{ color: "blue", shape: "star" } };
  grid[4][4] = { ...grid[4][4], ...{ color: "blue", shape: "star" } };

  expect(calculateDiagonalFromLeftScore(grid)).toEqual(expected);
});

test("Diagonal from upper left scoring: Overlapping sets are counted.", () => {
  let expected = {
    red: 3,
    blue: 0,
  };
  const gridSize = 5;
  const squares = getEmptySquares(gridSize);
  const grid = squaresToGrid(squares, gridSize);

  grid[0][0] = { ...grid[0][0], ...{ color: "red", shape: "star" } };
  grid[1][1] = { ...grid[1][1], ...{ color: "red", shape: "circle" } };
  grid[2][2] = { ...grid[2][2], ...{ color: "red", shape: "star" } };
  grid[3][3] = { ...grid[3][3], ...{ color: "red", shape: "star" } };
  grid[4][4] = { ...grid[4][4], ...{ color: "red", shape: "star" } };

  expect(calculateDiagonalFromLeftScore(grid)).toEqual(expected);
});

test("Diagonal from upper left scoring: Only diagonals from upper left to lower right are counted.", () => {
  let expected = {
    red: 1,
    blue: 0,
  };
  const gridSize = 5;
  const squares = getEmptySquares(gridSize);
  const grid = squaresToGrid(squares, gridSize);

  grid[1][0] = { ...grid[1][0], ...{ color: "red", shape: "star" } };
  grid[1][1] = { ...grid[1][1], ...{ color: "red", shape: "circle" } };
  grid[1][2] = { ...grid[1][2], ...{ color: "red", shape: "star" } };
  grid[2][0] = { ...grid[2][0], ...{ color: "red", shape: "star" } };
  grid[2][1] = { ...grid[2][1], ...{ color: "red", shape: "star" } };
  grid[2][2] = { ...grid[2][2], ...{ color: "red", shape: "star" } };
  grid[3][0] = { ...grid[3][0], ...{ color: "red", shape: "star" } };
  grid[3][1] = { ...grid[3][1], ...{ color: "red", shape: "star" } };
  grid[3][2] = { ...grid[3][2], ...{ color: "red", shape: "star" } };

  expect(calculateDiagonalFromLeftScore(grid)).toEqual(expected);
});

// Diagonal from upper right scoring
test("Scoring diagonal from upper right: Empty grid has score of 0 for both colors", () => {
  let expected = {
    red: 0,
    blue: 0,
  };
  const gridSize = 5;
  const squares = getEmptySquares(gridSize);
  const grid = squaresToGrid(squares, gridSize);

  expect(calculateDiagonalFromRightScore(grid)).toEqual(expected);
});

test("Diagonal from upper right scoring: Scoring diagonal from upper right: Matching colors are scored, shape is not considered.", () => {
  let expected = {
    red: 1,
    blue: 0,
  };
  const gridSize = 5;
  const squares = getEmptySquares(gridSize);
  const grid = squaresToGrid(squares, gridSize);

  grid[0][4] = { ...grid[0][4], ...{ color: "red", shape: "star" } };
  grid[1][3] = { ...grid[1][3], ...{ color: "red", shape: "circle" } };
  grid[2][2] = { ...grid[2][2], ...{ color: "red", shape: "star" } };
  grid[3][1] = { ...grid[3][1], ...{ color: "blue", shape: "star" } };
  grid[4][0] = { ...grid[4][0], ...{ color: "blue", shape: "star" } };

  expect(calculateDiagonalFromRightScore(grid)).toEqual(expected);
});

test("Diagonal from upper right scoring: Scoring diagonal from upper right: Overlapping sets are counted.", () => {
  let expected = {
    red: 3,
    blue: 0,
  };
  const gridSize = 5;
  const squares = getEmptySquares(gridSize);
  const grid = squaresToGrid(squares, gridSize);

  grid[0][4] = { ...grid[0][4], ...{ color: "red", shape: "star" } };
  grid[1][3] = { ...grid[1][3], ...{ color: "red", shape: "circle" } };
  grid[2][2] = { ...grid[2][2], ...{ color: "red", shape: "star" } };
  grid[3][1] = { ...grid[3][1], ...{ color: "red", shape: "star" } };
  grid[4][0] = { ...grid[4][0], ...{ color: "red", shape: "star" } };

  expect(calculateDiagonalFromRightScore(grid)).toEqual(expected);
});

test("Diagonal from upper right scoring: Scoring diagonal from upper right: Only diagonals from upper right to lower left are counted.", () => {
  let expected = {
    red: 1,
    blue: 0,
  };
  const gridSize = 5;
  const squares = getEmptySquares(gridSize);
  const grid = squaresToGrid(squares, gridSize);

  grid[1][0] = { ...grid[1][0], ...{ color: "red", shape: "star" } };
  grid[1][1] = { ...grid[1][1], ...{ color: "red", shape: "circle" } };
  grid[1][2] = { ...grid[1][2], ...{ color: "red", shape: "star" } };
  grid[2][0] = { ...grid[2][0], ...{ color: "red", shape: "star" } };
  grid[2][1] = { ...grid[2][1], ...{ color: "red", shape: "star" } };
  grid[2][2] = { ...grid[2][2], ...{ color: "red", shape: "star" } };
  grid[3][0] = { ...grid[3][0], ...{ color: "red", shape: "star" } };
  grid[3][1] = { ...grid[3][1], ...{ color: "red", shape: "star" } };
  grid[3][2] = { ...grid[3][2], ...{ color: "red", shape: "star" } };

  expect(calculateDiagonalFromRightScore(grid)).toEqual(expected);
});

// Scoring
test("Scoring: Empty grid has score of 0 for both colors", () => {
  let expected = {
    red: 0,
    blue: 0,
  };
  const gridSize = 5;
  const squares = getEmptySquares(gridSize);

  expect(calculateScore({ squares: squares, gridSize: gridSize })).toEqual(
    expected
  );
});

test("Matching colors are scored, shape is not considered.", () => {
  let expected = {
    red: 1,
    blue: 0,
  };
  const gridSize = 5;
  const squares = getEmptySquares(gridSize);

  squares[0] = { color: "red", shape: "star" };
  squares[1] = { color: "red", shape: "circle" };
  squares[2] = { color: "red", shape: "star" };
  squares[3] = { color: "blue", shape: "star" };
  squares[4] = { color: "blue", shape: "star" };

  expect(calculateScore({ squares: squares, gridSize: gridSize })).toEqual(
    expected
  );
});

test("Overlapping sets are counted.", () => {
  let expected = {
    red: 3,
    blue: 0,
  };
  const gridSize = 5;
  const squares = getEmptySquares(gridSize);

  squares[10] = { color: "red", shape: "star" };
  squares[11] = { color: "red", shape: "circle" };
  squares[12] = { color: "red", shape: "star" };
  squares[13] = { color: "red", shape: "star" };
  squares[14] = { color: "red", shape: "star" };

  expect(calculateScore({ squares: squares, gridSize: gridSize })).toEqual(
    expected
  );
});
