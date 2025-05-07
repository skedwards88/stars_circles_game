import React from "react";
import Token from "./Token";
import Board from "./Board";
import {updateValidMoves} from "../logic/updateValidMoves";
import type {Square, Symbol} from "../Types";

export default function PlayArea({
  playHistory,
  setPlayHistory,
  showHints,
}: {
  playHistory: Square[][];
  setPlayHistory: React.Dispatch<React.SetStateAction<Square[][]>>;
  showHints: boolean;
}): React.JSX.Element {
  const [hintShape, setHintShape] = React.useState<Symbol | null>(null);

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
    const symbol = event.dataTransfer.getData("symbol") as Symbol;

    if (showHints) {
      setHintShape(null);
    }

    // If the turn is illegal, return early
    if (
      !playHistory[playHistory.length - 1][index].valid[playerColor][symbol]
    ) {
      return;
    }

    const squaresCopy = JSON.parse(
      JSON.stringify(playHistory[playHistory.length - 1]),
    ); // todo is there a better way to make deep copy?

    const updatedSquares = updateValidMoves({
      squares: squaresCopy,
      playedIndex: index,
      playedSymbol: symbol,
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
          symbol={"star"}
          color={playerColor}
          showHints={showHints}
          setHintShape={setHintShape}
        ></Token>
        <Token
          symbol={"circle"}
          color={playerColor}
          showHints={showHints}
          setHintShape={setHintShape}
        ></Token>
      </div>
    </>
  );
}
