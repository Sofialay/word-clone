import React, { useState } from 'react'

function InputGuess() {
    const [search, setSearch] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        if (search.length < 5) window.alert('La palabra debe tener 5 letras')
        else {
            console.info({search})
            setSearch('')
        }
    }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input 
            value={search} 
            id="guess-input" 
            type="text"
            maxLength='5'
            onChange={(e) => setSearch((e.target.value).toUpperCase())} 
        />
    </form>
  )
}

export default InputGuess