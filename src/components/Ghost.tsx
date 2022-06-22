import clsx from 'clsx'
import React from 'react'
import { useRecoilValue } from 'recoil'

import { EvidenceKey, GhostData } from '../data/ghostData'
import {
  isAnyEvidenceSelectedState,
  possibleGhostsState,
  possibleRemainingEvidenceState,
} from '../utils/state'
import { evidencePrettyName } from '../utils/utils'

import styles from './Ghost.module.scss'
import LabelWithCB from './LabelWithCB'

type GhostProps = {
  ghost: GhostData
}

const Ghost = ({ ghost }: GhostProps) => {
  const possibleGhosts = useRecoilValue(possibleGhostsState)
  const possibleRemainingEvidence = useRecoilValue(
    possibleRemainingEvidenceState
  )
  const isAnyEvidenceSelected = useRecoilValue(isAnyEvidenceSelectedState)
  const isGhostPossible = possibleGhosts.includes(ghost)
  const evidenceEntries = Object.entries(ghost.evidence) as [
    EvidenceKey,
    boolean
  ][]

  return (
    <div
      className={clsx(styles.ghost, {
        [styles.show]: isGhostPossible && isAnyEvidenceSelected,
        [styles.noActiveEvidence]: !isAnyEvidenceSelected,
      })}
    >
      <div className={styles.ghostName}>{ghost.name}</div>
      <div>
        {evidenceEntries.map(([evidenceKey, status]) => {
          const id = `evidence-${ghost.name}-${evidenceKey}`
          const isRemainingEvidence =
            status && possibleRemainingEvidence.includes(evidenceKey)
          const isFakeEvidence = ghost.fakeEvidence?.includes(evidenceKey)

          return (
            <div
              key={evidenceKey}
              className={clsx(styles.ghostEvidence, {
                [styles.isRemainingFilter]: isRemainingEvidence,
                [styles.isFakeEvidence]: isFakeEvidence,
              })}
            >
              <LabelWithCB
                id={id}
                checked={status}
                value={evidenceKey}
                text={evidencePrettyName(evidenceKey)}
                disabled
                hideCheckbox
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Ghost
