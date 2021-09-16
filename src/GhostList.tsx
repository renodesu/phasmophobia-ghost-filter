import React from 'react'
import Ghost from './Ghost'
import { ghostData } from './data/ghostData'
import styles from './styles/GhostList.module.scss'

const GhostList = () => {
  const ghostNodes = ghostData.map(ghost => {
    return <Ghost ghost={ghost} key={ghost.name} />
  })

  return (
    <div className={styles.ghostList}>
      {ghostNodes}
    </div>
  )
}

export default GhostList
