import React from "react";
import { range } from "../../utils";
import {  checkGuess } from '../../game-helpers'

function Guess({ guess, answer }) {
  const check = checkGuess(guess, answer)

  return <div className="guess-results">
    <p className="guess">
      {range(5).map((num) => (
        <span 
          key={num} 
          className={`cell ${check ? check[num]?.status : ''}`}
        >
          {guess? guess[num] : undefined}
        </span>
      ))}
    </p>
  </div>

}

export default Guess;
