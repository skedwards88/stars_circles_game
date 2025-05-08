import type {Square} from "../Types";

export function noChoicesRemainingQ(squares: Square[]): boolean {
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
