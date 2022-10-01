import { useRecoilState } from 'recoil'

import { ReactComponent as MoonIcon } from '../static/moon.svg'
import { ReactComponent as SunIcon } from '../static/sun.svg'
import { darkModeState } from '../utils/state'

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState)

  return (
    <div
      className="w-8 h-8 flex items-center relative cursor-pointer mr-4"
      onClick={() => setDarkMode(!darkMode)}
      title={`Switch to ${darkMode ? 'Light' : 'Dark'} theme`}
    >
      <SunIcon
        className="absolute top-0 transition-opacity opacity-0 dark:opacity-100"
        width={32}
        height={32}
      />
      <MoonIcon
        className="absolute top-0 transition-opacity dark:opacity-0"
        width={32}
        height={32}
      />
    </div>
  )
}

export default DarkModeToggle
