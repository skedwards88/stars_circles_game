import {getSurroundingIndexes} from "./getSurroundingIndexes";

describe("getSurroundingIndexes", () => {
  test("Grid size 5, top left corner", () => {
    expect(getSurroundingIndexes({index: 0, gridSize: 5})).toStrictEqual([
      0, 1, 5, 6,
    ]);
  });

  test("Grid size 6, top right corner", () => {
    expect(getSurroundingIndexes({index: 5, gridSize: 6})).toStrictEqual([
      4, 5, 10, 11,
    ]);
  });

  test("Grid size 5, bottom left corner", () => {
    expect(getSurroundingIndexes({index: 20, gridSize: 5})).toStrictEqual([
      15, 16, 20, 21,
    ]);
  });

  test("Grid size 5, bottom right corner", () => {
    expect(getSurroundingIndexes({index: 24, gridSize: 5})).toStrictEqual([
      18, 19, 23, 24,
    ]);
  });

  test("Grid size 5, center", () => {
    expect(getSurroundingIndexes({index: 7, gridSize: 5})).toStrictEqual([
      1, 2, 3, 6, 7, 8, 11, 12, 13,
    ]);
  });
});
