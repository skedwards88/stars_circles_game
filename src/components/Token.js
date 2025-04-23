import React from "react";

export default function Token({symbol, color, showHints, setHintShape}) {
  function handleMouseDown(symbol) {
    if (showHints) {
      setHintShape(symbol);
    }
  }

  function handleMouseUp() {
    if (showHints) {
      setHintShape(null);
    }
  }

  function dragToken({event, symbol}) {
    event.dataTransfer.setData("symbol", symbol);
    // If not on a device on which the mobile-drag-drop pollyfill applies,
    // center the drag image on the cursor
    if (!/iPad|iPhone|iPod|Android/.test(navigator.userAgent)) {
      event.dataTransfer.setDragImage(event.target, 50, 50);
    }
  }

  return (
    <div
      draggable="true"
      onDragStart={(event) => dragToken({event: event, symbol})}
      className={`square ${symbol} ${color}`}
      onMouseDown={() => handleMouseDown(symbol)}
      onTouchStart={() => handleMouseDown(symbol)}
      onMouseUp={handleMouseUp}
    />
  );
}
