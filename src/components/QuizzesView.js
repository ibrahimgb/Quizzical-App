import React from "react";

export default function QuizzesView() {
    const [evaluating, setIsEvaluating] = React.useState(true);
    return (
        <div className="App">
            <div>
                <h3>How Many Hearts Does An Octopus Have?</h3>
                <div className="answers">
                    <div className="answer solution">One</div>
                    <div className="answer selected">Two</div>
                    <div className="answer correct ">Three</div>
                    <div className="answer incorrect">Four</div>
                </div>
                <hr></hr>
            </div>
            {evaluating ? (
                <div>
                    {" "}
                    <button className="checkAnswers">Check answers</button>{" "}
                </div>
            ) : (
                <div className="scoring">
                    <p>You scored 3/5 correct answers</p>
                    <button className="restart">Play again</button>
                </div>
            )}

            <div className="spot1"></div>
            <div className="spot2"></div>
        </div>
    );
}
