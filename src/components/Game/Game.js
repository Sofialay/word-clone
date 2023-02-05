import React, { useState } from 'react'
import InputGuess from './InputGuess';
import PreviousGuesses from '../PreviousGuesses/PreviousGuesses';
import { sample } from '../../utils';
import { WORDS } from '../../data';
const answer = sample(WORDS);

function Game() {
  const [guessList, setGuessList] = useState([])

  return <>
    <PreviousGuesses guessList={guessList} answer={answer} />
    <InputGuess guessList={guessList} setGuessList={setGuessList}/>
  </>;
}

export default Game;
