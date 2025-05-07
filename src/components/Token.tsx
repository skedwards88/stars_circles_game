import type {Color, Shape} from "../Types";

export default function Token({
  shape,
  color,
  showHints,
  setHintShape,
}: {
  shape: Shape;
  color: Color;
  showHints: boolean;
  setHintShape: React.Dispatch<React.SetStateAction<Shape | null>>;
}): React.JSX.Element {
  function handleMouseDown(shape: Shape): void {
    if (showHints) {
      setHintShape(shape);
    }
  }

  function handleMouseUp(): void {
    if (showHints) {
      setHintShape(null);
    }
  }

  function dragToken({
    event,
    shape,
  }: {
    event: React.DragEvent;
    shape: Shape;
  }): void {
    event.dataTransfer.setData("shape", shape);
    // If not on a device on which the mobile-drag-drop pollyfill applies,
    // center the drag image on the cursor
    if (!/iPad|iPhone|iPod|Android/.test(navigator.userAgent)) {
      event.dataTransfer.setDragImage(event.currentTarget, 50, 50);
    }
  }

  return (
    <div
      draggable="true"
      onDragStart={(event) => dragToken({event: event, shape})}
      className={`square ${shape} ${color}`}
      onMouseDown={() => handleMouseDown(shape)}
      onTouchStart={() => handleMouseDown(shape)}
      onMouseUp={handleMouseUp}
    />
  );
}
