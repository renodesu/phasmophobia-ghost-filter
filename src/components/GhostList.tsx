import { useMemo } from 'react'

import { ghostData } from '../data/ghostData'

import Ghost from './Ghost'

const GhostList = () => {
  const ghostNodes = useMemo(
    () => ghostData.map(ghost => <Ghost ghost={ghost} key={ghost.name} />),
    [ghostData]
  )

  return <div className="flex flex-wrap">{ghostNodes}</div>
}

export default GhostList
