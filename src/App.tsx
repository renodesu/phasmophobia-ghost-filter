import React from 'react'
import './App.scss'
import GhostFilter from './GhostFilter'
import GhostList from './GhostList'

const App = () => {
  return (
    <div className="App">
      <div className="filterRow row">
        <h1>Phasmophobia Ghost Filter</h1>
        <GhostFilter />
      </div>
      <div className="ghostRow row">
        <h2>Possible ghosts</h2>
        <GhostList />
      </div>
    </div>
  )
}

export default App
