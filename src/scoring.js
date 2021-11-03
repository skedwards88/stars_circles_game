export function calculateScore({ squares, gridSize }) {

  // Convert the 1D array into a 2D array so we can calculate the score geometrically
  const grid = squaresToGrid(squares, gridSize)
  
  const horizontalScores = calculateHorizontalScore(grid);
  const verticalScores = calculateVerticalScore(grid);
  const diagonalFromLeftScores = calculateDiagonalFromLeftScore(grid);
  const diagonalFromRightScores = calculateDiagonalFromRightScore(grid);

  const redScore =
    horizontalScores.red +
    verticalScores.red +
    diagonalFromLeftScores.red +
    diagonalFromRightScores.red;
  const blueScore =
    horizontalScores.blue +
    verticalScores.blue +
    diagonalFromLeftScores.blue +
    diagonalFromRightScores.blue;
  return {
    red: redScore,
    blue: blueScore,
  };
}

export function squaresToGrid(squares, gridSize) {
  // Convert a 1D array into a 2D array
  const squaresCopy = [...squares]
  let grid = [];
  while (squaresCopy.length) {
    const row = squaresCopy.splice(0, gridSize);
    grid.push(row);
  }
  return grid
}

export function transposeGrid(grid) {
  // Transpose the grid so that the rows become the columns:
  //   for each column index,
  //   map over each row in the grid
  //   and take the item in the row that is at the current column index
  return grid[0].map((_, columnIndex) => {
    return grid.map((innerLoopRow) => {
      return innerLoopRow[columnIndex];
    });
  });
}

export function transposeDiagonalFromLeft(grid) {
  // debugger
  // Shift the grid so that the diagonals from upper left to lower right are aligned vertically
  // Pad the grid with nulls to maintain equal length of each row
  // [
  //     [0,1,2],
  //     [3,4,5],
  //     [6,7,8]
  // ] becomes [
  //   [ N, N, 0, 1, 2 ],
  //   [ N, 3, 4, 5, N ],
  //   [ 6, 7, 8, N, N ]
  // ] where N is null
  let leftShift = [];
  grid.map((row, rowIndex) => {
    let prepend = Array(grid[rowIndex].length - 1 - rowIndex).fill(null);
    let append = Array(parseInt(rowIndex)).fill(null);
    let newRow = prepend.concat(grid[rowIndex].concat(append));
    leftShift.push(newRow);
  });

  // Transpose the grid so that the verticals become the horizontals
  // [
  //     [ N, N, 6 ],
  //     [ N, 3, 7 ],
  //     [ 0, 4, 8 ],
  //     [ 1, 5, N ],
  //     [ 2, N, N ]
  //   ]
  return transposeGrid(leftShift);
}

export function transposeDiagonalFromRight(grid) {
  // Shift the grid so that the diagonals from upper right to lower left are aligned vertically
  // Pad the grid with nulls to maintain equal length of each row
  // [
  //     [0,1,2],
  //     [3,4,5],
  //     [6,7,8]
  // ] becomes [
  //   [ 0, 1, 2, N, N],
  //   [ N, 3, 4, 5, N],
  //   [ N, N, 6, 7, 8 ]
  // ] where N is null
  let rightShift = [];
  for (let row in grid) {
    let prepend = Array(parseInt(row)).fill(null);
    let append = Array(grid[row].length - 1 - row).fill(null);
    let newRow = prepend.concat(grid[row].concat(append));
    rightShift.push(newRow);
  }

  // Transpose the grid so that the verticals become the horizontals
  // [
  //     [ N, N, 6 ],
  //     [ N, 3, 7 ],
  //     [ 0, 4, 8 ],
  //     [ 1, 5, N ],
  //     [ 2, N, N ]
  //   ]
  return transposeGrid(rightShift);
}

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

export function calculateVerticalScore(grid) {
  // transpose the grid so that the rows become the columns
  const vertical = transposeGrid(grid);

  // Calculate the transposed grid score
  return calculateHorizontalScore(vertical);
}

export function calculateDiagonalFromLeftScore(grid) {
  const diagonalFromLeft = transposeDiagonalFromLeft(grid);
  return calculateHorizontalScore(diagonalFromLeft);
}

export function calculateDiagonalFromRightScore(grid) {
  let diagonalFromRight = transposeDiagonalFromRight(grid);
  return calculateHorizontalScore(diagonalFromRight);
}
