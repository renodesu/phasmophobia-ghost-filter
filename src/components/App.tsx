import clsx from 'clsx'
import { useRecoilValue } from 'recoil'

import { darkModeState } from '../utils/state'
import '../styles/global.scss'

import Header from './Header'
import MainContent from './MainContent'
import UmamiAnalytics from './UmamiAnalytics'

const App = () => {
  const darkMode = useRecoilValue(darkModeState)
  const theme = darkMode ? 'dark' : 'light'

  return (
    <div id="app" className={clsx(theme, 'min-h-screen')}>
      <div className="max-w-[1220px] mx-auto pb-20">
        <Header />
        <MainContent />
        <UmamiAnalytics />
      </div>
    </div>
  )
}

export default App
