import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);

function Game() {
  console.log(answer);
  const [guesses, setGuesses] = React.useState([]);
  const addGuess = (guess) => {
    const newGuess = checkGuess(guess, answer);
    setGuesses((guesses) => [...guesses, newGuess]);
  };
  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput addGuess={addGuess} />
    </>
  );
}

export default Game;
