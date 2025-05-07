import type {Square} from "../Types";

export function getEmptySquares(gridSize: number): Square[] {
  return Array.from(
    {length: gridSize * gridSize},
    () =>
      ({
        color: "",
        shape: "",
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
      } as Square),
  );
}
