import {
  noChoicesRemaining,
  autoFillRemaining,
  getSurroundingIndexes,
} from './helpers';

// noChoicesRemaining
test('noChoicesRemaining: If both players have legal spaces to play, return false.', () => {
  const squares = Array.from({ length: 5 * 5 }, () => ({
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
  }))

  expect(noChoicesRemaining(squares)).toBe(false);
});

test('noChoicesRemaining: If only one color has legal spaces to play, return true.', () => {
  
  const squares = Array.from({ length: 5 * 5 }, () => ({
    color: "",
    symbol: "",
    valid: {
      red: {
        star: false,
        circle: false,
      },
      blue: {
        star: true,
        circle: true,
      },
    },
  }))

  expect(noChoicesRemaining(squares)).toBe(true);
});

test('noChoicesRemaining: If neither color has legal spaces to play, return true', () => {
  const squares = Array.from({ length: 5 * 5 }, () => ({
    color: "",
    symbol: "",
    valid: {
      red: {
        star: false,
        circle: false,
      },
      blue: {
        star: false,
        circle: false,
      },
    },
  }))

  expect(noChoicesRemaining(squares)).toBe(true);

});

test('autoFillRemaining: ', () => {
  let squares = Array.from({ length: 5 * 5 }, () => ({
    color: "blue",
    symbol: "star",
    valid: {
      red: {
        star: false,
        circle: false,
      },
      blue: {
        star: false,
        circle: false,
      },
    },
  }))

  squares[0] = {
    color: "",
    symbol: "",
    valid: {
      red: {
        star: true,
        circle: false,
      },
      blue: {
        star: false,
        circle: false,
      },
    },
  }

const autofilled = autoFillRemaining(squares)

  expect(autofilled[0].color).toBe("red");

});

// getSurroundingIndexes
test('getSurroundingIndexes: Grid size 5, top left corner', () => {
  expect(getSurroundingIndexes({index: 0, gridSize: 5})).toStrictEqual([0, 1, 5, 6]);
});

test('getSurroundingIndexes: Grid size 6, top right corner', () => {
  expect(getSurroundingIndexes({index: 5, gridSize: 6})).toStrictEqual([4, 5, 10, 11]);
});

test('getSurroundingIndexes: Grid size 5, bottom left corner', () => {
  expect(getSurroundingIndexes({index: 20, gridSize: 5})).toStrictEqual([15, 16, 20, 21]);
});

test('getSurroundingIndexes: Grid size 5, bottom right corner', () => {
  expect(getSurroundingIndexes({index: 24, gridSize: 5})).toStrictEqual([18, 19, 23, 24]);
});

test('getSurroundingIndexes: Grid size 5, center', () => {
  expect(getSurroundingIndexes({index: 7, gridSize: 5})).toStrictEqual([1, 2, 3, 6, 7, 8, 11, 12, 13]);
});