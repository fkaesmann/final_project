import React from "react";

function Nav(props) {
  const { score, percentScore, numOfQuestions, questionNumber } = props;
  return (
    <div>
      <h3>Score: {score} </h3>
      <h5>
        Question number {questionNumber + 1} of: {numOfQuestions}{" "}
      </h5>
      <h5>Percent is {percentScore} </h5>
    </div>
  );
}

export default Nav;
