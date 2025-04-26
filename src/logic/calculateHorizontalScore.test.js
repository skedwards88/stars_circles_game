import {calculateHorizontalScore} from "./calculateHorizontalScore";
import {convert1Dto2D} from "./convert1Dto2D";
import {getEmptySquares} from "./getEmptySquares";

describe("calculateHorizontalScore", () => {
  test("Horizontal Scoring: Empty grid has score of 0 for both colors", () => {
    let expected = {
      red: 0,
      blue: 0,
    };
    const gridSize = 5;
    const squares = getEmptySquares(gridSize);
    const grid = convert1Dto2D(squares, gridSize);
    expect(calculateHorizontalScore(grid)).toEqual(expected);
  });

  test("Horizontal Scoring: Matching colors are scored, shape is not considered.", () => {
    let expected = {
      red: 1,
      blue: 0,
    };
    const gridSize = 5;
    const squares = getEmptySquares(gridSize);
    const grid = convert1Dto2D(squares, gridSize);

    grid[0][0] = {...grid[0][0], ...{color: "red", shape: "star"}};
    grid[0][1] = {...grid[0][1], ...{color: "red", shape: "circle"}};
    grid[0][2] = {...grid[0][2], ...{color: "red", shape: "star"}};
    grid[0][3] = {...grid[0][3], ...{color: "blue", shape: "star"}};
    grid[0][4] = {...grid[0][4], ...{color: "blue", shape: "star"}};

    expect(calculateHorizontalScore(grid)).toEqual(expected);
  });

  test("Horizontal Scoring: Overlapping sets are counted.", () => {
    let expected = {
      red: 3,
      blue: 0,
    };
    const gridSize = 5;
    const squares = getEmptySquares(gridSize);
    const grid = convert1Dto2D(squares, gridSize);

    grid[3][0] = {...grid[3][0], ...{color: "red", shape: "star"}};
    grid[3][1] = {...grid[3][1], ...{color: "red", shape: "circle"}};
    grid[3][2] = {...grid[3][2], ...{color: "red", shape: "star"}};
    grid[3][3] = {...grid[3][3], ...{color: "red", shape: "star"}};
    grid[3][4] = {...grid[3][4], ...{color: "red", shape: "star"}};

    expect(calculateHorizontalScore(grid)).toEqual(expected);
  });

  test("Horizontal Scoring: Vertical sets are not counted.", () => {
    let expected = {
      red: 0,
      blue: 0,
    };
    const gridSize = 5;
    const squares = getEmptySquares(gridSize);
    const grid = convert1Dto2D(squares, gridSize);

    grid[0][0] = {...grid[0][0], ...{color: "red", shape: "star"}};
    grid[1][0] = {...grid[1][0], ...{color: "red", shape: "circle"}};
    grid[2][0] = {...grid[2][0], ...{color: "red", shape: "star"}};
    grid[3][0] = {...grid[3][0], ...{color: "blue", shape: "star"}};
    grid[4][0] = {...grid[4][0], ...{color: "blue", shape: "star"}};

    expect(calculateHorizontalScore(grid)).toEqual(expected);
  });
});
