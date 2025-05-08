import {getSurroundingIndexes} from "./getSurroundingIndexes";
import {noChoicesRemainingQ} from "./noChoicesRemainingQ";
import {autoFillRemaining} from "./autofillRemaining";
import type {Square, Shape, Color} from "../Types";

export function updateValidMoves({
  squares,
  playedIndex,
  playedShape,
  playedColor,
  unplayedColor,
}: {
  squares: Square[];
  playedIndex: number;
  playedShape: Shape;
  playedColor: Color;
  unplayedColor: Color;
}): Square[] {
  if (!squares[playedIndex]) {
    throw new Error(
      `A square does not exist for index ${playedIndex}. (Only ${squares.length} squares).`,
    );
  }

  squares[playedIndex].shape = playedShape;
  squares[playedIndex].color = playedColor;

  // Placement in the current index is no longer valid
  squares[playedIndex].valid.red.star = false;
  squares[playedIndex].valid.blue.star = false;
  squares[playedIndex].valid.red.circle = false;
  squares[playedIndex].valid.blue.circle = false;

  // Placement in the surrounding tiles is now invalid for the same shape of the opposite color
  const surroundingIndexes = getSurroundingIndexes({
    index: playedIndex,
    gridSize: Math.sqrt(squares.length),
  });
  surroundingIndexes.map((surroundingIndex) => {
    squares[surroundingIndex]!.valid[unplayedColor][playedShape] = false;
  });

  if (noChoicesRemainingQ(squares)) {
    squares = autoFillRemaining(squares);
  }

  return squares;
}
