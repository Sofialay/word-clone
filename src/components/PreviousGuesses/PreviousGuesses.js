import React from "react";

function PreviousGuesses({ guessList }) {
  return (
    <div className="guess-results">
      {guessList.map(({ search, id }) => (
        <p key={id} className="guess">{search}</p>
      ))}
    </div>
  );
}

export default PreviousGuesses;
