import React from "react";
import Guess from "../Guess";
import { range } from "../../utils";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {range(6).map((i) => (
        <Guess key={i} guess={guesses[i] ? guesses[i] : []} />
      ))}
    </div>
  );
}

export default GuessResults;
