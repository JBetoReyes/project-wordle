import React from "react";

function GuessInput({ addGuess, disabled }) {
  const [guess, setGuess] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addGuess(guess);
    setGuess("");
  };
  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter Guess:</label>
      <input
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        required
        disabled={disabled}
      />
    </form>
  );
}

export default GuessInput;
