import clsx from 'clsx'
import { useRecoilValue } from 'recoil'

import '../styles/global.scss'
import { colorSchemeState } from '../utils/state'

import Header from './Header'
import MainContent from './MainContent'

const App = () => {
  const isDarkMode = useRecoilValue(colorSchemeState)
  const colorScheme = isDarkMode ? 'dark' : 'light'

  return (
    <div id="app" className={clsx(colorScheme, 'min-h-screen')}>
      <div className="max-w-[1215px] mx-auto pb-20">
        <Header />
        <MainContent />
        {/* <StateDebug /> */}
      </div>
    </div>
  )
}

export default App
