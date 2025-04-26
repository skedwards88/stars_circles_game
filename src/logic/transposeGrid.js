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
