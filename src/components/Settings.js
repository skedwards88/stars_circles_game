import React from "react";
import {getEmptySquares} from "../logic/getEmptySquares";

export default function Settings({
  setDisplay,
  currentGridSize,
  setPlayHistory,
  showHints,
  setShowHints,
}) {
  function handleNewGame(event) {
    event.preventDefault();
    const newGridSize = event.target.elements.gridSize.value;
    setPlayHistory([getEmptySquares(newGridSize)]);
    setDisplay("game");
  }

  return (
    <form id="app" onSubmit={handleNewGame}>
      <div id="settings">
        <div className="setting">
          <div className="setting-description">
            <label htmlFor="gridSize">Grid size</label>
          </div>
          <select id="gridSize" defaultValue={currentGridSize}>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </div>

        <div className="setting">
          <div className="setting-description">
            <label htmlFor="hints">Hints </label>
            <div className="setting-info">Highlight valid moves</div>
          </div>

          <input
            name="hints"
            type="checkbox"
            checked={showHints}
            onChange={() => setShowHints(!showHints)}
          />
        </div>
      </div>
      <div id="setting-buttons">
        <button type="submit" aria-label="new game">
          New Game
        </button>
        <button
          type="button"
          aria-label="cancel"
          onClick={() => setDisplay("game")}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
