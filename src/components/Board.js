import React from "react";

export default function Board({
  squares,
  playerColor,
  showHints,
  hintShape,
  dropToken,
}) {
  const board = squares.map((square, index) => {
    let classes = ["square"];

    if (square.symbol) {
      classes.push(square.symbol);
    }

    if (square.color) {
      classes.push(square.color);
    } else if (
      !square.valid.red.star &&
      !square.valid.red.circle &&
      !square.valid.blue.star &&
      !square.valid.blue.circle
    ) {
      classes.push("black");
    } else if (showHints && hintShape && square.valid[playerColor][hintShape]) {
      classes.push(`${playerColor}-hint`);
    }

    const className = classes.join(" ");

    return (
      <div
        key={index}
        className={className}
        onDragOver={(event) => {
          event.preventDefault();
        }}
        onDrop={(event) => dropToken({event: event, index: index})}
        onDragEnter={(event) => {
          event.preventDefault();
        }}
      ></div>
    );
  });
  return <div className="board">{board}</div>;
}
