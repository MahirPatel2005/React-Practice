import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css' // Optional: for styling

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/meals">Meals</Link>
        </li>
        <li>
          <Link to="/cocktails">Cocktails</Link>
        </li>
        <li>
          <Link to="/potter">Harry Potter Characters</Link>
        </li>
        <li>
          <Link to="/banks">Indian Banks</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
