import React from 'react'
import Ghost from './Ghost'
import { ghostData } from './data'

const GhostList = () => {
  const allGhosts = ghostData.map(ghost => {
    return <Ghost ghost={ghost} key={ghost.name} />
  })

  return (
    <div className="ghostList">
      {allGhosts}
    </div>
  )
}

export default GhostList
