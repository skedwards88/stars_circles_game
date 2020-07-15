import React from "react";
import Modal from "./modal";

const rules = [
    <div className="tutorialStep">
        <div className="tutorial-text">
            <div>A spatial strategy game</div>
            <br/>
            <div>2 Players</div>
            <div>5 Minutes</div>
            <br/>
            <div>Game by Colin Thom</div>
            <div>Built by Sarah Edwards</div>
        </div>
    </div>,

    <div className="tutorialStep">
        <div className={"tutorial-board"}>
            <div className={"board-row"}>
                <div className={"square"}/>
                <div className={"square"}/>
                <div className={"square"}/>
                <div className={"square step1_square2"}>O</div>
                <div className={"square"}/>
            </div>
            <div className={"board-row"}>
                <div className={"square"}/>
                <div className={"square"}/>
                <div className={"square"}/>
                <div className={"square"}/>
                <div className={"square"}/>
            </div>
            <div className={"board-row"}>
                <div className={"square step1_square1"}>X</div>
                <div className={"square"}/>
                <div className={"square"}/>
                <div className={"square"}/>
                <div className={"square"}/>
            </div>
            <div className={"board-row"}>
                <div className={"square"}/>
                <div className={"square"}/>
                <div className={"square step1_square3"}>O</div>
                <div className={"square"}/>
                <div className={"square"}/>
            </div>
            <div className={"board-row"}>
                <div className={"square"}/>
                <div className={"square"}/>
                <div className={"square"}/>
                <div className={"square"}/>
                <div className={"square"}/>
            </div>
            <div className={"board-row"}>
                <div className={"square tray"}/>
                <div className={"square tray step1_X"}>X</div>
                <div className={"square tray"}/>
                <div className={"square tray step1_O"}>O</div>
                <div className={"square tray"}/>
            </div>
        </div>
        <div className="tutorial-text">
            Players take turns dragging a symbol (X or O) of their color onto the board.
        </div>
    </div>,

    <div className="tutorialStep">
        <div className={"tutorial-board"}>
            <div className={"board-row"}>
                <div className={"square"}/>
                <div className={"square"}/>
                <div className={"square"}/>
                <div className={"square"}/>
                <div className={"square"}/>
            </div>
            <div className={"board-row"}>
                <div className={"square"}/>
                <div className={"square"}/>
                <div className={"square"}/>
                <div className={"square"}/>
                <div className={"square"}/>
            </div>
            <div className={"board-row"}>
                <div className={"square"}/>
                <div className={"square"}/>
                <div className={"square"}/>
                <div className={"square"}/>
                <div className={"square red"}>O</div>
            </div>
            <div className={"board-row"}>
                <div className={"square"}/>
                <div className={"square"}/>
                <div className={"square"}/>
                <div className={"square blue"}>X</div>
                <div className={"square blue"}>X</div>
            </div>
            <div className={"board-row"}>
                <div className={"square"}/>
                <div className={"square"}/>
                <div className={"square"}/>
                <div className={"square"}/>
                <div className={"square"}/>
            </div>
            <div className={"board-row"}>
                <div className={"square tray"}/>
                <div className={"square tray step2_X"}>X</div>
                <div className={"square tray"}/>
                <div className={"square tray red_token"}>O</div>
                <div className={"square tray"}/>
            </div>
        </div>
        <div className="tutorial-text">
            <div>Matching symbols of opposite color cannot be placed adjacent or diagonal to each other.</div>
            <div>(Turn hints on/off to show/hide legal moves.)</div>
        </div>
    </div>,

    <div className="tutorialStep">
        <div className={"tutorial-board"}>
            <div className={"board-row"}>
                <div className={"square"}/>
                <div className={"square"}/>
                <div className={"square"}/>
                <div className={"square"}/>
                <div className={"square"}/>
            </div>
            <div className={"board-row"}>
                <div className={"square"}/>
                <div className={"square"}/>
                <div className={"square red"}>X</div>
                <div className={"square"}/>
                <div className={"square"}/>
            </div>
            <div className={"board-row"}>
                <div className={"square"}/>
                <div className={"square blue"}>O</div>
                <div className={"square black"}/>
                <div className={"square red"}>O</div>
                <div className={"square"}/>
            </div>
            <div className={"board-row"}>
                <div className={"square"}/>
                <div className={"square blue"}>X</div>
                <div className={"square"}/>
                <div className={"square"}/>
                <div className={"square"}/>
            </div>
            <div className={"board-row"}>
                <div className={"square"}/>
                <div className={"square"}/>
                <div className={"square"}/>
                <div className={"square"}/>
                <div className={"square"}/>
            </div>
            <div className={"board-row"}>
                <div className={"square tray"}/>
                <div className={"square tray red_token"}>X</div>
                <div className={"square tray"}/>
                <div className={"square tray red_token"}>O</div>
                <div className={"square tray"}/>
            </div>
        </div>
        <div className="tutorial-text">
            When no symbol can be placed in a square, the square is blacked out.
        </div>
    </div>,

    <div className="tutorialStep">
        <div className={"tutorial-board"}>
            <div className={"board-row"}>
                <div className={"square"}/>
                <div className={"square"}/>
                <div className={"square"}/>
                <div className={"square"}/>
                <div className={"square red step4_score3"}>O</div>
            </div>
            <div className={"board-row"}>
                <div className={"square"}/>
                <div className={"square"}/>
                <div className={"square"}/>
                <div className={"square red step4_score3"}>X</div>
                <div className={"square"}/>
            </div>
            <div className={"board-row"}>
                <div className={"square"}/>
                <div className={"square"}/>
                <div className={"square red step4_score3"}>O</div>
                <div className={"square"}/>
                <div className={"square"}/>
            </div>
            <div className={"board-row"}>
                <div className={"square blue step4_score1"}>O</div>
                <div className={"square blue step4_score12"}>X</div>
                <div className={"square blue step4_score12"}>X</div>
                <div className={"square blue step4_score2"}>X</div>
                <div className={"square"}/>
            </div>
            <div className={"board-row"}>
                <div className={"square"}/>
                <div className={"square"}/>
                <div className={"square"}/>
                <div className={"square"}/>
                <div className={"square"}/>
            </div>
        </div>
        <div className="tutorial-text">
            Score a point by getting a 3-in-a-row of your color (symbol doesn't matter).
        </div>
    </div>,

    <div className="tutorialStep">
        <div className={"tutorial-board"}>
            <div className={"board-row"}>
                <div className={"square red"}>X</div>
                <div className={"square step_ends_auto"}/>
                <div className={"square blue"}>X</div>
                <div className={"square step_ends_auto"}/>
                <div className={"square red"}>X</div>
            </div>
            <div className={"board-row"}>
                <div className={"square blue"}>O</div>
                <div className={"square blue"}>O</div>
                <div className={"square blue"}>X</div>
                <div className={"square step_ends_auto"}/>
                <div className={"square blue"}>O</div>
            </div>
            <div className={"board-row"}>
                <div className={"square red"}>X</div>
                <div className={"square black"}/>
                <div className={"square blue"}>X</div>
                <div className={"square black"}/>
                <div className={"square red"}>X</div>
            </div>
            <div className={"board-row"}>
                <div className={"square red"}>O</div>
                <div className={"square red"}>O</div>
                <div className={"square blue"}>X</div>
                <div className={"square red"}>O</div>
                <div className={"square red"}>O</div>
            </div>
            <div className={"board-row"}>
                <div className={"square blue"}>X</div>
                <div className={"square blue"}>X</div>
                <div className={"square red"}>O</div>
                <div className={"square red"}>O</div>
                <div className={"square blue"}>X</div>
            </div>
        </div>
        <div className="tutorial-text">
            <div>The game ends when one player cannot make any more moves.</div>
            <div>Any remaining moves for the other player will complete automatically.</div>
        </div>

    </div>,

    <div className="tutorialStep">
        <div className="tutorial-text">
            <div>The player with the most points wins!</div>
        </div>
    </div>,

];

class Rule extends React.Component {
    render () {
        let ruleNumber = this.props.ruleNumber;
        if (this.props.currentRule !== ruleNumber) {
            return null
        }
        return(
            rules[ruleNumber-1]
        )
    }
}

function PreviousButton(props) {
    if(props.currentRule !== 1) {
        return (
            <button onClick={props.handlePrevious}>Previous</button>
        )
    }
    return <div/>;
}

function NextButton(props) {
    if(props.currentRule < rules.length) {
        return (
            <button onClick={props.handleNext}>Next</button>
        )
    }
    return <div/>;
}

function Tutorial(props) {
    const totalSteps = rules.length;
    let ruleDisplay = Array.from(Array(totalSteps)).map((_, step) => <Rule
        ruleNumber = {step+1}
        currentRule = {props.currentRule}
        key = {step+1}
    />);
    if (props.showRules) {
        return (
            <Modal>
                <div className="modal">
                    <div className="tutorial">
                        <div className="tutorial-navigation">
                            <PreviousButton
                                currentRule={props.currentRule}
                                handlePrevious={props.handlePrevious}
                            />
                            <div>{props.currentRule}/{totalSteps}</div>
                            <NextButton
                                currentRule={props.currentRule}
                                totalSteps={totalSteps}
                                handleNext={props.handleNext}
                            />
                            <button onClick={props.handleHide}>Exit</button>
                        </div>
                        {ruleDisplay}
                    </div>
                </div>
            </Modal>
        );
    } else {
        return null;
    }

}

export default Tutorial;
