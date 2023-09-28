import clsx from 'clsx'
import { useRecoilState } from 'recoil'

import MoonIcon from '../static/icons/moon.svg?react'
import SunIcon from '../static/icons/sun.svg?react'
import { colorSchemeState } from '../utils/state'

const ColorSchemeToggle = () => {
  const [colorScheme, setColorScheme] = useRecoilState(colorSchemeState)
  const toggleColorScheme = () => setColorScheme(!colorScheme)

  return (
    <div
      className={clsx('colorSchemeToggle cursor-pointer select-none', {
        darkMode: colorScheme,
      })}
      onClick={toggleColorScheme}
    >
      <div className="slot">
        <MoonIcon width={32} height={32} />
        <SunIcon width={32} height={32} />
      </div>
    </div>
  )
}

export default ColorSchemeToggle
