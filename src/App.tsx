import React from 'react'
import './styles/App.scss'
import { useRecoilValue } from 'recoil'
import GhostFilter from './GhostFilter'
import GhostList from './GhostList'
import GithubMark from './GithubMark'
import DarkModeToggle from './DarkModeToggle'
import { darkModeState } from './utils/state'

const App = () => {
  const darkMode = useRecoilValue(darkModeState)
  const theme = darkMode ? 'dark' : 'light'

  return (
    <div className="App" data-theme={theme}>
      <div id="appContent">
        <div className="filterRow row">
          <div className="titleRow">
            <h1>
              Phasmophobia Ghost Filter
            </h1>
            <div className="headingRight">
              <DarkModeToggle />
              <GithubMark />
            </div>
          </div>
          <GhostFilter />
        </div>
        <div className="ghostRow row">
          <h2>Possible ghosts</h2>
          <GhostList />
        </div>
      </div>
    </div>
  )
}

export default App
