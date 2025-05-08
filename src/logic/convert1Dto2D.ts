export function convert1Dto2D<T>(inputArray: T[]): T[][] {
  const gridSize = Math.sqrt(inputArray.length);

  // Error if not a square? otherwise should accept grid size param instead of just taking sqrt todo

  // Convert a 1D array into a 2D array
  const inputCopy = [...inputArray];
  const grid = [];
  while (inputCopy.length) {
    const row = inputCopy.splice(0, gridSize);
    grid.push(row);
  }
  return grid;
}
