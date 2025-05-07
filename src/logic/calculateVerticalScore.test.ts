import {getEmptySquares} from "./getEmptySquares";
import {calculateVerticalScore} from "./calculateVerticalScore";
import {convert1Dto2D} from "./convert1Dto2D";

describe("calculateVerticalScore", () => {
  test("Vertical Scoring: Empty grid has score of 0 for both colors", () => {
    const expected = {
      red: 0,
      blue: 0,
    };
    const gridSize = 5;
    const squares = getEmptySquares(gridSize);
    const grid = convert1Dto2D(squares);

    expect(calculateVerticalScore(grid)).toEqual(expected);
  });

  test("Vertical Scoring: Matching colors are scored, symbol is not considered.", () => {
    const expected = {
      red: 1,
      blue: 0,
    };
    const gridSize = 5;
    const squares = getEmptySquares(gridSize);
    const grid = convert1Dto2D(squares);

    grid[0][0] = {...grid[0][0], ...{color: "red", symbol: "star"}};
    grid[1][0] = {...grid[1][0], ...{color: "red", symbol: "circle"}};
    grid[2][0] = {...grid[2][0], ...{color: "red", symbol: "star"}};
    grid[3][0] = {...grid[3][0], ...{color: "blue", symbol: "star"}};
    grid[4][0] = {...grid[4][0], ...{color: "blue", symbol: "star"}};

    expect(calculateVerticalScore(grid)).toEqual(expected);
  });

  test("Vertical Scoring: Overlapping sets are counted.", () => {
    const expected = {
      red: 3,
      blue: 0,
    };
    const gridSize = 5;
    const squares = getEmptySquares(gridSize);
    const grid = convert1Dto2D(squares);

    grid[0][0] = {...grid[0][0], ...{color: "red", symbol: "star"}};
    grid[1][0] = {...grid[1][0], ...{color: "red", symbol: "circle"}};
    grid[2][0] = {...grid[2][0], ...{color: "red", symbol: "star"}};
    grid[3][0] = {...grid[3][0], ...{color: "red", symbol: "star"}};
    grid[4][0] = {...grid[4][0], ...{color: "red", symbol: "star"}};

    expect(calculateVerticalScore(grid)).toEqual(expected);
  });
});
