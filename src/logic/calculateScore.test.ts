import {calculateScore} from "./calculateScore";
import {getEmptySquares} from "./getEmptySquares";

describe("calculateScore", () => {
  test("Scoring: Empty grid has score of 0 for both colors", () => {
    const expected = {
      red: 0,
      blue: 0,
    };
    const gridSize = 5;
    const squares = getEmptySquares(gridSize);

    expect(calculateScore({squares: squares})).toEqual(expected);
  });

  test("Matching colors are scored, shape is not considered.", () => {
    const expected = {
      red: 1,
      blue: 0,
    };
    const gridSize = 5;
    const squares = getEmptySquares(gridSize);

    squares[0].color = "red";
    squares[0].shape = "star";
    squares[1].color = "red";
    squares[1].shape = "circle";
    squares[2].color = "red";
    squares[2].shape = "star";
    squares[3].color = "blue";
    squares[3].shape = "star";
    squares[4].color = "blue";
    squares[4].shape = "star";

    expect(calculateScore({squares: squares})).toEqual(expected);
  });

  test("Overlapping sets are counted.", () => {
    const expected = {
      red: 3,
      blue: 0,
    };
    const gridSize = 5;
    const squares = getEmptySquares(gridSize);

    squares[10].color = "red";
    squares[10].shape = "star";
    squares[11].color = "red";
    squares[11].shape = "circle";
    squares[12].color = "red";
    squares[12].shape = "star";
    squares[13].color = "red";
    squares[13].shape = "star";
    squares[14].color = "red";
    squares[14].shape = "star";

    expect(calculateScore({squares: squares})).toEqual(expected);
  });
});
