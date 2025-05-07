import {getSquareClassName} from "../logic/getSquareClassName";
import type {Color, Square, Symbol} from "../Types";

export default function Board({
  squares,
  playerColor,
  showHints,
  hintShape,
  dropToken,
}: {
  squares: Square[];
  playerColor: Color;
  showHints: boolean;
  hintShape: Symbol | null;
  dropToken: (args: {event: React.DragEvent; index: number}) => void;
}): React.JSX.Element {
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
