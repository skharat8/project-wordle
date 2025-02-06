import { useState } from "react";

import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";

function Game() {
  const [guessResults, setGuessResults] = useState([]);

  function addToGuessResults(guess) {
    if (guessResults.length === NUM_OF_GUESSES_ALLOWED) return;

    setGuessResults([...guessResults, guess]);
  }

  return (
    <>
      <GuessResults guessResults={guessResults} />
      <GuessInput addToGuessResults={addToGuessResults} />
    </>
  );
}

export default Game;
