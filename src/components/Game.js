import React from "react";
import PlayArea from "./PlayArea";
import Score from "./Score";
import UndoButton from "./UndoButton";

export default function Game({
  playHistory,
  setPlayHistory,
  showHints,
  setDisplay,
}) {
  return (
    <div
      id="app"
      className="game"
      style={{
        "--num-columns": Math.sqrt(playHistory[0].length),
      }}
    >
      <PlayArea
        playHistory={playHistory}
        setPlayHistory={setPlayHistory}
        showHints={showHints}
      />
      <Score playHistory={playHistory} />
      <div id="controls">
        <UndoButton playHistory={playHistory} setPlayHistory={setPlayHistory} />
        <button
          id="new-game"
          aria-label="new game settings"
          onClick={() => setDisplay("settings")}
        ></button>
        <button
          id="rules-button"
          aria-label="rules"
          onClick={() => setDisplay("rules")}
        ></button>
      </div>
    </div>
  );
}
