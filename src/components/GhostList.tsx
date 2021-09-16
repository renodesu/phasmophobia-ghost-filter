import React from 'react'
import { ghostData } from '../data/ghostData'
import styles from './GhostList.module.scss'
import Ghost from './Ghost'

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
