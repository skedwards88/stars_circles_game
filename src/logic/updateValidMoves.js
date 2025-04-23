import {getSurroundingIndexes} from "./getSurroundingIndexes";
import {noChoicesRemainingQ} from "./noChoicesRemainingQ";
import {autoFillRemaining} from "./autofillRemaining";

export function updateValidMoves({
  squares,
  playedIndex,
  playedSymbol,
  playedColor,
  unplayedColor,
}) {
  squares[playedIndex].symbol = playedSymbol;
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
    squares[surroundingIndex].valid[unplayedColor][playedSymbol] = false;
  });

  if (noChoicesRemainingQ(squares)) {
    squares = autoFillRemaining(squares);
  }

  return squares;
}
