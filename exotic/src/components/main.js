import React from "react";
import Joke from "./Joke";
import jokesData from "../data/jokesData.js";

function Main() {
  const jokes = jokesData.map((joke) => (
    <Joke key={joke.id} question={joke.question} answer={joke.answer} />
  ));
  return <main>{jokes}</main>;
}

export default Main;
