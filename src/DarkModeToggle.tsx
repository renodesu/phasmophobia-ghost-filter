import React from 'react'
import { useRecoilState } from 'recoil'
import clsx from 'clsx'
import { darkModeState } from './utils/state'
import SunIcon from './static/sun.svg?component'
import MoonIcon from './static/moon.svg?component'
import styles from './styles/DarkModeToggle.module.scss'

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
    </div >
  )
}

export default DarkModeToggle