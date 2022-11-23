import clsx from 'clsx'
import { useRecoilValue } from 'recoil'

import '../styles/global.scss'
import { useUmamiTracking } from '../hooks/useUmamiTracking'
import { darkModeState } from '../utils/state'

import Header from './Header'
import MainContent from './MainContent'

const App = () => {
  const darkMode = useRecoilValue(darkModeState)
  const theme = darkMode ? 'dark' : 'light'

  useUmamiTracking()

  return (
    <div id="app" className={clsx(theme, 'min-h-screen')}>
      <div className="max-w-[1220px] mx-auto pb-20">
        <Header />
        <MainContent />
      </div>
    </div>
  )
}

export default App
