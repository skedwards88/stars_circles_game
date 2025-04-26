export function calculateHorizontalScore(grid) {
  let scores = {
    red: 0,
    blue: 0,
  };
  grid.map((row, rowIndex) => {
    for (let columnIndex = 0; columnIndex < grid[0].length - 2; columnIndex++) {
      let firstSquare = grid[rowIndex][columnIndex];
      let secondSquare = grid[rowIndex][columnIndex + 1];
      let thirdSquare = grid[rowIndex][columnIndex + 2];
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
