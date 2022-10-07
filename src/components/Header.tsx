import { useEffect } from 'react'
import { FiRefreshCcw } from 'react-icons/fi'
import { useResetRecoilState } from 'recoil'

import { evidenceState } from '../utils/state'

import DarkModeToggle from './DarkModeToggle'
import GithubMark from './GithubMark'

const Header = () => {
  const resetEvidence = useResetRecoilState(evidenceState)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        resetEvidence()
      }
    }
    document.addEventListener('keydown', handler)
    return () => {
      document.removeEventListener('keydown', handler)
    }
  })
  return (
    <div className="flex items-center py-4">
      <h1 className="text-xl font-bold">Phasmophobia Ghost Filter</h1>
      <div className="ml-4">
        <button
          className="rounded p-2 px-6 border-2 font-semibold cursor-pointer opacity-70 hover:opacity-100 active:border-orange-400 flex items-center"
          onClick={resetEvidence}
        >
          <FiRefreshCcw className="w-4 h-4 mr-2 stroke-black fill-transparent dark:stroke-white" />
          RESET (ESC)
        </button>
      </div>
      <div className="ml-auto flex">
        <DarkModeToggle />
        <GithubMark />
      </div>
    </div>
  )
}

export default Header
