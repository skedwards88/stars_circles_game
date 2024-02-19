import React from "react";
import "./App.css";
import {polyfill} from "mobile-drag-drop";

import {calculateScore} from "./scoring";
import {
  getSurroundingIndexes,
  noChoicesRemaining,
  autoFillRemaining,
} from "./helpers.js";
import {rules} from "./rules.js";

// This polyfill lets draggable elements work on mobile
polyfill({
  dragImageCenterOnTouch: true,
});

function Board({squares, playerColor, showHints, hintShape, dropToken}) {
  const board = squares.map((square, index) => {
    let classes = ["square"];

    if (square.symbol) {
      classes.push(square.symbol);
    }

    if (square.color) {
      classes.push(square.color);
    } else if (
      !square.valid.red.star &&
      !square.valid.red.circle &&
      !square.valid.blue.star &&
      !square.valid.blue.circle
    ) {
      classes.push("black");
    } else if (showHints && hintShape && square.valid[playerColor][hintShape]) {
      classes.push(`${playerColor}-hint`);
    }

    const className = classes.join(" ");

    return (
      <div
        key={index}
        className={className}
        onDragOver={(event) => {
          event.preventDefault();
        }}
        onDrop={(event) => dropToken({event: event, index: index})}
        onDragEnter={(event) => {
          event.preventDefault();
        }}
      ></div>
    );
  });
  return <div className="board">{board}</div>;
}

function Game({playHistory, setPlayHistory, showHints}) {
  const [hintShape, setHintShape] = React.useState(null);

  const gridSize = Math.sqrt(playHistory[0].length);
  const squares = [...playHistory[playHistory.length - 1]];
  const turnNumber = playHistory.length;
  const playerColor = turnNumber % 2 ? "red" : "blue";
  const opponentColor = turnNumber % 2 ? "blue" : "red";

  function dragToken({event, symbol}) {
    event.dataTransfer.setData("symbol", symbol);
    // If not on a device on which the mobile-drag-drop pollyfill applies,
    // center the drag image on the cursor
    if (!/iPad|iPhone|iPod|Android/.test(navigator.userAgent)) {
      event.dataTransfer.setDragImage(event.target, 50, 50);
    }
  }

  function dropToken({event, index}) {
    const symbol = event.dataTransfer.getData("symbol");

    if (showHints) {
      setHintShape(null);
    }

    // If the turn is illegal, return early
    if (!squares[index].valid[playerColor][symbol]) {
      return;
    }

    let squaresCopy = JSON.parse(
      JSON.stringify(playHistory[playHistory.length - 1]),
    ); // todo is there a better way to make deep copy?
    squaresCopy[index].symbol = symbol;
    squaresCopy[index].color = playerColor;

    // Placement in the current index is no longer valid
    squaresCopy[index].valid.red.star = false;
    squaresCopy[index].valid.blue.star = false;
    squaresCopy[index].valid.red.circle = false;
    squaresCopy[index].valid.blue.circle = false;

    // Placement in the surrounding tiles is now invalid for the same shape of the opposite color
    const surroundingIndexes = getSurroundingIndexes({
      index: index,
      gridSize: gridSize,
    });
    surroundingIndexes.map((surroundingIndex) => {
      squaresCopy[surroundingIndex].valid[opponentColor][symbol] = false;
    });

    if (noChoicesRemaining(squaresCopy)) {
      squaresCopy = autoFillRemaining(squaresCopy);
    }

    setPlayHistory([...playHistory, squaresCopy]);
  }

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

  return (
    <>
      <Board
        squares={squares}
        playerColor={playerColor}
        hintShape={hintShape}
        showHints={showHints}
        dropToken={dropToken}
      />
      <div id="tokens">
        <div
          draggable="true"
          onDragStart={(event) => dragToken({event: event, symbol: "star"})}
          className={`square star ${playerColor}`}
          onMouseDown={() => handleMouseDown("star")}
          onTouchStart={() => handleMouseDown("star")}
          onMouseUp={handleMouseUp}
        />
        <div
          draggable="true"
          onDragStart={(event) => dragToken({event: event, symbol: "circle"})}
          className={`square circle ${playerColor}`}
          onMouseDown={() => handleMouseDown("circle")}
          onTouchStart={() => handleMouseDown("circle")}
          onMouseUp={handleMouseUp}
        />
      </div>
    </>
  );
}

function NewGameSettings({
  playHistory,
  setPlayHistory,
  showHints,
  setShowHints,
}) {
  const [showNewGameSettings, setShowNewGameSettings] = React.useState(false);
  const currentGridSize = Math.sqrt(playHistory[0].length);
  const [selectedGridSize, setSelectedGridSize] =
    React.useState(currentGridSize);

  function handleNewGame(event) {
    event.preventDefault();
    const newGridSize = event.target.elements.gridSize.value;
    setSelectedGridSize(newGridSize);
    setPlayHistory([
      Array.from({length: newGridSize * newGridSize}, () => ({
        color: "",
        symbol: "",
        valid: {
          red: {
            star: true,
            circle: true,
          },
          blue: {
            star: true,
            circle: true,
          },
        },
      })),
    ]);
    setShowNewGameSettings(false);
  }

  // This component function can return either the new game settings input form or the "new game" button
  // Since the useEffect callback will only run when selectedGridSize changes,
  // and since the form closes (and we instead render the "new game" button) after changing selectedGridSize
  // `ref={ref}` is on the the "new game" button instead of on the form
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current.parentElement.parentElement.style.setProperty(
      "--num-columns",
      `${selectedGridSize}`,
    );

    // todo I'm not sure if useRef is better than document.getElementById when you want a parent:
    // const node = document.getElementById("app");
    // node.style.setProperty("--num-columns", `${selectedGridSize}`);
    // Creating the ref in the parent and passing to the child fails, but forwardRef might be a solution
  }, [selectedGridSize]);

  if (showNewGameSettings) {
    return (
      <form className="modal" onSubmit={handleNewGame}>
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
            onClick={() => setShowNewGameSettings(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    );
  } else {
    return (
      <button
        ref={ref}
        id="new-game"
        aria-label="new game settings"
        onClick={() => setShowNewGameSettings(true)}
      ></button>
    );
  }
}

function Score({playHistory}) {
  const squares = [...playHistory[playHistory.length - 1]];
  const gridSize = Math.sqrt(squares.length);

  const score = calculateScore({squares: [...squares], gridSize: gridSize});
  const redScore = score.red;
  const blueScore = score.blue;

  return (
    <div id="score">
      <div id="red-score">{`Red: ${redScore}`}</div>
      <div id="blue-score">{`Blue: ${blueScore}`}</div>
    </div>
  );
}

function Undo({playHistory, setPlayHistory}) {
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

function Rules() {
  const [showRules, setShowRules] = React.useState(false);
  const [currentRule, setCurrentRule] = React.useState(0);

  function closeRules() {
    setShowRules(false);
    setCurrentRule(0);
  }

  if (showRules) {
    return (
      <div className="modal" id="rules-modal">
        {rules[currentRule]}
        <div id="rule-navigation">
          <button
            aria-label="previous rule"
            disabled={!currentRule}
            onClick={() => setCurrentRule(currentRule - 1)}
          >
            {"<<"}
          </button>
          <button onClick={closeRules} aria-label="close rules">
            Close
          </button>
          <button
            aria-label="next rule"
            disabled={currentRule === rules.length - 1}
            onClick={() => setCurrentRule(currentRule + 1)}
          >
            {">>"}
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <button
        id="rules-button"
        aria-label="rules"
        onClick={() => setShowRules(true)}
      ></button>
    );
  }
}

function App() {
  const defaultGridSize = 5;
  const [playHistory, setPlayHistory] = React.useState(
    () =>
      JSON.parse(window.localStorage.getItem("playHistory")) || [
        Array.from({length: defaultGridSize * defaultGridSize}, () => ({
          color: "",
          symbol: "",
          valid: {
            red: {
              star: true,
              circle: true,
            },
            blue: {
              star: true,
              circle: true,
            },
          },
        })),
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

  return (
    <div id="app">
      <Game
        playHistory={playHistory}
        setPlayHistory={setPlayHistory}
        showHints={showHints}
      />
      <Score playHistory={playHistory} />
      <div id="controls">
        <Undo playHistory={playHistory} setPlayHistory={setPlayHistory} />
        <NewGameSettings
          playHistory={playHistory}
          setPlayHistory={setPlayHistory}
          showHints={showHints}
          setShowHints={setShowHints}
        />
        <Rules />
      </div>
    </div>
  );
}

export default App;
