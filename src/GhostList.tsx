import React from 'react'
import Ghost from './Ghost'
import { ghostData } from './data/ghostData'

const GhostList = () => {
  const ghostNodes = ghostData.map(ghost => {
    return <Ghost ghost={ghost} key={ghost.name} />
  })

  return (
    <div className="ghostList">
      {ghostNodes}
    </div>
  )
}

export default GhostList
