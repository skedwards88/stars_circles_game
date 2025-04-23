import React from "react";
import {rules} from "../rules";

export default function Rules({setDisplay}) {
  const [currentRule, setCurrentRule] = React.useState(0);

  function closeRules() {
    setDisplay("game");
    setCurrentRule(0);
  }

  return (
    <div id="app" className="rules">
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
}
