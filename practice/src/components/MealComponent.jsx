import React, { useEffect, useState } from 'react'

function MealComponent() {
  const [meals, setMeals] = useState([])

  useEffect(() => {
    fetch('https://www.themealdb.com/api.php')
      .then(response => response.json())
      .then(data => setMeals(data.meals))
  }, [])

  return (
    <div>
      <h1>Meals</h1>
      {/* Render meals here */}
    </div>
  )
}

export default MealComponent
