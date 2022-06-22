import '../styles/global.scss'
import React, { useEffect } from 'react'
import { useRecoilValue, useResetRecoilState } from 'recoil'

import { darkModeState, evidenceState } from '../utils/state'

import styles from './App.module.scss'
import DarkModeToggle from './DarkModeToggle'
import GhostFilter from './GhostFilter'
import GhostList from './GhostList'
import GithubMark from './GithubMark'

const App = () => {
  const darkMode = useRecoilValue(darkModeState)
  const theme = darkMode ? 'dark' : 'light'
  const resetEvidence = useResetRecoilState(evidenceState)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        resetEvidence()
      }
    }
    document.addEventListener('keydown', handler)
    return () => {
      document.removeEventListener('keydown', handler)
    }
  })

  return (
    <div className={styles.App} data-theme={theme}>
      <div id={styles.appContent}>
        <div className={styles.row}>
          <div className={styles.titleRow}>
            <h1>Phasmophobia Ghost Filter</h1>
            <div className={styles.headingRight}>
              <DarkModeToggle />
              <GithubMark />
            </div>
          </div>
          <GhostFilter />
        </div>
        <div className={styles.row}>
          <h2>Possible ghosts</h2>
          <GhostList />
        </div>
      </div>
    </div>
  )
}

export default App
