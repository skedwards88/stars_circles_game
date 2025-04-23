import React from "react";

export default function UndoButton({playHistory, setPlayHistory}) {
  function handleUndo() {
    if (playHistory.length > 0) {
      setPlayHistory(playHistory.slice(0, playHistory.length - 1));
    }
  }

  return (
    <button
      id="undo"
      aria-label="undo"
      onClick={handleUndo}
      disabled={playHistory.length === 1}
    />
  );
}
