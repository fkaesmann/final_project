import React from "react";

function Nav(props) {
  const { score, percentScore, numOfQuestions, questionNumber } = props;
  return (
    <div id="nav">
      <h3>Correct: {score} </h3>
      <h5>
        Question {questionNumber + 1} of: {numOfQuestions}{" "}
      </h5>
      <h5>Score is {percentScore} </h5>
    </div>
  );
}

export default Nav;
