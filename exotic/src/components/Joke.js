import React from "react";

function Joke(props) {
  return (
    <div>
      <div className="question">{props.funny.question}</div>
      <div className="answer">{props.funny.answer}</div>
    </div>
  );
}

export default Joke;
