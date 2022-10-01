import '../styles/global.scss'
import { useEffect } from 'react'
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
        <div>
          <div className="flex items-center py-2">
            <h1 className="text-xl font-bold">Phasmophobia Ghost Filter</h1>
            <div className="ml-auto flex">
              <DarkModeToggle />
              <GithubMark />
            </div>
          </div>
          <GhostFilter />
        </div>
        {/* <div>
          <h2>Possible ghosts</h2>
          <GhostList />
        </div> */}
      </div>
    </div>
  )
}

export default App
