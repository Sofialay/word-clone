import React, { useState } from 'react'

function InputGuess({ guessList, setGuessList }) {
    const [search, setSearch] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        if (search.length < 5) return window.alert('The input must have 5 characters')
        const newWord = [...guessList]
        newWord.push(search)
        setGuessList(newWord)
        setSearch('')
    }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input 
          value={search} 
          id="guess-input" 
          type="text"
          required
          minLength={5}
          maxLength={5}
          onChange={(e) => setSearch((e.target.value).toUpperCase())} 
        />
    </form>
  )
}

export default InputGuess