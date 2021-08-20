import React, { useState } from 'react'
import './App.css'
import Ghost, { ghostList } from './Ghost'
import Filter from './Filter'

function App() {
  const allGhosts = Object.entries(ghostList).
    map(([ghostName, evidence]) => {
      return <Ghost name={ghostName} evidence={evidence} key={ghostName} />
    })

  return (
    <div className="App">
      <Filter />
      <div className="ghosts">
        {allGhosts}
      </div>
    </div>
  )
}

export default App
