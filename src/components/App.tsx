import clsx from 'clsx'

import '../styles/global.scss'

import Header from './Header'
import MainContent from './MainContent'

const App = () => {
  return (
    <div id="app" className={clsx('dark', 'min-h-screen')}>
      <div className="max-w-[1215px] mx-auto pb-20">
        <Header />
        <MainContent />
        {/* <StateDebug /> */}
      </div>
    </div>
  )
}

export default App
