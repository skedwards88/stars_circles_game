import React from "react";

function squares(filled) {
  console.log("SQUAREs");
  const gridSize = 5;
  const grid = Array.from({ length: gridSize * gridSize }, () => ({
    color: "",
    symbol: "",
  }));

  filled.forEach((obj) => {
    const { index, color, symbol } = obj;
    grid[index].color = color;
    grid[index].symbol = symbol;
  });

  return grid;
}

const ruleData = [
  {
    text: "Players take turns dragging a symbol of their color onto the board.",
    squares: squares([
      { index: 7, color: "red", symbol: "star" },
      { index: 11, color: "blue", symbol: "circle" },
      { index: 24, color: "red", symbol: "circle" },
    ]),
  },
  {
    text: "Matching symbols of opposite color cannot be placed adjacent or diagonal to each other. (Turn hints on/off to show/hide legal moves.)\n\nIn this example, a blue circle can only be placed in the highlighted squares, but a blue star could be placed anywhere.",
    squares: squares([
      { index: 0, color: "blue-hint", symbol: "" },
      { index: 1, color: "blue-hint", symbol: "" },
      { index: 2, color: "blue-hint", symbol: "" },
      { index: 3, color: "blue-hint", symbol: "" },
      { index: 4, color: "blue-hint", symbol: "" },
      { index: 5, color: "blue-hint", symbol: "" },
      { index: 6, color: "blue-hint", symbol: "" },
      { index: 7, color: "blue-hint", symbol: "" },
      { index: 8, color: "blue-hint", symbol: "" },
      { index: 9, color: "blue-hint", symbol: "" },
      { index: 10, color: "blue-hint", symbol: "" },
      { index: 11, color: "blue-hint", symbol: "" },
      { index: 12, color: "blue-hint", symbol: "" },
      { index: 13, color: "blue-hint", symbol: "" },
      { index: 14, color: "blue-hint", symbol: "" },
      { index: 15, color: "blue-hint", symbol: "" },
      { index: 19, color: "blue-hint", symbol: "" },
      { index: 20, color: "blue-hint", symbol: "" },
      { index: 24, color: "blue-hint", symbol: "" },
      { index: 22, color: "red", symbol: "circle" },
    ]),
  },
  {
    text: "When no symbol can be placed in a square, the square is blacked out.",
    squares: squares([
      { index: 7, color: "red", symbol: "circle" },
      { index: 11, color: "red", symbol: "star" },
      { index: 12, color: "black", symbol: "" },
      { index: 17, color: "blue", symbol: "circle" },
      { index: 18, color: "blue", symbol: "star" },
    ]),
  },
  {
    text: "Score a point by getting a 3-in-a-row of your color (symbol doesn't matter). A square can be part of multiple 3-in-a-rows.\n\nIn this example, red has 2 points and blue has 1 point.",
    squares: squares([
      { index: 4, color: "blue", symbol: "circle" },
      { index: 8, color: "blue", symbol: "star" },
      { index: 12, color: "blue", symbol: "circle" },
      { index: 15, color: "red", symbol: "circle" },
      { index: 16, color: "red", symbol: "star" },
      { index: 17, color: "red", symbol: "star" },
      { index: 18, color: "red", symbol: "star" },
    ]),
  },
  {
    text: `The game ends when one player cannot make any more moves. Any remaining moves for the other player will complete automatically.\n\nThe player with the most points wins!`,
  },
];

function renderBoard(squares) {
  if (squares) {
    const squareDivs = squares.map((square, index) => {
      let classes = ["tutorial-square"];

      if (square.symbol) {
        classes.push(square.symbol);
      }

      if (square.color) {
        classes.push(square.color);
      }
      const className = classes.join(" ");

      return <div key={index} className={className}></div>;
    });

    return <div id="tutorial-board">{squareDivs}</div>;
  } else {
    return null;
  }
}

const rulesJSX = ruleData.map((rule) => {
  return (
    <>
      <div className="rules-text">{rule.text}</div>
      {renderBoard(rule.squares)}
    </>
  );
});

const infoJSX = (
  <>
    <div className="rules-text">
      {`Stars and Circles\nVersion 2.0\n\nA spatial strategy game\n\n2 Players\n5 Minutes\n\nDesigned by Colin\nBuilt by Sarah\n\nWant more games?\nVisit `}
      <a href="https://skedwards88.github.io/portfolio/">CnS Games</a>
    </div>
  </>
);

export const rules = [infoJSX, ...rulesJSX];
