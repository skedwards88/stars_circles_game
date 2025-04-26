import {calculateScore} from "./calculateScore";
import {getEmptySquares} from "./getEmptySquares";

describe("calculateScore", () => {
  test("Scoring: Empty grid has score of 0 for both colors", () => {
    let expected = {
      red: 0,
      blue: 0,
    };
    const gridSize = 5;
    const squares = getEmptySquares(gridSize);

    expect(calculateScore({squares: squares, gridSize: gridSize})).toEqual(
      expected,
    );
  });

  test("Matching colors are scored, shape is not considered.", () => {
    let expected = {
      red: 1,
      blue: 0,
    };
    const gridSize = 5;
    const squares = getEmptySquares(gridSize);

    squares[0] = {color: "red", shape: "star"};
    squares[1] = {color: "red", shape: "circle"};
    squares[2] = {color: "red", shape: "star"};
    squares[3] = {color: "blue", shape: "star"};
    squares[4] = {color: "blue", shape: "star"};

    expect(calculateScore({squares: squares, gridSize: gridSize})).toEqual(
      expected,
    );
  });

  test("Overlapping sets are counted.", () => {
    let expected = {
      red: 3,
      blue: 0,
    };
    const gridSize = 5;
    const squares = getEmptySquares(gridSize);

    squares[10] = {color: "red", shape: "star"};
    squares[11] = {color: "red", shape: "circle"};
    squares[12] = {color: "red", shape: "star"};
    squares[13] = {color: "red", shape: "star"};
    squares[14] = {color: "red", shape: "star"};

    expect(calculateScore({squares: squares, gridSize: gridSize})).toEqual(
      expected,
    );
  });
});
