import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  const guessLetters = Boolean(guess.length)
    ? guess
    : range(5).map(() => ({ letter: "", status: "" }));
  return (
    <p className="guess">
      {guessLetters.map(({ letter, status }, i) => (
        <span key={i} className={`cell ${status}`}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
