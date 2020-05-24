import React from "react";
import Modal from "./modal";

class Rule1 extends React.Component {
    render() {
        if (this.props.currentRule !== 1) {
            return null
        }
        return(
            <div className="tutorialStep">
                <div className="tutorial-text">
                    Players take turns dragging a symbol (X or O) of their color onto the board.
                </div>
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
            </div>
        )
    }
}

class Rule2 extends React.Component {
    render() {
        if (this.props.currentRule !== 2) {
            return null
        }
        return(
            <div className="tutorialStep">
                <div className="tutorial-text">
                    Matching symbols of opposite color cannot be placed adjacent or diagonal to each other.
                </div>
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
            </div>
        )
    }
}

class Rule3 extends React.Component {
    render() {
        if (this.props.currentRule !== 3) {
            return null
        }
        return(
            <div className="tutorialStep">
                <div className="tutorial-text">
                    When no symbol can be placed in a square, the square is blacked out.
                </div>
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
            </div>
        )
    }
}

class Rule4 extends React.Component {
    render() {
        if (this.props.currentRule !== 4) {
            return null
        }
        return(
            <div className="tutorialStep">
                <div className="tutorial-text">
                    Score a point by getting a 3-in-a-row of your color (symbol doesn't matter).
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
                </div>
            </div>
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
    if(props.currentRule < props.totalSteps) {
        return (
            <button onClick={props.handleNext}>Next</button>
        )
    }
    return <div/>;
}

function Tutorial(props) {
    const totalSteps = 4;
    if (props.showRules) {
        return (
            <Modal>
                <div className="modal">
                    <div className="tutorial">
                        <Rule1
                            currentRule = {props.currentRule}
                        />
                        <Rule2
                            currentRule = {props.currentRule}
                        />
                        <Rule3
                            currentRule = {props.currentRule}
                        />
                        <Rule4
                            currentRule = {props.currentRule}
                        />
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
                    </div>
                </div>
            </Modal>
        );
    } else {
        return null;
    }

}

export default Tutorial;