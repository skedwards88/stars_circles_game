import React from "react";
import "./App.css";
import { polyfill } from "mobile-drag-drop";

import { calculateScore } from "./scoring";
import {
  getSurroundingIndexes,
  noChoicesRemaining,
  autoFillRemaining,
} from "./helpers.js";
import { rules } from "./rules.js";

polyfill({
  dragImageCenterOnTouch: true,
});

function Board({ squares, playerColor, showHints, hintShape, dropToken }) {
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
        onDrop={(event) => dropToken({ event: event, index: index })}
        onDragEnter={(event) => {
          event.preventDefault();
        }}
      ></div>
    );
  });
  return <div className="board">{board}</div>;
}

function Game({ playHistory, setPlayHistory, showHints }) {
  console.log("GAME");
  const [hintShape, setHintShape] = React.useState(null);

  const gridSize = Math.sqrt(playHistory[0].length);
  const squares = [...playHistory[playHistory.length - 1]];
  const turnNumber = playHistory.length;
  const playerColor = turnNumber % 2 ? "red" : "blue";
  const opponentColor = turnNumber % 2 ? "blue" : "red";

  function dragToken({ event, symbol }) {
    event.dataTransfer.setData("symbol", symbol);
    // If not on a device on which the mobile-drag-drop pollyfill applies
    // Center the drag image on the cursor
    if (!/iPad|iPhone|iPod|Android/.test(navigator.userAgent)) {
      event.dataTransfer.setDragImage(event.target, 50, 50);
    }
  }

  function dropToken({ event, index }) {
    // todo does calling this from a different component break a hook rule?
    const symbol = event.dataTransfer.getData("symbol");

    if (showHints) {
      // todo does this break hook rule
      setHintShape(null);
    }

    // If the turn is illegal, return early //todo does that break a hook rule? yes? should put conditional within hook
    if (!squares[index].valid[playerColor][symbol]) {
      console.log("invalid");
      return;
    }

    let squaresCopy = JSON.parse(
      JSON.stringify(playHistory[playHistory.length - 1])
    ); // todo how to make deep copy?
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
    console.log("MOUSE DOWN");
    if (showHints) {
      setHintShape(symbol);
    }
  }

  function handleMouseUp() {
    if (showHints) {
      setHintShape(null);
    }
  }

  console.log("RENDER");
  return (
    <div className="game">
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
          onDragStart={(event) => dragToken({ event: event, symbol: "star" })}
          className={`square star ${playerColor}`}
          onMouseDown={() => handleMouseDown("star")}
          onTouchStart={() => handleMouseDown("star")}
          onMouseUp={handleMouseUp}
        />
        <div
          draggable="true"
          onDragStart={(event) => dragToken({ event: event, symbol: "circle" })}
          className={`square circle ${playerColor}`}
          onMouseDown={() => handleMouseDown("circle")}
          onTouchStart={() => handleMouseDown("circle")}
          onMouseUp={handleMouseUp}
        />
      </div>
    </div>
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
      Array.from({ length: newGridSize * newGridSize }, () => ({
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

  // This component function can return either the form or the "new game" button
  // Since the useEffect callback will only run when selectedGridSize changes,
  // and since the form closes (and we instead render the "new game" button) after changing selectedGridSize
  // `ref={ref}` is on the the "new game" button instead of on the form
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current.parentElement.parentElement.style.setProperty(
      "--num-columns",
      `${selectedGridSize}`
    );

    // todo I'm not sure if useRef is better than document.getElementById when you want a parent
    //    Creating the ref in the parent fails, but forwardRef might be a solution
    // const node = document.getElementById("app");
    // node.style.setProperty("--num-columns", `${selectedGridSize}`);
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

          <div className="setting">
            <div className="setting-description">
              <label htmlFor="islands">Islands</label>
              <div className="setting-info">
                Start the game with blacked out spaces (coming soon)
              </div>
            </div>
            <select name="islands"></select>
          </div>

          <div className="setting">
            <div className="setting-description">
              <label htmlFor="bombs">Bombs</label>
              <div className="setting-info">
                Give each player a single-use bomb to clear one spot on the
                board (coming soon)
              </div>
            </div>
            <input name="bombs" type="checkbox" disabled />
          </div>
        </div>
        <div id="setting-buttons">
          <button type="submit">New Game</button>
          <button type="button" onClick={() => setShowNewGameSettings(false)}>
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
        onClick={() => setShowNewGameSettings(true)}
      ></button>
    );
  }
}

function Score({ playHistory }) {
  const squares = [...playHistory[playHistory.length - 1]];
  const gridSize = Math.sqrt(squares.length);

  const score = calculateScore({ squares: [...squares], gridSize: gridSize });
  const redScore = score.red;
  const blueScore = score.blue;

  return (
    <div id="score">
      <div id="red-score">{`Red: ${redScore}`}</div>
      <div id="blue-score">{`Blue: ${blueScore}`}</div>
    </div>
  );
}

function Undo({ playHistory, setPlayHistory }) {
  function handleUndo() {
    if (playHistory.length > 0) {
      setPlayHistory(playHistory.slice(0, playHistory.length - 1));
    }
  }

  return (
    <button
      id="undo"
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
            disabled={!currentRule}
            onClick={() => setCurrentRule(currentRule - 1)}
          >
            Previous
          </button>
          <button onClick={closeRules}>Close</button>
          <button
            disabled={currentRule === rules.length - 1}
            onClick={() => setCurrentRule(currentRule + 1)}
          >
            Next
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <button id="rules-button" onClick={() => setShowRules(true)}></button>
    );
  }
}

function App() {
  const defaultGridSize = 5;
  const [playHistory, setPlayHistory] = React.useState([
    Array.from({ length: defaultGridSize * defaultGridSize }, () => ({
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
  const [showHints, setShowHints] = React.useState(true);

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
