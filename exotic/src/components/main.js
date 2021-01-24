import React from "react";
import Joke from "./Joke";

function Main() {
  return (
    <main>
      <Joke
        funny={{
          question: "Knock knock",
          answer: "Who's there?",
        }}
      />
      <Joke />
      <Joke />
    </main>
  );
}

export default Main;
