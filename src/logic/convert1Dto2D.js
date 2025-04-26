export function convert1Dto2D(inputArray) {
  const gridSize = Math.sqrt(inputArray.length);

  // Error if not a square? todo

  // Convert a 1D array into a 2D array
  const inputCopy = [...inputArray];
  let grid = [];
  while (inputCopy.length) {
    const row = inputCopy.splice(0, gridSize);
    grid.push(row);
  }
  return grid;
}
