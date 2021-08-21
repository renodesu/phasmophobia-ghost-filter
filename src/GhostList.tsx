import React from 'react'
import GhostEntry from './Ghost'
import { ghostData } from './data'

const GhostList = () => {
  const ghostList = ghostData.map(ghost => {
    return <GhostEntry ghost={ghost} key={ghost.name} />
  })

  return (
    <div className="ghostList">
      {ghostList}
    </div>
  )
}

export default GhostList
