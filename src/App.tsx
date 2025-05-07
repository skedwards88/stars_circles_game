import React from "react";
import {polyfill} from "mobile-drag-drop";
import Settings from "./components/Settings";
import Rules from "./components/Rules";
import Game from "./components/Game";
import {getEmptySquares} from "./logic/getEmptySquares";

// This polyfill lets draggable elements work on mobile
polyfill({
  dragImageCenterOnTouch: true,
});

export default function App(): React.JSX.Element {
  const defaultGridSize = 5;
  const [playHistory, setPlayHistory] = React.useState(
    () =>
      JSON.parse(window.localStorage.getItem("playHistory") ?? "") || [
        getEmptySquares(defaultGridSize),
      ],
  );

  const [showHints, setShowHints] = React.useState(() => {
    const savedValue = window.localStorage.getItem("showHints");
    return savedValue === "false" ? JSON.parse(savedValue) : true;
  });

  React.useEffect(() => {
    window.localStorage.setItem("playHistory", JSON.stringify(playHistory));
  }, [playHistory]);

  React.useEffect(() => {
    window.localStorage.setItem("showHints", JSON.stringify(showHints));
  }, [showHints]);

  const [display, setDisplay] = React.useState("game");

  switch (display) {
    case "settings":
      return (
        <Settings
          setDisplay={setDisplay}
          currentGridSize={Math.sqrt(playHistory[0].length)}
          setPlayHistory={setPlayHistory}
          showHints={showHints}
          setShowHints={setShowHints}
        />
      );

    case "rules":
      return <Rules setDisplay={setDisplay} />;

    default:
      return (
        <Game
          playHistory={playHistory}
          setPlayHistory={setPlayHistory}
          showHints={showHints}
          setDisplay={setDisplay}
        />
      );
  }
}
