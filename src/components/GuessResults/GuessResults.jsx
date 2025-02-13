import React from "react";
import Guess from "../Guess/Guess";

import { range } from "../../utils.js";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";

function GuessResults({ guessResults, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} guess={guessResults[num]} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;
