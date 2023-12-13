import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(guess);
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
        pattern="[a-zA-Z]{5,5}"
        required
      />
    </form>
  );
}

export default GuessInput;