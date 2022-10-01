import { useMemo } from 'react'
import { useRecoilValue } from 'recoil'

import { ghostData } from '../data/ghostData'
import { possibleGhostsState } from '../utils/state'

import Ghost from './Ghost'

const GhostList = () => {
  const possibleGhosts = useRecoilValue(possibleGhostsState)
  console.log(possibleGhosts)
  const ghostNodes = useMemo(
    () =>
      ghostData
        .filter(ghost => {
          const pgKeys = possibleGhosts.map(ghost => ghost.name)
          console.log('keys', pgKeys)

          return true
          return pgKeys.includes(ghost.name)
        })
        .map(ghost => <Ghost ghost={ghost} key={ghost.name} />),
    [ghostData, possibleGhosts]
  )

  return <div className="flex flex-wrap justify-center">{ghostNodes}</div>
}

export default GhostList
