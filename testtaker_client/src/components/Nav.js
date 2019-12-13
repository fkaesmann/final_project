import React from "react";

function Nav(props) {
  const { score } = props;
  return (
    <div>
      <h3>Score: {score} </h3>
      {/* {questions.map(dater => (
        // <p key={dater.id}>fred</p>
        <div key={dater.id}>
          <h3>Name: {questions.name} </h3>
          <img src={dater.img} alt={dater.name} />
          <h4>Starsign: {dater.starsign} </h4>
          <h4>Age: {dater.age} </h4>
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
