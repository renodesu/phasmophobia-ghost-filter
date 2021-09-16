import React from 'react'
import { useRecoilValue } from 'recoil'
import styles from '../styles/GithubMark.module.scss'
import githubLight from '../static/GitHub-Mark-Light-64px.png'
import githubDark from '../static/GitHub-Mark-64px.png'
import { darkModeState } from '../utils/state'

const GithubMark = () => {
  const darkMode = useRecoilValue(darkModeState)

  return (
    <a
      href="https://github.com/renodesu/phasmophobia-ghost-filter"
      target="_blank"
      rel="noreferrer"
      className={styles.githubMark}
      title="Check out the source code on Github!"
    >
      <img src={darkMode ? githubLight : githubDark} alt="" width={32} height={32} />
    </a>
  )
}

export default GithubMark
