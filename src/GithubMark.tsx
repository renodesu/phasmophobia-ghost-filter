import React from 'react'
import image from './static/GitHub-Mark-64px.png'

const GithubMark = () => {
  return (
    <a href="https://github.com/renodesu/phasmophobia-ghost-filter" target="_blank" rel="noreferrer" className="githubMark">
      <img src={image} alt="" width={32} height={32} />
    </a>
  )
}

export default GithubMark
