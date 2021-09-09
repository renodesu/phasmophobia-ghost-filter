import clsx from 'clsx'
import React from 'react'
import { useRecoilValue } from 'recoil'
import CheckboxWithLabel from './CheckboxWithLabel'
import { Evidence, GhostData } from './data/ghostData'
import { isAnyEvidenceSelectedState, possibleGhostsState, possibleRemainingEvidenceState } from './utils/state'

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
      <div className="ghostName">{ghost.name}</div>
      <div>
        {Object.entries(ghost.evidence).map(([evidenceKey, status]) => {
          const id = `evidence-${ghost.name}-${evidenceKey}`
          const isRemainingEvidence = status && possibleRemainingEvidence.includes(evidenceKey as keyof Evidence)

          return (
            <div key={evidenceKey} className={clsx('ghostEvidence', { isRemainingFilter: isRemainingEvidence })}>
              <CheckboxWithLabel id={id} checked={status} value={evidenceKey} disabled />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Ghost
