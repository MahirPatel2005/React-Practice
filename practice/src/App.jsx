import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MealComponent from './components/MealComponent'
import CocktailComponent from './components/CocktailComponent'
import PotterComponent from './components/PotterComponent'
import BankComponent from './components/BankComponent'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/meals" element={<MealComponent />} />
        <Route path="/cocktails" element={<CocktailComponent />} />
        <Route path="/potter" element={<PotterComponent />} />
        <Route path="/banks" element={<BankComponent />} />
      </Routes>
    </Router>
  )
}

export default App
