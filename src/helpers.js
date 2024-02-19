function getSurroundingIndexes({index, gridSize}) {
  const column = index % gridSize;
  const row = Math.floor(index / gridSize);
  let surroundingIndexes = [];
  for (let currentRow = row - 1; currentRow <= row + 1; currentRow++) {
    for (
      let currentColumn = column - 1;
      currentColumn <= column + 1;
      currentColumn++
    ) {
      if (
        currentRow >= 0 &&
        currentColumn >= 0 &&
        currentRow < gridSize &&
        currentColumn < gridSize
      ) {
        const currentIndex = currentColumn + currentRow * gridSize;
        surroundingIndexes.push(currentIndex);
      }
    }
  }
  return surroundingIndexes;
}

function noChoicesRemaining(squares) {
  // Return true if BOTH red and blue have valid moves
  const validRedMoves = squares.filter(
    (square) => square.valid.red.circle || square.valid.red.star,
  );
  const validBlueMoves = squares.filter(
    (square) => square.valid.blue.circle || square.valid.blue.star,
  );
  if (validRedMoves.length && validBlueMoves.length) {
    return false;
  } else {
    return true;
  }
}

function autoFillRemaining(squares) {
  // Should only call when either red or blue have no more valid moves; otherwise, squares will be filled with a bias

  // If all squares are already filled, return
  if (!squares.filter((i) => !i.color).length) {
    return squares;
  }

  squares.map((square) => {
    if (!square.color) {
      if (square.valid.red.circle || square.valid.red.star) {
        square.color = "red";
      }
      if (square.valid.blue.circle || square.valid.blue.star) {
        square.color = "blue";
      }
    }
  });

  return squares;
}

export {getSurroundingIndexes, noChoicesRemaining, autoFillRemaining};
