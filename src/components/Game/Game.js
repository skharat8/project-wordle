import { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";
import GameEnd from "../GameEnd/GameEnd.jsx";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = useState([]);
  const [gameStatus, setGameStatus] = useState("running");

  function addToGuessResults(guess) {
    const nextGuessResults = [...guessResults, guess];
    setGuessResults(nextGuessResults);

    if (guess === answer) {
      setGameStatus("win");
    } else if (nextGuessResults.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lose");
    }
  }

  return (
    <>
      {gameStatus !== "running" && (
        <GameEnd
          status={gameStatus}
          attempts={guessResults.length}
          answer={answer}
        />
      )}
      <GuessResults guessResults={guessResults} answer={answer} />
      <GuessInput
        addToGuessResults={addToGuessResults}
        gameStatus={gameStatus}
      />
    </>
  );
}

export default Game;
