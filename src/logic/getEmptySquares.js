export function getEmptySquares(gridSize) {
  return Array.from({length: gridSize * gridSize}, () => ({
    color: "",
    symbol: "",
    valid: {
      red: {
        star: true,
        circle: true,
      },
      blue: {
        star: true,
        circle: true,
      },
    },
  }));
}
