import React, { useEffect, useState } from 'react'

function CocktailComponent() {
  const [cocktails, setCocktails] = useState([])

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api.php')
      .then(response => response.json())
      .then(data => setCocktails(data.drinks))
  }, [])

  return (
    <div>
      <h1>Cocktails</h1>
      {/* Render cocktails here */}
    </div>
  )
}

export default CocktailComponent
