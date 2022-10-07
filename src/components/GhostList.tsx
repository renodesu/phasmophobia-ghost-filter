import { ghostData } from '../data/ghostData'

import GhostListItem from './GhostListItem'

const GhostList = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {ghostData.map(ghost => (
        <GhostListItem ghost={ghost} key={ghost.name} />
      ))}
    </div>
  )
}

export default GhostList
