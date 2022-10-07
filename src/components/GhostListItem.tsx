import clsx from 'clsx'
import { toArray } from 'fp-ts/lib/Record'
import { FC } from 'react'
import { useRecoilValue } from 'recoil'

import { Ghost } from '../data/ghostData'
import {
  isAnyEvidenceSelectedState,
  possibleGhostsState,
  possibleRemainingEvidenceState,
} from '../utils/state'
import { evidencePrettyName, sortEvidence } from '../utils/utils'

import { EvidenceIcon } from './Icon'

type GhostListItemProps = {
  ghost: Ghost
}

const GhostListItem: FC<GhostListItemProps> = ({ ghost }) => {
  const possibleGhosts = useRecoilValue(possibleGhostsState)
  const possibleRemainingEvidence = useRecoilValue(
    possibleRemainingEvidenceState
  )
  const isAnyEvidenceSelected = useRecoilValue(isAnyEvidenceSelectedState)
  const isGhostPossible = possibleGhosts.includes(ghost)
  const ghostEvidenceEntries = toArray(ghost.evidence)

  const filteredEvidenceEntries = sortEvidence(
    ghostEvidenceEntries.filter(([_, hasEvidence]) => hasEvidence)
  )

  const show =
    (isGhostPossible && isAnyEvidenceSelected) || !isAnyEvidenceSelected

  return (
    <div
      className={clsx(
        'w-[200px] p-2 px-4 border-gray-300 border rounded-md overflow-hidden transition-all',
        {
          ['opacity-100']: show,
          ['opacity-10']: !show,
        }
      )}
    >
      <div className="font-semibold mb-1">{ghost.name}</div>
      <div className="flex justify-evenly">
        {filteredEvidenceEntries.map(([evidence, status]) => {
          const id = `evidence-${ghost.name}-${evidence}`
          const isRemainingEvidence =
            status && possibleRemainingEvidence.includes(evidence)

          return (
            <div
              key={evidence}
              id={id}
              title={evidencePrettyName(evidence)}
              className={clsx(
                'w-10 h-10 mx-0 p-1 border border-transparent transition-all flex',
                {
                  'rounded border-orange-400':
                    isRemainingEvidence && isAnyEvidenceSelected,
                  'opacity-10': !status,
                  'opacity-100': status,
                }
              )}
            >
              <EvidenceIcon name={evidence} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default GhostListItem
