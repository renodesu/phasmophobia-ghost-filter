import React, { useState } from 'react'
import './App.css'
import Ghost, { ghosts } from './Ghost'
import Filter from './Filter'

function App() {
  const [count, setCount] = useState(0)

  const g = Object.entries(ghosts).
    map(([ghostName, evidence]) => {
      return <Ghost name={ghostName} evidence={evidence} key={ghostName} />
    })

  return (
    <div className="App">
      <Filter />
      <div className="ghosts">
        {g}
      </div>
    </div>
  )
}

export default App
