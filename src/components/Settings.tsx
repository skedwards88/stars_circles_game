import {getEmptySquares} from "../logic/getEmptySquares";
import type {Square} from "../Types";

export default function Settings({
  setDisplay,
  currentGridSize,
  setPlayHistory,
  showHints,
  setShowHints,
}: {
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
  currentGridSize: number;
  setPlayHistory: React.Dispatch<React.SetStateAction<Square[][]>>;
  showHints: boolean;
  setShowHints: React.Dispatch<React.SetStateAction<boolean>>;
}): React.JSX.Element {
  function handleNewGame(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const newGridSize = (
      event.currentTarget.elements.namedItem("gridSize") as HTMLInputElement
    )?.value;

    setPlayHistory([getEmptySquares(parseInt(newGridSize))]);
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
