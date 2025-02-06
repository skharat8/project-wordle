import React from "react";

function GameEnd({ status, attempts, answer }) {
  if (status === "win") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{attempts} guesses</strong>.
        </p>
      </div>
    );
  } else if (status === "lose") {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }
}

export default GameEnd;
