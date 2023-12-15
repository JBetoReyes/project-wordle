import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import Banner from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);

function Game() {
  console.log(answer);
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState({
    isWinner: false,
    isLoser: false,
  });
  const addGuess = (rawGuess) => {
    const newGuess = checkGuess(rawGuess, answer);
    const newGuesses = [...guesses, newGuess];
    setGuesses(newGuesses);
    if (rawGuess === answer) {
      setGameStatus({ ...gameStatus, isWinner: true });
    } else if (newGuesses.length === 6) {
      setGameStatus({ ...gameStatus, isLoser: true });
    }
  };
  const gameCompleted = gameStatus.isWinner || gameStatus.isLoser;
  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput disabled={gameCompleted} addGuess={addGuess} />
      {gameCompleted ? (
        <Banner
          guesses={guesses}
          isWinner={gameStatus.isWinner}
          correctAnswer={answer}
        />
      ) : null}
    </>
  );
}

export default Game;
