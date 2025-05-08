import type {Square} from "../Types";

export default function UndoButton({
  playHistory,
  setPlayHistory,
}: {
  playHistory: Square[][];
  setPlayHistory: React.Dispatch<React.SetStateAction<Square[][]>>;
}): React.JSX.Element {
  function handleUndo(): void {
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
