import { useEffect } from 'react'
import { FiRefreshCcw } from 'react-icons/fi'
import { SlGhost } from 'react-icons/sl'
import { useResetRecoilState } from 'recoil'

import { selectedEvidenceState } from '../utils/state'

import DarkModeToggle from './DarkModeToggle'
import GithubMark from './GithubMark'

const Header = () => {
  const resetEvidence = useResetRecoilState(selectedEvidenceState)

  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        resetEvidence()
      }
    }
    document.addEventListener('keydown', keyDownHandler)
    return () => {
      document.removeEventListener('keydown', keyDownHandler)
    }
  })

  return (
    <div className="flex items-center py-4 gap-4">
      <SlGhost className="w-10 h-10" strokeWidth={4} />
      <h1 className="text-xl font-bold">Phasmophobia Ghost Filter</h1>
      <SlGhost className="w-10 h-10" strokeWidth={4} />
      <div className="flex-grow">
        <button
          className="rounded p-2 px-6 border-2 text-balck dark:text-white font-semibold cursor-pointer opacity-70 hover:opacity-100 active:border-orange-400 flex items-center"
          onClick={resetEvidence}
        >
          <FiRefreshCcw className="w-4 h-4 mr-2 stroke-black fill-transparent dark:stroke-white" />
          RESET (ESC)
        </button>
      </div>
      <div className="flex gap-4">
        <DarkModeToggle />
        <GithubMark />
      </div>
    </div>
  )
}

export default Header
