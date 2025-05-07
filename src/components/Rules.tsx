import React from "react";
import {ruleData} from "../logic/ruleData";
import packageJson from "../../package.json";
import {getSquareClassName} from "../logic/getSquareClassName";
import type {RuleSquare} from "../Types";

function RulesBoard({
  ruleSquares,
}: {
  ruleSquares: RuleSquare[];
}): React.JSX.Element {
  if (!ruleSquares) {
    return <></>;
  }

  return (
    <div id="tutorial-board">
      {ruleSquares.map((square, index) => (
        <div
          key={index}
          className={getSquareClassName({
            square,
            baseName: "tutorial-square",
          })}
        ></div>
      ))}
    </div>
  );
}

function Rule({
  ruleText,
  ruleSquares,
}: {
  ruleText: string[];
  ruleSquares: RuleSquare[];
}): React.JSX.Element {
  return (
    <>
      <div className="rules-text">
        {ruleText.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
      <RulesBoard ruleSquares={ruleSquares}></RulesBoard>
    </>
  );
}

function Intro(): React.JSX.Element {
  return (
    <div className="rules-text">
      <h1>Stars and Circles</h1>
      <h2>A spatial strategy game</h2>
      <p>2 players | 5 minutes</p>
      <p>Designed by Colin Thom</p>
      <p>Built by Sarah Edwards</p>
      <small>{`Version ${packageJson.version}`}</small>
    </div>
  );
}

export default function Rules({
  setDisplay,
}: {
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
}): React.JSX.Element {
  const [currentRule, setCurrentRule] = React.useState(0);

  function closeRules(): void {
    setDisplay("game");
    setCurrentRule(0);
  }

  return (
    <div id="app" className="rules">
      {/* Intro is rule 0, then other rules follow, so subtract 1 */}
      {currentRule ? (
        <Rule
          ruleText={ruleData[currentRule - 1].text}
          ruleSquares={ruleData[currentRule - 1].squares as RuleSquare[]}
        ></Rule>
      ) : (
        <Intro></Intro>
      )}

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
          // Don't need to adjust by -1 here since prepended the Intro to the rules
          disabled={currentRule === ruleData.length}
          onClick={() => setCurrentRule(currentRule + 1)}
        >
          {">>"}
        </button>
      </div>
    </div>
  );
}
