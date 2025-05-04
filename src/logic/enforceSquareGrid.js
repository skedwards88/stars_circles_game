export function enforceSquareGrid(grid) {
  if (grid.length != grid[0]?.length) {
    throw new Error(
      `The number of columns and number of rows in the grid must be equal and non-zero.`,
    );
  }

  const numColumnsPerRow = grid.map((row) => row.length);
  if (Math.min(...numColumnsPerRow) != Math.max(...numColumnsPerRow)) {
    throw new Error(`All of the rows in the grid must have the same length.`);
  }
}
