import React from 'react'
import { useRecoilState } from 'recoil'
import clsx from 'clsx'
import { darkModeState } from './utils/state'
import SunIcon from './static/sun.svg?component'
import MoonIcon from './static/moon.svg?component'

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState)

  return (
    <div
      className="darkModeToggle"
      onClick={() => setDarkMode(!darkMode)}
      title={`Switch to ${darkMode ? 'Light' : 'Dark'} theme`}
    >
      <div className={clsx('icon', { show: darkMode })}>
        <SunIcon />
      </div>
      <div className={clsx('icon', { show: !darkMode })}>
        <MoonIcon />
      </div>
    </div >
  )
}

export default DarkModeToggle
