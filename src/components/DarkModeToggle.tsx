import clsx from 'clsx'
import React from 'react'
import { useRecoilState } from 'recoil'

import { ReactComponent as MoonIcon } from '../static/moon.svg'
import { ReactComponent as SunIcon } from '../static/sun.svg'
import { darkModeState } from '../utils/state'

import styles from './DarkModeToggle.module.scss'

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState)

  return (
    <div
      className={styles.darkModeToggle}
      onClick={() => setDarkMode(!darkMode)}
      title={`Switch to ${darkMode ? 'Light' : 'Dark'} theme`}
    >
      <div className={clsx(styles.icon, { [styles.show]: darkMode })}>
        <SunIcon />
      </div>
      <div className={clsx(styles.icon, { [styles.show]: !darkMode })}>
        <MoonIcon />
      </div>
    </div>
  )
}

export default DarkModeToggle
