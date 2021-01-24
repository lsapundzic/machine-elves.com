import React from "react";

function Joke(props) {
  return (
    <div>
      <h3 className="question">Question: {props.question}</h3>
      <h3 className="answer">Answer: {props.answer}</h3>
      <hr />
    </div>
  );
}

export default Joke;
