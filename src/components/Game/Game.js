import { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

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
