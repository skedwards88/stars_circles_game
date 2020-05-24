import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './rules.css';
import Tutorial from './rules.js';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';


class Token {
    constructor(color, shape) {
        this.color = color;
        this.shape = shape;
    }
}

function Square(props) {
    let tokenName = "square";
    let symbol = null;
    if (props.color) {
        tokenName += (" " + props.color);
        if (props.shape === 'star') {
            symbol = 'X';
        } else if (props.shape === 'circle') {
            symbol = 'O';
        }
    } else if (props.hints && props.hintShape && props.hintColor && props.legalMove[props.hintColor][props.hintShape]) {
        tokenName += (" " + props.hintColor + " hint")
    }
    return (
        <div className={tokenName}
                onDragOver={props.onDragOver}
                onDrop={props.onDrop}>
            {symbol}
        </div>
    );
}

class Board extends React.Component {

    renderSquare(row, column) {
        const squares = this.props.squares;
        const square = squares[row][column];
        return (
            <DropTarget
                targetKey="token"
                dropData={{'row':row, 'column':column}}
                key={row + ',' + column}
            >
            <Square
                shape={square ? square.shape : null}
                color={square ? square.color : null}
                key={row + ',' + column}
                row={row}
                column={column}
                legalMove = {this.props.legalMoves[row][column]}
                hintShape = {this.props.hintShape}
                hintColor = {this.props.hintColor}
                hints={this.props.hints}
            />
            </DropTarget>
        );
    }

    createSquares() {
        let rows = [];
        for (let row = 0; row < this.props.gridSize; row++) {
            let squares = [];
            for (let column = 0; column < this.props.gridSize; column++) {
                squares.push(this.renderSquare(row, column));
            }
            rows.push(<div className="board-row" key={row}>{squares}</div>);
        }
        return rows;
    }

    render() {
        return (
            <div>
                {this.createSquares()}
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
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
        }
        this.state = {
            gridSize: gridSize,
            history: {
                squares: [Array.from({length: gridSize}, e => Array(gridSize).fill(null))],
                legalMoves: [legalMoves]
            },
            blueIsNext: true,
            hints: true,
            hintColor: null,
            hintShape: null,
            showRules: false,
            currentRule: 1,
        };
        // todo understand when need to bind
        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
        this.handlePrevious = this.handlePrevious.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleHintsChange = this.handleHintsChange.bind(this);
        this.handleNewGame = this.handleNewGame.bind(this);
    }

    handleShow() {
        this.setState({showRules: true});
    }

    handleHide() {
        this.setState({
            showRules: false,
            currentStep: 1
        });
    }

    handlePrevious() {
        let currentRule = this.state.currentRule
        currentRule =  currentRule - 1;
        this.setState({currentRule: currentRule});
    }

    handleNext() {
        let currentRule = this.state.currentRule;
        currentRule =  currentRule + 1;
        this.setState({currentRule: currentRule});
    }

    handleDragOver = (e, row, column) => {
        e.preventDefault();
    }

    handleDrop(e) {
        const row = e.dropData.row;
        const column = e.dropData.column;
        let shape = e.dragData.shape;
        let history = this.state.history;
        const squaresHistory = history.squares.slice();
        let squares = squaresHistory[squaresHistory.length - 1].map(a => {return a.slice()})
        let color = (this.state.blueIsNext ? "blue" : "red");
        let converseShape = (shape === "star" ? "circle" : "star");
        let converseColor = (this.state.blueIsNext ? "red" : "blue");

        // If the selected symbol cannot be legally placed in the square, don't allow it
        const legalMovesHistory = history.legalMoves.slice();
        let legalMoves = JSON.parse(JSON.stringify(legalMovesHistory[legalMovesHistory.length - 1]))
        if (!(legalMoves[row][column][color][shape])){
            return;
        }

        // Update the legal moves (red circle can't be next to blue circle, red star can't be next to blue star)
        const gridSize = this.state.gridSize;
        for (let currentRow = row-1; currentRow <= row+1; currentRow++) {
            for (let currentColumn = column-1; currentColumn <= column+1; currentColumn++) {
                if (currentRow === row && currentColumn === column) {
                    legalMoves[currentRow][currentColumn][converseColor][shape] = false;
                    legalMoves[currentRow][currentColumn][converseColor][converseShape] = false;
                    legalMoves[currentRow][currentColumn][color][converseShape] = false;
                    legalMoves[currentRow][currentColumn][color][shape] = false;
                }
                if (currentRow >=0 && currentColumn >=0 && currentRow < gridSize && currentColumn < gridSize) {
                    legalMoves[currentRow][currentColumn][converseColor][shape] = false;
                }
            }
        }

        // Put a token in the square where the token was dropped
        squares[row][column] = new Token(color, shape);

        // Update next player color
        let body = document.getElementsByTagName("body")[0];
        body.style.setProperty("--player_color", (this.state.blueIsNext ? "var(--red_color)" : "var(--blue_color)"));

        history.squares = squaresHistory.concat([squares])
        history.legalMoves = legalMovesHistory.concat([legalMoves])
        this.setState({
            history: history,
            blueIsNext: !this.state.blueIsNext,
            hintColor: null,
            hintShape: null,
        });
    }

    handleMouseDown = (e, shape) => {
        const color = (this.state.blueIsNext ? "blue" : "red");
        this.setState({
            hintColor: color,
            hintShape: shape,
        });
    }

    handleMouseUp = (e) => {
        this.setState({
            hintColor: null,
            hintShape: null,
        });
    }

    handleHintsChange = (event) => {
        const target = event.target;
        const value = target.checked;
        this.setState({
            hints: value
        });
    }

    handleUndo = (event) => {
        let history = this.state.history;
        const squaresHistory = history.squares.length > 1 ? history.squares.slice(0,-1) : history.squares.slice();
        const legalMovesHistory = history.legalMoves.length >1 ? history.legalMoves.slice(0,-1) : history.legalMoves.slice();
        history.squares = squaresHistory;
        history.legalMoves = legalMovesHistory
        const blueIsNext = history.squares.length > 1 ? !(this.state.blueIsNext) : true;
        let body = document.getElementsByTagName("body")[0];
        body.style.setProperty("--player_color", (blueIsNext ? "var(--blue_color)" : "var(--red_color)"));
        this.setState({
                history: history,
                blueIsNext: blueIsNext,
            }
        )
    }

    handleNewGame = (event) => {
        let history = this.state.history;
        const squaresHistory = history.squares.slice(0,1);
        const legalMovesHistory = history.legalMoves.slice(0,1);
        history.squares = squaresHistory;
        history.legalMoves = legalMovesHistory
        let body = document.getElementsByTagName("body")[0];
        body.style.setProperty("--player_color", "var(--blue_color)");
        this.setState({
                history: history,
                blueIsNext: true,
                hintColor: null,
                hintShape: null,
            }
        )
    }

    render() {
        const history = this.state.history;
        const squaresHistory = history.squares.slice();
        let squares = squaresHistory[squaresHistory.length - 1].slice();
        const legalMovesHistory = history.legalMoves.slice();
        let legalMoves = legalMovesHistory[legalMovesHistory.length - 1].slice();

        // Black out any squares that nothing can be placed in
        squares = updateBlackout(squares,legalMoves);

        // If one or both players has no more legal moves, fill in the remaining squares
        if (isEndgame(legalMoves)) {
            squares = completeEndgame(squares, legalMoves);
        }

        // Calculate the score
        const score = calculateScore(squares);
        const redScore = score.red;
        const blueScore = score.blue;

        // If all squares are filled, game over todo
        // let status = null;
        // if (allSquaresFilled) {
        //     status = "r"
        // }

        return (
            <div className="game">
                <div className="title">
                    <h1>Stars and Circles</h1>
                    <h2>Game by Colin Thom</h2>
                    <h2>Built by Sarah Edwards</h2>
                </div>
                <div className="game-board">
                    <Board
                        squares={squares}
                        gridSize={this.state.gridSize}
                        legalMoves={legalMoves}
                        hintShape={this.state.hintShape}
                        hintColor={this.state.hintColor}
                        hints={this.state.hints}
                    />
                </div>
                <div className="token-area">
                    <DragDropContainer
                        targetKey="token"
                        dragData={{shape:'star'}}
                        onDrop={(e) => this.handleDrop(e)}
                        onDragStart={(e) => this.handleMouseDown(e, "star")}
                    >
                        <div className="token"
                             onMouseDown={(e) => this.handleMouseDown(e, "star")}
                             onMouseUp={(e) => this.handleMouseUp(e)}
                        >X
                        </div>
                    </DragDropContainer>
                    <DragDropContainer
                        targetKey="token"
                        dragData={{shape:'circle'}}
                        onDrop={(e) => this.handleDrop(e)}
                        onDragStart={(e) => this.handleMouseDown(e, "circle")}
                    >
                        <div className="token"
                             onMouseDown={(e) => this.handleMouseDown(e, "circle")}
                             onMouseUp={(e) => this.handleMouseUp(e)}
                        >O
                        </div>
                    </DragDropContainer>
                </div>
                <div className="score">
                    Score:
                    <div className="red-score">
                        {redScore}
                    </div>
                    <div className="blue-score">
                        {blueScore}
                    </div>
                </div>
                <div className="controls">
                    <label className={"hints"}>
                        Hints
                        <input
                            name="hints"
                            type="checkbox"
                            checked={this.state.hints}
                            onChange={this.handleHintsChange} />
                    </label>
                    <button onClick={this.handleUndo}>Undo</button>
                    <button onClick={this.handleNewGame}>New</button>
                    <button onClick={this.handleShow}>Rules</button>
                </div>
                <div className="tutorial">
                    <Tutorial
                        showRules={this.state.showRules}
                        currentRule={this.state.currentRule}
                        handleHide={this.handleHide}
                        handlePrevious={this.handlePrevious}
                        handleNext={this.handleNext}
                    />
                </div>
            </div>
        );
    }
}

// ========================================

// ReactDOM.render(<Game />, document.getElementById("root")); todo
ReactDOM.render(
    (<Game />),
    document.getElementById('root') || document.createElement('div') // for testing purposes
);

export function calculateHorizontalScore(grid) {
    let scores = {
        'red' : 0,
        'blue': 0
    };

    for (let row in grid) {
        for (let column = 0; column < grid[0].length - 2; column ++) {
            let first = grid[row][column];
            let second = grid[row][column + 1];
            let third = grid[row][column + 2];
            if (first && second && third) {
                if (first.color === second.color && first.color === third.color) {
                    scores[first.color] += 1;
                }
            }
        }
    }

    return scores
}

export function calculateVerticalScore(grid) {
    // transpose the grid so that the rows become the columns
    let vertical = transposeGrid(grid);

    // Calculate the transposed grid score
    return calculateHorizontalScore(vertical)
}

export function transposeGrid(grid) {
    // transpose the grid so that the rows become the columns
    return (grid[0].map(function(column, i){
        return grid.map(function(row){
            return row[i];
        });
    }))
}

export function transposeDiagonalFromLeft(grid) {
    // Shift the grid so that the diagonals from upper left to lower right are aligned vertically
    // Pad the grid with nulls to maintain equal length of each row
    // [
    //     [0,1,2],
    //     [3,4,5],
    //     [6,7,8]
    // ] becomes [
    //   [ N, N, 0, 1, 2 ],
    //   [ N, 3, 4, 5, N ],
    //   [ 6, 7, 8, N, N ]
    // ] where N is null
    let leftShift = [];
    for (let row in grid) {
        let prepend = Array(grid[row].length - 1 - row).fill(null);
        let append = Array(parseInt(row)).fill(null);
        let newRow = prepend.concat(grid[row].concat(append));
        leftShift.push(newRow);
    }

    // Transpose the grid so that the verticals become the horizontals
    // [
    //     [ N, N, 6 ],
    //     [ N, 3, 7 ],
    //     [ 0, 4, 8 ],
    //     [ 1, 5, N ],
    //     [ 2, N, N ]
    //   ]
    return transposeGrid(leftShift)
}

export function transposeDiagonalFromRight(grid) {
    // Shift the grid so that the diagonals from upper right to lower left are aligned vertically
    // Pad the grid with nulls to maintain equal length of each row
    // [
    //     [0,1,2],
    //     [3,4,5],
    //     [6,7,8]
    // ] becomes [
    //   [ 0, 1, 2, N, N],
    //   [ N, 3, 4, 5, N],
    //   [ N, N, 6, 7, 8 ]
    // ] where N is null
    let rightShift = [];
    for (let row in grid) {
        let prepend = Array(parseInt(row)).fill(null);
        let append = Array(grid[row].length - 1 - row).fill(null);
        let newRow = prepend.concat(grid[row].concat(append));
        rightShift.push(newRow);
    };

    // Transpose the grid so that the verticals become the horizontals
    // [
    //     [ N, N, 6 ],
    //     [ N, 3, 7 ],
    //     [ 0, 4, 8 ],
    //     [ 1, 5, N ],
    //     [ 2, N, N ]
    //   ]
    return transposeGrid(rightShift)
}

export function calculateDiagonalFromLeftScore(grid) {
    let diagonalFromLeft = transposeDiagonalFromLeft(grid);
    return calculateHorizontalScore(diagonalFromLeft)
}

export function calculateDiagonalFromRightScore(grid) {
    let diagonalFromRight = transposeDiagonalFromRight(grid);
    return calculateHorizontalScore(diagonalFromRight)
}

export function calculateScore(squares) {

    let horizontalScores = calculateHorizontalScore(squares);
    let verticalScores = calculateVerticalScore(squares);
    let diagonalFromLeftScores = calculateDiagonalFromLeftScore(squares);
    let diagonalFromRightScores = calculateDiagonalFromRightScore(squares);

    let scores = {
        'red' : 0,
        'blue': 0
    };

    for (let key in scores) {
        scores[key]= (
            horizontalScores[key]
            + verticalScores[key]
            + diagonalFromLeftScores[key]
            + diagonalFromRightScores[key]
        )
    }

    return scores;
}

export function isEndgame(legalMoves) {
    let anyLegal = {
        'red': false,
        'blue': false
    };
    for (let row of legalMoves) {
        for (let square of row) {
            for (let key in anyLegal) {
                if (!anyLegal[key] && (square[key]['star'] || square[key]['circle'])) {
                    anyLegal[key] = true
                }
            }
        }
    }
    // If there are legal moves for BOTH red and blue remaining, return true
    return !(anyLegal['red'] && anyLegal['blue']);
}

export function completeEndgame(squares, legalMoves) {
    alert("No choices left for remaining squares! Empty squares will be filled automatically.")
    // Fill in the squares with blue/red as possible
    let completed_squares = squares.slice();
    for (let rowIndex in completed_squares) {
        for (let columnIndex in completed_squares[rowIndex]) {
            // If the square is unoccupied
            if (!completed_squares[rowIndex][columnIndex]) {
                let legalMove = legalMoves[rowIndex][columnIndex];
                if (legalMove['red']['star'] || legalMove['red']['circle']) {
                    completed_squares[rowIndex][columnIndex] = new Token('red', 'null')
                }
                if (legalMove['blue']['star'] || legalMove['blue']['circle']) {
                    completed_squares[rowIndex][columnIndex] = new Token('blue', 'null')
                }
            }
        }
    }
    return completed_squares
}

export function updateBlackout(squares, legalMoves) {
    for (let rowIndex in squares) {
        for (let columnIndex in squares[rowIndex]) {
            let square = squares[rowIndex][columnIndex];
            let legal = legalMoves[rowIndex][columnIndex];
            if (!square && !legal['red']['circle'] && !legal['red']['star'] && !legal['blue']['circle'] && !legal['blue']['star']) {
                let token = new Token('black', 'null');
                squares[rowIndex][columnIndex] = token;
            }
        }
    }
    return squares
}