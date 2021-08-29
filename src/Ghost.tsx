import clsx from 'clsx'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { Evidence, GhostData } from './data'
import { isAnyFilterActiveState, possibleGhostsState, possibleRemainingEvidenceState } from './state'

type GhostProps = {
  ghost: GhostData
}

const Ghost = ({ ghost }: GhostProps) => {
  const possibleGhosts = useRecoilValue(possibleGhostsState)
  const possibleRemainingEvidence = useRecoilValue(possibleRemainingEvidenceState)
  const isAnyFilterActive = useRecoilValue(isAnyFilterActiveState)
  const isGhostPossible = possibleGhosts.includes(ghost)

  return (
    <div className={clsx('ghost', { show: isGhostPossible && isAnyFilterActive, noActiveFilters: !isAnyFilterActive })}>
      <h3>{ghost.name}</h3>
      {Object.entries(ghost.evidence).map(([evName, status]) => {
        const id = `${ghost.name}-${evName}`
        const isRemainingEvidence = status && possibleRemainingEvidence.includes(evName as keyof Evidence)

        return (
          <div key={evName} className={clsx('ghost-evidence', { isRemainingFilter: isRemainingEvidence })}>
            <input type="checkbox" id={id} checked={status} readOnly />
            <label htmlFor={id}>
              {evName}
            </label>
          </div>
        )
      })}
    </div>
  )
}

export default Ghost
