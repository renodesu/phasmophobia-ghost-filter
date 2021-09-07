import clsx from 'clsx'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { Evidence, GhostData } from './ghostData'
import { isAnyEvidenceSelectedState, possibleGhostsState, possibleRemainingEvidenceState } from './state'

type GhostProps = {
  ghost: GhostData
}

const Ghost = ({ ghost }: GhostProps) => {
  const possibleGhosts = useRecoilValue(possibleGhostsState)
  const possibleRemainingEvidence = useRecoilValue(possibleRemainingEvidenceState)
  const isAnyEvidenceSelected = useRecoilValue(isAnyEvidenceSelectedState)
  const isGhostPossible = possibleGhosts.includes(ghost)

  return (
    <div className={clsx('ghost', { show: isGhostPossible && isAnyEvidenceSelected, noActiveEvidence: !isAnyEvidenceSelected })}>
      <h3>{ghost.name}</h3>
      {Object.entries(ghost.evidence).map(([evidenceKey, status]) => {
        const id = `${ghost.name}-${evidenceKey}`
        const isRemainingEvidence = status && possibleRemainingEvidence.includes(evidenceKey as keyof Evidence)

        return (
          <div key={evidenceKey} className={clsx('ghost-evidence', { isRemainingFilter: isRemainingEvidence })}>
            <input type="checkbox" id={id} checked={status} readOnly />
            <label htmlFor={id}>
              {evidenceKey}
            </label>
          </div>
        )
      })}
    </div>
  )
}

export default Ghost
