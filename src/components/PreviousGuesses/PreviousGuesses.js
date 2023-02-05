import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import {  checkGuess } from '../../game-helpers'

function PreviousGuesses({ guessList, answer }) {

  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess answer={answer} key={num} guess={guessList[num]} />
      ))}
    </div>
  );
}

export default PreviousGuesses;
