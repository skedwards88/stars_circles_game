import {calculateDiagonalFromRightScore} from "./calculateDiagonalFromRightScore";
import {getEmptySquares} from "./getEmptySquares";
import {convert1Dto2D} from "./convert1Dto2D";

describe("calculateDiagonalFromRightScore", () => {
  test("Scoring diagonal from upper right: Empty grid has score of 0 for both colors", () => {
    let expected = {
      red: 0,
      blue: 0,
    };
    const gridSize = 5;
    const squares = getEmptySquares(gridSize);
    const grid = convert1Dto2D(squares, gridSize);

    expect(calculateDiagonalFromRightScore(grid)).toEqual(expected);
  });

  test("Diagonal from upper right scoring: Scoring diagonal from upper right: Matching colors are scored, shape is not considered.", () => {
    let expected = {
      red: 1,
      blue: 0,
    };
    const gridSize = 5;
    const squares = getEmptySquares(gridSize);
    const grid = convert1Dto2D(squares, gridSize);

    grid[0][4] = {...grid[0][4], ...{color: "red", shape: "star"}};
    grid[1][3] = {...grid[1][3], ...{color: "red", shape: "circle"}};
    grid[2][2] = {...grid[2][2], ...{color: "red", shape: "star"}};
    grid[3][1] = {...grid[3][1], ...{color: "blue", shape: "star"}};
    grid[4][0] = {...grid[4][0], ...{color: "blue", shape: "star"}};

    expect(calculateDiagonalFromRightScore(grid)).toEqual(expected);
  });

  test("Diagonal from upper right scoring: Scoring diagonal from upper right: Overlapping sets are counted.", () => {
    let expected = {
      red: 3,
      blue: 0,
    };
    const gridSize = 5;
    const squares = getEmptySquares(gridSize);
    const grid = convert1Dto2D(squares, gridSize);

    grid[0][4] = {...grid[0][4], ...{color: "red", shape: "star"}};
    grid[1][3] = {...grid[1][3], ...{color: "red", shape: "circle"}};
    grid[2][2] = {...grid[2][2], ...{color: "red", shape: "star"}};
    grid[3][1] = {...grid[3][1], ...{color: "red", shape: "star"}};
    grid[4][0] = {...grid[4][0], ...{color: "red", shape: "star"}};

    expect(calculateDiagonalFromRightScore(grid)).toEqual(expected);
  });

  test("Diagonal from upper right scoring: Scoring diagonal from upper right: Only diagonals from upper right to lower left are counted.", () => {
    let expected = {
      red: 1,
      blue: 0,
    };
    const gridSize = 5;
    const squares = getEmptySquares(gridSize);
    const grid = convert1Dto2D(squares, gridSize);

    grid[1][0] = {...grid[1][0], ...{color: "red", shape: "star"}};
    grid[1][1] = {...grid[1][1], ...{color: "red", shape: "circle"}};
    grid[1][2] = {...grid[1][2], ...{color: "red", shape: "star"}};
    grid[2][0] = {...grid[2][0], ...{color: "red", shape: "star"}};
    grid[2][1] = {...grid[2][1], ...{color: "red", shape: "star"}};
    grid[2][2] = {...grid[2][2], ...{color: "red", shape: "star"}};
    grid[3][0] = {...grid[3][0], ...{color: "red", shape: "star"}};
    grid[3][1] = {...grid[3][1], ...{color: "red", shape: "star"}};
    grid[3][2] = {...grid[3][2], ...{color: "red", shape: "star"}};

    expect(calculateDiagonalFromRightScore(grid)).toEqual(expected);
  });
});
