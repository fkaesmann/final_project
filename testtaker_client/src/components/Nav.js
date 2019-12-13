import React from "react";

function Nav(props) {
  const { score, numOfQuestions, questionNumber } = props;
  return (
    <div>
      <h3>Score: {score} </h3>
      <h5>
        Question number {questionNumber + 1} of: {numOfQuestions}{" "}
      </h5>
      {/* {questions.map(dater => (
        // <p key={dater.id}>fred</p>
        <div key={dater.id}>

          {dater.ltl ? (
            <h5> Loves to laugh and have a good time</h5>
          ) : (
            <h5> Hates laughing, does not like having a good time</h5>
          )}
        </div>
      ))} */}
    </div>
  );
}

export default Nav;
