import {
    calculateHorizontalScore,
    calculateVerticalScore,
    transposeGrid,
    transposeDiagonalFromLeft,
    calculateDiagonalFromLeftScore,
    calculateDiagonalFromRightScore,
    transposeDiagonalFromRight,
    calculateScore,
    isEndgame,
    updateBlackout
} from './index';

// Horizontal Scoring
test('Empty grid has score of 0 for both colors', () => {
    let expected = {
        'red' : 0,
        'blue': 0
    };
    let grid = Array.from({length: 5}, e => Array(5).fill(null));
  expect(calculateHorizontalScore(grid)).toEqual(expected);
});

test('Matching colors are scored, shape is not considered.', () => {
    let expected = {
        'red' : 1,
        'blue': 0
    };
    let grid = Array.from({length: 5}, e => Array(5).fill(null));
    grid[0][0] = {color:'red', shape:'star'};
    grid[0][1] = {color:'red', shape:'circle'};
    grid[0][2] = {color:'red', shape:'star'};
    grid[0][3] = {color:'blue', shape:'star'};
    grid[0][4] = {color:'blue', shape:'star'};

  expect(calculateHorizontalScore(grid)).toEqual(expected);
});

test('Overlapping sets are counted.', () => {
    let expected = {
        'red' : 3,
        'blue': 0
    };
    let grid = Array.from({length: 5}, e => Array(5).fill(null));
    grid[3][0] = {color:'red', shape:'star'};
    grid[3][1] = {color:'red', shape:'circle'};
    grid[3][2] = {color:'red', shape:'star'};
    grid[3][3] = {color:'red', shape:'star'};
    grid[3][4] = {color:'red', shape:'star'};

  expect(calculateHorizontalScore(grid)).toEqual(expected);
});

test('Vertical sets are not counted.', () => {
    let expected = {
        'red' : 0,
        'blue': 0
    };
    let grid = Array.from({length: 5}, e => Array(5).fill(null));
    grid[0][0] = {color:'red', shape:'star'};
    grid[1][0] = {color:'red', shape:'circle'};
    grid[2][0] = {color:'red', shape:'star'};
    grid[3][0] = {color:'blue', shape:'star'};
    grid[4][0] = {color:'blue', shape:'star'};

  expect(calculateHorizontalScore(grid)).toEqual(expected);
});


// Vertical Scoring
test('Empty grid has score of 0 for both colors', () => {
    let expected = {
        'red' : 0,
        'blue': 0
    };
    let grid = Array.from({length: 5}, e => Array(5).fill(null));
  expect(calculateVerticalScore(grid)).toEqual(expected);
});

test('Matching colors are scored, shape is not considered.', () => {
    let expected = {
        'red' : 1,
        'blue': 0
    };
    let grid = Array.from({length: 5}, e => Array(5).fill(null));
    grid[0][0] = {color:'red', shape:'star'};
    grid[1][0] = {color:'red', shape:'circle'};
    grid[2][0] = {color:'red', shape:'star'};
    grid[3][0] = {color:'blue', shape:'star'};
    grid[4][0] = {color:'blue', shape:'star'};

  expect(calculateVerticalScore(grid)).toEqual(expected);
});

test('Overlapping sets are counted.', () => {
    let expected = {
        'red' : 3,
        'blue': 0
    };
    let grid = Array.from({length: 5}, e => Array(5).fill(null));
    grid[0][0] = {color:'red', shape:'star'};
    grid[1][0] = {color:'red', shape:'circle'};
    grid[2][0] = {color:'red', shape:'star'};
    grid[3][0] = {color:'red', shape:'star'};
    grid[4][0] = {color:'red', shape:'star'};

  expect(calculateVerticalScore(grid)).toEqual(expected);
});

// Transpose rows and columns
test('Transpose a 3x3 grid so that the diagonals from upper left to lower right are aligned horizontally with nulls padding the rows to keep them the same length.', () => {
    let grid = [[0,1,2],[3,4,5],[6,7,8]];
    let expected = [[ 0, 3, 6 ], [ 1, 4, 7 ], [ 2, 5, 8 ]];
    expect(transposeGrid(grid)).toEqual(expected)
})

// Transpose diagonals from upper left to lower right
test('Transpose a 3x3 grid so that the diagonals from upper left to lower right are aligned horizontally with nulls padding the rows to keep them the same length.', () => {
    let grid = [[0,1,2],[3,4,5],[6,7,8]];
    let expected = [
            [ null, null, 6 ],
            [ null, 3, 7 ],
            [ 0, 4, 8 ],
            [ 1, 5, null ],
            [ 2, null, null ]
          ];
    expect(transposeDiagonalFromLeft(grid)).toEqual(expected)
})

test('Transpose a 5x5 grid so that the diagonals from upper left to lower right are aligned horizontally with nulls padding the rows to keep them the same length.', () => {
    let grid = [
        [0,1,2,3,4],
        [5,6,7,8,9],
        [10,11,12,13,14],
        [15,16,17,18,19],
        [20,21,22,23,24]
    ];
    let expected = [
        [ null, null, null, null, 20 ],
        [ null, null, null, 15, 21 ],
        [ null, null, 10, 16, 22 ],
        [ null, 5, 11, 17, 23 ],
        [ 0, 6, 12, 18, 24 ],
        [ 1, 7, 13, 19, null ],
        [ 2, 8, 14, null, null ],
        [ 3, 9, null, null, null ],
        [ 4, null, null, null, null ]
      ];
    expect(transposeDiagonalFromLeft(grid)).toEqual(expected)
})

// Transpose diagonals from upper right to lower left
test('Transpose a 5x5 grid so that the diagonals from upper right to lower left are aligned horizontally with nulls padding the rows to keep them the same length.', () => {
    let grid = [
        [0,1,2,3,4],
        [5,6,7,8,9],
        [10,11,12,13,14],
        [15,16,17,18,19],
        [20,21,22,23,24]
    ];
    let expected =  [
        [ 0, null, null, null, null ],
        [ 1, 5, null, null, null ],
        [ 2, 6, 10, null, null ],
        [ 3, 7, 11, 15, null ],
        [ 4, 8, 12, 16, 20 ],
        [ null, 9, 13, 17, 21 ],
        [ null, null, 14, 18, 22 ],
        [ null, null, null, 19, 23 ],
        [ null, null, null, null, 24 ]
      ];
    expect(transposeDiagonalFromRight(grid)).toEqual(expected)
})

// Diagonal from upper left scoring
test('Empty grid has score of 0 for both colors', () => {
    let expected = {
        'red' : 0,
        'blue': 0
    };
    let grid = Array.from({length: 5}, e => Array(5).fill(null));
  expect(calculateDiagonalFromLeftScore(grid)).toEqual(expected);
});

test('Matching colors are scored, shape is not considered.', () => {
    let expected = {
        'red' : 1,
        'blue': 0
    };
    let grid = Array.from({length: 5}, e => Array(5).fill(null));
    grid[0][0] = {color:'red', shape:'star'};
    grid[1][1] = {color:'red', shape:'circle'};
    grid[2][2] = {color:'red', shape:'star'};
    grid[3][3] = {color:'blue', shape:'star'};
    grid[4][4] = {color:'blue', shape:'star'};

  expect(calculateDiagonalFromLeftScore(grid)).toEqual(expected);
});

test('Overlapping sets are counted.', () => {
    let expected = {
        'red' : 3,
        'blue': 0
    };
    let grid = Array.from({length: 5}, e => Array(5).fill(null));
    grid[0][0] = {color:'red', shape:'star'};
    grid[1][1] = {color:'red', shape:'circle'};
    grid[2][2] = {color:'red', shape:'star'};
    grid[3][3] = {color:'red', shape:'star'};
    grid[4][4] = {color:'red', shape:'star'};

  expect(calculateDiagonalFromLeftScore(grid)).toEqual(expected);
});

test('Only diagonals from upper left to lower right are counted.', () => {
    let expected = {
        'red' : 1,
        'blue': 0
    };
    let grid = Array.from({length: 5}, e => Array(5).fill(null));
    grid[1][0] = {color:'red', shape:'star'};
    grid[1][1] = {color:'red', shape:'circle'};
    grid[1][2] = {color:'red', shape:'star'};
    grid[2][0] = {color:'red', shape:'star'};
    grid[2][1] = {color:'red', shape:'star'};
    grid[2][2] = {color:'red', shape:'star'};
    grid[3][0] = {color:'red', shape:'star'};
    grid[3][1] = {color:'red', shape:'star'};
    grid[3][2] = {color:'red', shape:'star'};

  expect(calculateDiagonalFromLeftScore(grid)).toEqual(expected);
});


// Diagonal from upper right scoring
test('Scoring diagonal from upper right: Empty grid has score of 0 for both colors', () => {
    let expected = {
        'red' : 0,
        'blue': 0
    };
    let grid = Array.from({length: 5}, e => Array(5).fill(null));
  expect(calculateDiagonalFromRightScore(grid)).toEqual(expected);
});

test('Scoring diagonal from upper right: Matching colors are scored, shape is not considered.', () => {
    let expected = {
        'red' : 1,
        'blue': 0
    };
    let grid = Array.from({length: 5}, e => Array(5).fill(null));
    grid[0][4] = {color:'red', shape:'star'};
    grid[1][3] = {color:'red', shape:'circle'};
    grid[2][2] = {color:'red', shape:'star'};
    grid[3][1] = {color:'blue', shape:'star'};
    grid[4][0] = {color:'blue', shape:'star'};

  expect(calculateDiagonalFromRightScore(grid)).toEqual(expected);
});

test('Scoring diagonal from upper right: Overlapping sets are counted.', () => {
    let expected = {
        'red' : 3,
        'blue': 0
    };
    let grid = Array.from({length: 5}, e => Array(5).fill(null));
    grid[0][4] = {color:'red', shape:'star'};
    grid[1][3] = {color:'red', shape:'circle'};
    grid[2][2] = {color:'red', shape:'star'};
    grid[3][1] = {color:'red', shape:'star'};
    grid[4][0] = {color:'red', shape:'star'};

  expect(calculateDiagonalFromRightScore(grid)).toEqual(expected);
});

test('Scoring diagonal from upper right: Only diagonals from upper right to lower left are counted.', () => {
    let expected = {
        'red' : 1,
        'blue': 0
    };
    let grid = Array.from({length: 5}, e => Array(5).fill(null));
    grid[1][0] = {color:'red', shape:'star'};
    grid[1][1] = {color:'red', shape:'circle'};
    grid[1][2] = {color:'red', shape:'star'};
    grid[2][0] = {color:'red', shape:'star'};
    grid[2][1] = {color:'red', shape:'star'};
    grid[2][2] = {color:'red', shape:'star'};
    grid[3][0] = {color:'red', shape:'star'};
    grid[3][1] = {color:'red', shape:'star'};
    grid[3][2] = {color:'red', shape:'star'};

  expect(calculateDiagonalFromRightScore(grid)).toEqual(expected);
});


// Scoring
test('Empty grid has score of 0 for both colors', () => {
    let expected = {
        'red' : 0,
        'blue': 0
    };
    let grid = Array.from({length: 5}, e => Array(5).fill(null));
  expect(calculateScore(grid)).toEqual(expected);
});

test('Matching colors are scored, shape is not considered.', () => {
    let expected = {
        'red' : 1,
        'blue': 0
    };
    let grid = Array.from({length: 5}, e => Array(5).fill(null));
    grid[0][0] = {color:'red', shape:'star'};
    grid[0][1] = {color:'red', shape:'circle'};
    grid[0][2] = {color:'red', shape:'star'};
    grid[0][3] = {color:'blue', shape:'star'};
    grid[0][4] = {color:'blue', shape:'star'};

  expect(calculateScore(grid)).toEqual(expected);
});

test('Overlapping sets are counted.', () => {
    let expected = {
        'red' : 3,
        'blue': 0
    };
    let grid = Array.from({length: 5}, e => Array(5).fill(null));
    grid[3][0] = {color:'red', shape:'star'};
    grid[3][1] = {color:'red', shape:'circle'};
    grid[3][2] = {color:'red', shape:'star'};
    grid[3][3] = {color:'red', shape:'star'};
    grid[3][4] = {color:'red', shape:'star'};

  expect(calculateScore(grid)).toEqual(expected);
});

// Endgame
test('If red and blue both have legal spaces to play, return false.', () => {
    let legalMoves = [
        [{
            'red': {'star': true,'circle' : true},
            'blue': {'star': true,'circle' : true}
        },
        {
            'red': {'star': true,'circle' : true},
            'blue': {'star': true,'circle' : true}
        },
        {
            'red': {'star': true,'circle' : true},
            'blue': {'star': true,'circle' : true}
        },
        {
            'red': {'star': true,'circle' : true},
            'blue': {'star': true,'circle' : true}
        },
        {
            'red': {'star': true,'circle' : true},
            'blue': {'star': true,'circle' : true}
        }],
        [{
            'red': {'star': true,'circle' : true},
            'blue': {'star': true,'circle' : true}
        },
        {
            'red': {'star': true,'circle' : true},
            'blue': {'star': true,'circle' : true}
        },
        {
            'red': {'star': true,'circle' : true},
            'blue': {'star': true,'circle' : true}
        },
        {
            'red': {'star': true,'circle' : true},
            'blue': {'star': true,'circle' : true}
        },
        {
            'red': {'star': true,'circle' : true},
            'blue': {'star': true,'circle' : true}
        }],
        [{
            'red': {'star': true,'circle' : true},
            'blue': {'star': true,'circle' : true}
        },
        {
            'red': {'star': true,'circle' : true},
            'blue': {'star': true,'circle' : true}
        },
        {
            'red': {'star': true,'circle' : true},
            'blue': {'star': true,'circle' : true}
        },
        {
            'red': {'star': true,'circle' : true},
            'blue': {'star': true,'circle' : true}
        },
        {
            'red': {'star': true,'circle' : true},
            'blue': {'star': true,'circle' : true}
        }],
        [{
            'red': {'star': true,'circle' : true},
            'blue': {'star': true,'circle' : true}
        },
        {
            'red': {'star': true,'circle' : true},
            'blue': {'star': true,'circle' : true}
        },
        {
            'red': {'star': true,'circle' : true},
            'blue': {'star': true,'circle' : true}
        },
        {
            'red': {'star': true,'circle' : true},
            'blue': {'star': true,'circle' : true}
        },
        {
            'red': {'star': true,'circle' : true},
            'blue': {'star': true,'circle' : true}
        }],
        [{
            'red': {'star': true,'circle' : true},
            'blue': {'star': true,'circle' : true}
        },
        {
            'red': {'star': true,'circle' : true},
            'blue': {'star': true,'circle' : true}
        },
        {
            'red': {'star': true,'circle' : true},
            'blue': {'star': true,'circle' : true}
        },
        {
            'red': {'star': true,'circle' : true},
            'blue': {'star': true,'circle' : true}
        },
        {
            'red': {'star': true,'circle' : true},
            'blue': {'star': true,'circle' : true}
        }]
    ];
    let expected = {
        'red': true,
        'blue': true
    };
    expect(isEndgame(legalMoves)).toBe(false);
});

test('If only one color has legal spaces to play, return true.', () => {
    let legalMoves = [
        [{
            'red': {'star': true,'circle' : true},
            'blue': {'star': false,'circle' : false}
        },
        {
            'red': {'star': true,'circle' : true},
            'blue': {'star': false,'circle' : false}
        },
        {
            'red': {'star': true,'circle' : true},
            'blue': {'star': false,'circle' : false}
        },
        {
            'red': {'star': true,'circle' : true},
            'blue': {'star': false,'circle' : false}
        },
        {
            'red': {'star': true,'circle' : true},
            'blue': {'star': false,'circle' : false}
        }],
        [{
            'red': {'star': true,'circle' : true},
            'blue': {'star': false,'circle' : false}
        },
        {
            'red': {'star': true,'circle' : true},
            'blue': {'star': false,'circle' : false}
        },
        {
            'red': {'star': true,'circle' : true},
            'blue': {'star': false,'circle' : false}
        },
        {
            'red': {'star': true,'circle' : true},
            'blue': {'star': false,'circle' : false}
        },
        {
            'red': {'star': true,'circle' : true},
            'blue': {'star': false,'circle' : false}
        }],
        [{
            'red': {'star': true,'circle' : true},
            'blue': {'star': false,'circle' : false}
        },
        {
            'red': {'star': true,'circle' : true},
            'blue': {'star': false,'circle' : false}
        },
        {
            'red': {'star': true,'circle' : true},
            'blue': {'star': false,'circle' : false}
        },
        {
            'red': {'star': true,'circle' : true},
            'blue': {'star': false,'circle' : false}
        },
        {
            'red': {'star': true,'circle' : true},
            'blue': {'star': false,'circle' : false}
        }],
        [{
            'red': {'star': true,'circle' : true},
            'blue': {'star': false,'circle' : false}
        },
        {
            'red': {'star': true,'circle' : true},
            'blue': {'star': false,'circle' : false}
        },
        {
            'red': {'star': true,'circle' : true},
            'blue': {'star': false,'circle' : false}
        },
        {
            'red': {'star': true,'circle' : true},
            'blue': {'star': false,'circle' : false}
        },
        {
            'red': {'star': true,'circle' : true},
            'blue': {'star': false,'circle' : false}
        }],
        [{
            'red': {'star': true,'circle' : true},
            'blue': {'star': false,'circle' : false}
        },
        {
            'red': {'star': true,'circle' : true},
            'blue': {'star': false,'circle' : false}
        },
        {
            'red': {'star': true,'circle' : true},
            'blue': {'star': false,'circle' : false}
        },
        {
            'red': {'star': true,'circle' : true},
            'blue': {'star': false,'circle' : false}
        },
        {
            'red': {'star': true,'circle' : true},
            'blue': {'star': false,'circle' : false}
        }]
    ];
    let expected = {
        'red': true,
        'blue': false
    };
    expect(isEndgame(legalMoves)).toBe(true);
});

test('If neither color has legal spaces to play, return true', () => {
    let legalMoves = [
        [{
            'red': {'star': false,'circle' : false},
            'blue': {'star': false,'circle' : false}
        },
        {
            'red': {'star': false,'circle' : false},
            'blue': {'star': false,'circle' : false}
        },
        {
            'red': {'star': false,'circle' : false},
            'blue': {'star': false,'circle' : false}
        },
        {
            'red': {'star': false,'circle' : false},
            'blue': {'star': false,'circle' : false}
        },
        {
            'red': {'star': false,'circle' : false},
            'blue': {'star': false,'circle' : false}
        }],
        [{
            'red': {'star': false,'circle' : false},
            'blue': {'star': false,'circle' : false}
        },
        {
            'red': {'star': false,'circle' : false},
            'blue': {'star': false,'circle' : false}
        },
        {
            'red': {'star': false,'circle' : false},
            'blue': {'star': false,'circle' : false}
        },
        {
            'red': {'star': false,'circle' : false},
            'blue': {'star': false,'circle' : false}
        },
        {
            'red': {'star': false,'circle' : false},
            'blue': {'star': false,'circle' : false}
        }],
        [{
            'red': {'star': false,'circle' : false},
            'blue': {'star': false,'circle' : false}
        },
        {
            'red': {'star': false,'circle' : false},
            'blue': {'star': false,'circle' : false}
        },
        {
            'red': {'star': false,'circle' : false},
            'blue': {'star': false,'circle' : false}
        },
        {
            'red': {'star': false,'circle' : false},
            'blue': {'star': false,'circle' : false}
        },
        {
            'red': {'star': false,'circle' : false},
            'blue': {'star': false,'circle' : false}
        }],
        [{
            'red': {'star': false,'circle' : false},
            'blue': {'star': false,'circle' : false}
        },
        {
            'red': {'star': false,'circle' : false},
            'blue': {'star': false,'circle' : false}
        },
        {
            'red': {'star': false,'circle' : false},
            'blue': {'star': false,'circle' : false}
        },
        {
            'red': {'star': false,'circle' : false},
            'blue': {'star': false,'circle' : false}
        },
        {
            'red': {'star': false,'circle' : false},
            'blue': {'star': false,'circle' : false}
        }],
        [{
            'red': {'star': false,'circle' : false},
            'blue': {'star': false,'circle' : false}
        },
        {
            'red': {'star': false,'circle' : false},
            'blue': {'star': false,'circle' : false}
        },
        {
            'red': {'star': false,'circle' : false},
            'blue': {'star': false,'circle' : false}
        },
        {
            'red': {'star': false,'circle' : false},
            'blue': {'star': false,'circle' : false}
        },
        {
            'red': {'star': false,'circle' : false},
            'blue': {'star': false,'circle' : false}
        }]
    ];
    let expected = {
        'red': false,
        'blue': false
    };
    expect(isEndgame(legalMoves)).toBe(true);
});

test('update blackout' ,() => {
    let squares = [
        [{shape:'star',color:'red'},null,{shape:'star',color:'red'},null,null],
        [null,{shape:'circle',color:'red'},{shape:'null',color:'black'},{shape:'circle',color:'blue'},null],
        [{shape:'star',color:'blue'},null,{shape:'star',color:'blue'},null,{shape:'star',color:'red'}],
        [null,null,{shape:'star',color:'blue'},null,{shape:'circle',color:'red'}],
        [null,null,null,{shape:'circle',color:'red'},null]
    ];
    let gridSize = 5;
    let legalMoves = [];
    for (let rowIndex = 0; rowIndex < gridSize; rowIndex++) {
        let row = [];
        for (let columnIndex = 0; columnIndex < gridSize; columnIndex++) {
            row.push({
                'red': {
                    'star': true,
                    'circle' : true
                },
                'blue': {
                    'star': true,
                    'circle' : true
                }
            });
        }
        legalMoves.push(row);
    };
    legalMoves[2][3] = {
        'red': {
            'star': false,
            'circle' : false
        },
        'blue': {
            'star': false,
            'circle' : false
        }
    };
    let expected = squares.slice();
    expected[2][3] = {shape:'null',color:'black'}
    expect(updateBlackout(squares, legalMoves)).toEqual(expected);
})

test('update blackout only considers the input legal moves, not the surrounding squares' ,() => {
    let squares = [
        [null,null,null,null,null],
        [null,null,null,null,null],
        [null,null,null,null,null],
        [null,null,null,null,null],
        [null,null,null,null,null]
    ];
    let gridSize = 5;
    let legalMoves = [];
    for (let rowIndex = 0; rowIndex < gridSize; rowIndex++) {
        let row = [];
        for (let columnIndex = 0; columnIndex < gridSize; columnIndex++) {
            row.push({
                'red': {
                    'star': true,
                    'circle' : true
                },
                'blue': {
                    'star': true,
                    'circle' : true
                }
            });
        }
        legalMoves.push(row);
    };
    legalMoves[2][3] = {
        'red': {
            'star': false,
            'circle' : false
        },
        'blue': {
            'star': false,
            'circle' : false
        }
    };
    let expected = squares.slice();
    expected[2][3] = {shape:'null',color:'black'}
    expect(updateBlackout(squares, legalMoves)).toEqual(expected);
})

test('In the case that the input legal moves dictates that a square has no legal moves, if the square is aready filled, it will remain unchanged' ,() => {
    let squares = [
        [null,null,null,null,null],
        [null,null,null,null,null],
        [null,null,null,null,null],
        [null,null,null,null,null],
        [null,null,null,null,null]
    ];
    squares[2][3] = {shape:'star',color:'blue'}

    let gridSize = 5;
    let legalMoves = [];
    for (let rowIndex = 0; rowIndex < gridSize; rowIndex++) {
        let row = [];
        for (let columnIndex = 0; columnIndex < gridSize; columnIndex++) {
            row.push({
                'red': {
                    'star': true,
                    'circle' : true
                },
                'blue': {
                    'star': true,
                    'circle' : true
                }
            });
        }
        legalMoves.push(row);
    };
    legalMoves[2][3] = {
        'red': {
            'star': false,
            'circle' : false
        },
        'blue': {
            'star': false,
            'circle' : false
        }
    };
    let expected = squares.slice();
    expected[2][3] = {shape:'star',color:'blue'}
    expect(updateBlackout(squares, legalMoves)).toEqual(expected);
})