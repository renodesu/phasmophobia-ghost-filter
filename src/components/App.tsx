import clsx from 'clsx'
import { useRecoilValue } from 'recoil'

import { darkModeState } from '../utils/state'
import '../styles/global.scss'

import Header from './Header'
import MainContent from './MainContent'

const App = () => {
  const darkMode = useRecoilValue(darkModeState)
  const theme = darkMode ? 'dark' : 'light'

  return (
    <div id="app" className={clsx(theme, 'min-h-screen')}>
      <div className="max-w-[1320px] mx-auto pb-4">
        <Header />
        <MainContent />
      </div>
    </div>
  )
}

export default App
