import { ghostData } from '../data/ghostData'

import Ghost from './Ghost'

const GhostList = () => {
  const ghostNodes = ghostData.map(ghost => {
    return <Ghost ghost={ghost} key={ghost.name} />
  })

  return <div className="flex flex-wrap justify-center">{ghostNodes}</div>
}

export default GhostList
