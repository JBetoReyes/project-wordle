import React from "react";

import { sample } from "../../utils";
import { WORDS, KEYBOARD_DICT } from "../../data";
import { checkGuess } from "../../game-helpers";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import Banner from "../Banner/Banner";
import Keyboard from "../Keyboard/Keyboard";

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState({
    isWinner: false,
    isLoser: false,
  });
  const [keysPressed, setKeysPressed] = React.useState(KEYBOARD_DICT);
  const addGuess = (rawGuess) => {
    const newGuess = checkGuess(rawGuess, answer);
    const newGuesses = [...guesses, newGuess];
    const newKeysStatuses = {};
    for (const newGuessLetter of newGuess) {
      const { letter, status } = newGuessLetter;
      newKeysStatuses[letter] = status;
    }
    setGuesses(newGuesses);
    setKeysPressed({
      ...keysPressed,
      ...newKeysStatuses,
    });
    if (rawGuess === answer) {
      setGameStatus({ ...gameStatus, isWinner: true });
    } else if (newGuesses.length === 6) {
      setGameStatus({ ...gameStatus, isLoser: true });
    }
  };
  const restartGame = () => {
    setAnswer(sample(WORDS));
    setGuesses([]);
    setGameStatus({ isWinner: false, isLoser: false });
    setKeysPressed(KEYBOARD_DICT);
  };
  const gameCompleted = gameStatus.isWinner || gameStatus.isLoser;
  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput disabled={gameCompleted} addGuess={addGuess} />
      <Keyboard keysStatus={keysPressed} />
      {gameCompleted ? (
        <Banner
          guesses={guesses}
          isWinner={gameStatus.isWinner}
          correctAnswer={answer}
          restartGame={restartGame}
        />
      ) : null}
    </>
  );
}

export default Game;
