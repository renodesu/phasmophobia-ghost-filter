import React, { useState } from 'react'
import './App.css'
import Ghost, { ghostList } from './Ghost'
import GhostFilter from './Filter'

function App() {
  const allGhosts = Object.entries(ghostList).
    map(([ghostName, evidence]) => {
      return <Ghost name={ghostName} evidence={evidence} key={ghostName} />
    })

  return (
    <div className="App">
      <div className="filterRow">
        <h1>Ghost filter</h1>
        <GhostFilter />
      </div>
      <div className="ghostRow">
        <h2>All ghosts</h2>
        <div className="ghosts">
          {allGhosts}
        </div>
      </div>
    </div>
  )
}

export default App
