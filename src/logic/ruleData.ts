import type {Color, RuleSquare, Shape} from "../Types";
import {getEmptySquares} from "./getEmptySquares";

type RuleSquareInfo = {
  index: number;
  color: Color | "red-hint" | "blue-hint" | "black";
  shape: Shape | "";
};

function expandSquareToFullArray(filled: RuleSquareInfo[]): RuleSquare[] {
  const gridSize = 5;
  const grid = getEmptySquares(gridSize) as RuleSquare[];

  filled.forEach((obj) => {
    const {index, color, shape} = obj;
    grid[index].color = color;
    grid[index].shape = shape;
  });

  return grid;
}

export const ruleData = [
  {
    text: [
      "Players take turns dragging a shape of their color onto the board.",
    ],
    squares: expandSquareToFullArray([
      {index: 7, color: "red", shape: "star"},
      {index: 11, color: "blue", shape: "circle"},
      {index: 24, color: "red", shape: "circle"},
    ]),
  },
  {
    text: [
      "Matching shapes of opposite color cannot be placed adjacent or diagonal to each other. (Turn hints on/off to show/hide legal moves.)",
      "In this example, a blue circle can only be placed in the highlighted squares, but a blue star could be placed anywhere.",
    ],
    squares: expandSquareToFullArray([
      {index: 0, color: "blue-hint", shape: ""},
      {index: 1, color: "blue-hint", shape: ""},
      {index: 2, color: "blue-hint", shape: ""},
      {index: 3, color: "blue-hint", shape: ""},
      {index: 4, color: "blue-hint", shape: ""},
      {index: 5, color: "blue-hint", shape: ""},
      {index: 6, color: "blue-hint", shape: ""},
      {index: 7, color: "blue-hint", shape: ""},
      {index: 8, color: "blue-hint", shape: ""},
      {index: 9, color: "blue-hint", shape: ""},
      {index: 10, color: "blue-hint", shape: ""},
      {index: 11, color: "blue-hint", shape: ""},
      {index: 12, color: "blue-hint", shape: ""},
      {index: 13, color: "blue-hint", shape: ""},
      {index: 14, color: "blue-hint", shape: ""},
      {index: 15, color: "blue-hint", shape: ""},
      {index: 19, color: "blue-hint", shape: ""},
      {index: 20, color: "blue-hint", shape: ""},
      {index: 24, color: "blue-hint", shape: ""},
      {index: 22, color: "red", shape: "circle"},
    ]),
  },
  {
    text: [
      "When no shape can be placed in a square, the square is blacked out.",
    ],
    squares: expandSquareToFullArray([
      {index: 7, color: "red", shape: "circle"},
      {index: 11, color: "red", shape: "star"},
      {index: 12, color: "black", shape: ""},
      {index: 17, color: "blue", shape: "circle"},
      {index: 18, color: "blue", shape: "star"},
    ]),
  },
  {
    text: [
      "Score a point by getting a 3-in-a-row of your color (shape doesn't matter). A square can be part of multiple 3-in-a-rows.",
      "In this example, red has 2 points and blue has 1 point.",
    ],
    squares: expandSquareToFullArray([
      {index: 4, color: "blue", shape: "circle"},
      {index: 8, color: "blue", shape: "star"},
      {index: 12, color: "blue", shape: "circle"},
      {index: 15, color: "red", shape: "circle"},
      {index: 16, color: "red", shape: "star"},
      {index: 17, color: "red", shape: "star"},
      {index: 18, color: "red", shape: "star"},
    ]),
  },
  {
    text: [
      "The game ends when one player cannot make any more moves. Any remaining moves for the other player will complete automatically.",
      "The player with the most points wins!",
    ],
  },
];
