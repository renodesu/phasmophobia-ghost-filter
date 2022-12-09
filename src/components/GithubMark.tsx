import { ReactComponent as Github } from '../static/icons/githubMark.svg'

const GithubMark = () => {
  return (
    <a
      href="https://github.com/renodesu/phasmophobia-ghost-filter"
      target="_blank"
      rel="noreferrer"
      title="Check out the source code on Github!"
    >
      <Github className="githubMark" />
    </a>
  )
}

export default GithubMark
