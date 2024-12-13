import React, { useEffect, useState } from 'react'

function BankComponent() {
  const [banks, setBanks] = useState([])

  useEffect(() => {
    fetch('https://api.example.com/banks') // Replace with actual API endpoint
      .then(response => response.json())
      .then(data => setBanks(data))
  }, [])

  return (
    <div>
      <h1>Indian Banks</h1>
      {/* Render banks here */}
    </div>
  )
}

export default BankComponent
