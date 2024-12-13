import React, { useEffect, useState } from 'react'

function PotterComponent() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch('https://www.potterapi.com/v1/characters?key=YOUR_API_KEY')
      .then(response => response.json())
      .then(data => setCharacters(data))
  }, [])

  return (
    <div>
      <h1>Harry Potter Characters</h1>
      {/* Render characters here */}
    </div>
  )
}

export default PotterComponent
