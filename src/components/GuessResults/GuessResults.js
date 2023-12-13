import React from "react";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(({ guess, id }) => {
        return (
          <div key={id} className="guess">
            {guess}
          </div>
        );
      })}
    </div>
  );
}

export default GuessResults;
