import React from "react";

function Banner({ isWinner, correctAnswer, guesses, restartGame }) {
  const winnerText = (
    <p>
      <strong>Congratulations!</strong> Got it in{" "}
      <strong>{guesses.length} guesses</strong>
    </p>
  );
  const looserText = (
    <p>
      Sorry, the correct answer is <strong>{correctAnswer}</strong>.
    </p>
  );
  return (
    <div className={`banner ${isWinner ? "happy" : "sad"}`}>
      {isWinner ? winnerText : looserText}
      <button onClick={restartGame}>Play Again</button>
    </div>
  );
}

export default Banner;
