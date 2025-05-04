export function transposeGrid(grid) {
  if (!grid.length) {
    return [];
  }

  const numColumnsPerRow = grid.map((row) => row.length);
  if (Math.min(...numColumnsPerRow) != Math.max(...numColumnsPerRow)) {
    throw new Error(`All of the rows in the grid must have the same length.`);
  }

  const transposedGrid = grid[0].map((_, columnIndex) => {
    return grid.map((row) => {
      return row[columnIndex];
    });
  });

  return transposedGrid;
}
