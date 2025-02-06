import { useState } from "react";

function GuessInput({ addToGuessResults, gameStatus }) {
  const [guess, setGuess] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addToGuessResults(guess);
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        pattern="[a-zA-Z]{5}"
        title="5 letter word required"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        disabled={gameStatus !== "running"}
      />
    </form>
  );
}

export default GuessInput;
