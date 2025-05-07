import type {Square} from "../Types";

export function autoFillRemaining(squares: Square[]): Square[] {
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
