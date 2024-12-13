import React, { useEffect, useState } from 'react'

function MealComponent() {
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=') // Fetch all meals
      .then(response => response.json())
      .then(data => {
        setMeals(data.meals)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching meals:', error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Meals</h1>
      <div className="meal-list">
        {meals ? (
          meals.map(meal => (
            <div key={meal.idMeal} className="meal-card">
              <h2>{meal.strMeal}</h2>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <p>{meal.strInstructions}</p>
              <a href={meal.strSource} target="_blank" rel="noopener noreferrer">View Recipe</a>
            </div>
          ))
        ) : (
          <p>No meals found.</p>
        )}
      </div>
    </div>
  )
}

export default MealComponent
