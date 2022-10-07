import { ghostData } from '../data/ghostData'

import GhostListItem from './GhostListItem'

const GhostList = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {ghostData
        .slice()
        .sort((g1, g2) => g1.name.localeCompare(g2.name))
        .map(ghost => (
          <GhostListItem ghost={ghost} key={ghost.name} />
        ))}
    </div>
  )
}

export default GhostList
