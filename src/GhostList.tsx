import React from 'react'
import Ghost from './Ghost'
import { ghostData } from './data'
import { useRecoilValue } from 'recoil'
import { possibleGhostsState } from './state'

const GhostList = () => {
  const possibleGhosts = useRecoilValue(possibleGhostsState)
  const possibleNames = possibleGhosts.map(ghost => ghost.name)

  const ghostList = ghostData.map(ghost => {
    return <Ghost ghost={ghost} key={ghost.name} isPossible={possibleNames.includes(ghost.name)} />
  })

  return (
    <div className="ghostList">
      {ghostList}
    </div>
  )
}

export default GhostList
