import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { range } from "../../utils.js";
import { checkGuess } from "../../game-helpers.js";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Guess({ guess }) {
  const results = checkGuess(guess, answer);

  return (
    <p className="guess">
      {range(5).map((num) => {
        return (
          <span
            key={num}
            className={`cell ${guess ? results[num].status : ""}`}
          >
            {guess ? guess[num] : undefined}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
