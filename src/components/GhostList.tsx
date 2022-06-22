import React from 'react'

import { ghostData } from '../data/ghostData'

import Ghost from './Ghost'
import styles from './GhostList.module.scss'

const GhostList = () => {
  const ghostNodes = ghostData.map(ghost => {
    return <Ghost ghost={ghost} key={ghost.name} />
  })

  return <div className={styles.ghostList}>{ghostNodes}</div>
}

export default GhostList
