import clsx from 'clsx'
import { useEffect } from 'react'
import { FiRefreshCcw } from 'react-icons/fi'
import { useRecoilValue, useResetRecoilState } from 'recoil'

import '../styles/global.scss'
import { darkModeState, evidenceState } from '../utils/state'

import styles from './App.module.scss'
import DarkModeToggle from './DarkModeToggle'
import GhostFilter from './GhostFilter'
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
    <div className={clsx(styles.App, theme)}>
      <div id={styles.appContent}>
        <div>
          <div className="flex items-center py-2">
            <h1 className="text-xl font-bold">Phasmophobia Ghost Filter</h1>
            <div className="ml-4">
              <button
                className="rounded p-2 px-6 border-2 font-semibold cursor-pointer opacity-70 hover:opacity-100 active:border-orange-400 flex items-center"
                onClick={resetEvidence}
              >
                <FiRefreshCcw className="w-4 h-4 mr-2 stroke-black fill-transparent dark:stroke-white" />
                RESET (ESC)
              </button>
            </div>
            <div className="ml-auto flex">
              <DarkModeToggle />
              <GithubMark />
            </div>
          </div>
          <GhostFilter />
        </div>
      </div>
    </div>
  )
}

export default App
