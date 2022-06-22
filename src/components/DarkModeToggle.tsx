import clsx from 'clsx'
import { useRecoilState } from 'recoil'

import moonIcon from '../static/moon.svg'
import sunIcon from '../static/sun.svg'
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
        {/* <SunIcon /> */}
        <img src={sunIcon} alt="sunIcon" />
        {/* {sunIcon} */}
      </div>
      <div className={clsx(styles.icon, { [styles.show]: !darkMode })}>
        {/* <MoonIcon /> */}
        <img src={moonIcon} alt="moonIcon" />
        {/* {moonIcon} */}
      </div>
    </div>
  )
}

export default DarkModeToggle
