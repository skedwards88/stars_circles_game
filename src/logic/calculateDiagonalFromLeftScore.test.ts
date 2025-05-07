import {calculateDiagonalFromLeftScore} from "./calculateDiagonalFromLeftScore";
import {getEmptySquares} from "./getEmptySquares";
import {convert1Dto2D} from "./convert1Dto2D";

describe("calculateDiagonalFromLeftScore", () => {
  test("Diagonal from upper left scoring: Empty grid has score of 0 for both colors", () => {
    const expected = {
      red: 0,
      blue: 0,
    };
    const gridSize = 5;
    const squares = getEmptySquares(gridSize);
    const grid = convert1Dto2D(squares);

    expect(calculateDiagonalFromLeftScore(grid)).toEqual(expected);
  });

  test("Diagonal from upper left scoring: Matching colors are scored, symbol is not considered.", () => {
    const expected = {
      red: 1,
      blue: 0,
    };
    const gridSize = 5;
    const squares = getEmptySquares(gridSize);
    const grid = convert1Dto2D(squares);

    grid[0][0] = {...grid[0][0], ...{color: "red", symbol: "star"}};
    grid[1][1] = {...grid[1][1], ...{color: "red", symbol: "circle"}};
    grid[2][2] = {...grid[2][2], ...{color: "red", symbol: "star"}};
    grid[3][3] = {...grid[3][3], ...{color: "blue", symbol: "star"}};
    grid[4][4] = {...grid[4][4], ...{color: "blue", symbol: "star"}};

    expect(calculateDiagonalFromLeftScore(grid)).toEqual(expected);
  });

  test("Diagonal from upper left scoring: Overlapping sets are counted.", () => {
    const expected = {
      red: 3,
      blue: 0,
    };
    const gridSize = 5;
    const squares = getEmptySquares(gridSize);
    const grid = convert1Dto2D(squares);

    grid[0][0] = {...grid[0][0], ...{color: "red", symbol: "star"}};
    grid[1][1] = {...grid[1][1], ...{color: "red", symbol: "circle"}};
    grid[2][2] = {...grid[2][2], ...{color: "red", symbol: "star"}};
    grid[3][3] = {...grid[3][3], ...{color: "red", symbol: "star"}};
    grid[4][4] = {...grid[4][4], ...{color: "red", symbol: "star"}};

    expect(calculateDiagonalFromLeftScore(grid)).toEqual(expected);
  });

  test("Diagonal from upper left scoring: Only diagonals from upper left to lower right are counted.", () => {
    const expected = {
      red: 1,
      blue: 0,
    };
    const gridSize = 5;
    const squares = getEmptySquares(gridSize);
    const grid = convert1Dto2D(squares);

    grid[1][0] = {...grid[1][0], ...{color: "red", symbol: "star"}};
    grid[1][1] = {...grid[1][1], ...{color: "red", symbol: "circle"}};
    grid[1][2] = {...grid[1][2], ...{color: "red", symbol: "star"}};
    grid[2][0] = {...grid[2][0], ...{color: "red", symbol: "star"}};
    grid[2][1] = {...grid[2][1], ...{color: "red", symbol: "star"}};
    grid[2][2] = {...grid[2][2], ...{color: "red", symbol: "star"}};
    grid[3][0] = {...grid[3][0], ...{color: "red", symbol: "star"}};
    grid[3][1] = {...grid[3][1], ...{color: "red", symbol: "star"}};
    grid[3][2] = {...grid[3][2], ...{color: "red", symbol: "star"}};

    expect(calculateDiagonalFromLeftScore(grid)).toEqual(expected);
  });
});
