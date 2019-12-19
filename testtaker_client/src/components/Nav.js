import React from "react";
// import Card from "../../node_modules/fredk_package/src/components/Card";

function Nav(props) {
  const { score, percentScore, numOfQuestions, questionNumber } = props;
  return (
    <div id="nav">
      <h3>Correct: {score} </h3>
      <h5>
        Question {questionNumber + 1} of: {numOfQuestions}{" "}
      </h5>
      <h5>Score is {percentScore} </h5>
      {/* <Card /> */}
    </div>
  );
}

export default Nav;
