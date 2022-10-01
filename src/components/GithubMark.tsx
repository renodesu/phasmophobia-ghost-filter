import { useRecoilValue } from 'recoil'

import githubDark from '../static/GitHub-Mark-64px.png'
import githubLight from '../static/GitHub-Mark-Light-64px.png'
import { darkModeState } from '../utils/state'

const GithubMark = () => {
  const darkMode = useRecoilValue(darkModeState)

  return (
    <a
      href="https://github.com/renodesu/phasmophobia-ghost-filter"
      target="_blank"
      rel="noreferrer"
      className="block"
      title="Check out the source code on Github!"
    >
      <img
        src={darkMode ? githubLight : githubDark}
        className="block"
        alt="By github.com/renodesu"
        width={32}
        height={32}
      />
    </a>
  )
}

export default GithubMark
