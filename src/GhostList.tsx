import React from 'react'
import Ghost from './Ghost'
import { ghostData } from './data'

function GhostList() {
  const ghostList = Object.entries(ghostData)
    .map(([ghostName, evidence]) => {
      return <Ghost name={ghostName} evidence={evidence} key={ghostName} />
    })

  return (
    <div className="ghostList">
      {ghostList}
    </div>
  )
}

export default GhostList
