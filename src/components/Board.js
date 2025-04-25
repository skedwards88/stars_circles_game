import React from "react";
import {getSquareClassName} from "../logic/getSquareClassName";

export default function Board({
  squares,
  playerColor,
  showHints,
  hintShape,
  dropToken,
}) {
  const board = squares.map((square, index) => {
    const className = getSquareClassName({
      square,
      baseName: "square",
      showHints,
      hintShape,
      playerColor,
    });

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
