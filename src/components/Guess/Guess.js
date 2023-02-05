import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {

  return <div classNameName="guess-results">
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className="cell">{guess? guess[num] : undefined}</span>
      ))}
    </p>
  </div>

}

export default Guess;
