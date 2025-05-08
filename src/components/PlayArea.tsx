import React from "react";
import Token from "./Token";
import Board from "./Board";
import {updateValidMoves} from "../logic/updateValidMoves";
import type {Square, Shape} from "../Types";

export default function PlayArea({
  playHistory,
  setPlayHistory,
  showHints,
}: {
  playHistory: Square[][];
  setPlayHistory: React.Dispatch<React.SetStateAction<Square[][]>>;
  showHints: boolean;
}): React.JSX.Element {
  const [hintShape, setHintShape] = React.useState<Shape | null>(null);

  const turnNumber = playHistory.length;
  const playerColor = turnNumber % 2 ? "red" : "blue";
  const opponentColor = turnNumber % 2 ? "blue" : "red";

  function dropToken({
    event,
    index,
  }: {
    event: React.DragEvent;
    index: number;
  }): void {
    const shape = event.dataTransfer.getData("shape") as Shape;

    if (showHints) {
      setHintShape(null);
    }

    // If the turn is illegal, return early
    if (!playHistory[playHistory.length - 1][index].valid[playerColor][shape]) {
      return;
    }

    const squaresCopy = JSON.parse(
      JSON.stringify(playHistory[playHistory.length - 1]),
    ); // todo is there a better way to make deep copy?

    const updatedSquares = updateValidMoves({
      squares: squaresCopy,
      playedIndex: index,
      playedShape: shape,
      playedColor: playerColor,
      unplayedColor: opponentColor,
    });

    setPlayHistory([...playHistory, updatedSquares]);
  }

  return (
    <>
      <Board
        squares={playHistory[playHistory.length - 1]}
        playerColor={playerColor}
        hintShape={hintShape}
        showHints={showHints}
        dropToken={dropToken}
      />
      <div id="tokens">
        <Token
          shape={"star"}
          color={playerColor}
          showHints={showHints}
          setHintShape={setHintShape}
        ></Token>
        <Token
          shape={"circle"}
          color={playerColor}
          showHints={showHints}
          setHintShape={setHintShape}
        ></Token>
      </div>
    </>
  );
}
