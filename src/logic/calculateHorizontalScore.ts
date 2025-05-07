import type {Score, Square} from "../Types";

export function calculateHorizontalScore(grid: Square[][]): Score {
  const scores = {
    red: 0,
    blue: 0,
  };

  grid.map((_, rowIndex) => {
    for (let columnIndex = 0; columnIndex < grid[0].length - 2; columnIndex++) {
      const firstSquare = grid[rowIndex][columnIndex];
      const secondSquare = grid[rowIndex][columnIndex + 1];
      const thirdSquare = grid[rowIndex][columnIndex + 2];
      if (
        firstSquare &&
        secondSquare &&
        thirdSquare &&
        firstSquare.color &&
        firstSquare.color === secondSquare.color &&
        firstSquare.color === thirdSquare.color
      ) {
        scores[firstSquare.color] += 1;
      }
    }
  });

  return scores;
}
