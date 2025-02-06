import React from "react";

import { range } from "../../utils.js";
import { checkGuess } from "../../game-helpers.js";

function Guess({ guess, answer }) {
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
