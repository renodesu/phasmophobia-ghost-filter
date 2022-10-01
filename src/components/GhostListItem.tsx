import clsx from 'clsx'
import { toArray } from 'fp-ts/lib/Record'
import { useRecoilValue } from 'recoil'

import { Ghost } from '../data/ghostData'
import {
  isAnyEvidenceSelectedState,
  possibleGhostsState,
  possibleRemainingEvidenceState,
} from '../utils/state'
import { sortEvidence } from '../utils/utils'

import { iconMap } from './Icon'

type GhostListItemProps = {
  ghost: Ghost
}

const GhostListItem = ({ ghost }: GhostListItemProps) => {
  const possibleGhosts = useRecoilValue(possibleGhostsState)
  const possibleRemainingEvidence = useRecoilValue(
    possibleRemainingEvidenceState
  )
  const isAnyEvidenceSelected = useRecoilValue(isAnyEvidenceSelectedState)
  const isGhostPossible = possibleGhosts.includes(ghost)
  const ghostEvidenceEntries = toArray(ghost.evidence)

  const filteredEvidenceEntries = sortEvidence(
    ghostEvidenceEntries.filter(ev => ev[1])
  )

  const show =
    (isGhostPossible && isAnyEvidenceSelected) || !isAnyEvidenceSelected

  return (
    <div
      className={clsx(
        'w-[200px] p-2 px-4 m-1 border-gray-300 border rounded-md overflow-hidden transition-all',
        {
          ['opacity-100']: show,
          ['opacity-10']: !show,
        }
      )}
    >
      <div className="font-semibold mb-1">{ghost.name}</div>
      <div className="flex">
        {filteredEvidenceEntries.map(([evidenceKey, status]) => {
          const id = `evidence-${ghost.name}-${evidenceKey}`
          const isRemainingEvidence =
            status && possibleRemainingEvidence.includes(evidenceKey)
          const EvidenceIcon = iconMap[evidenceKey]

          return (
            <div
              key={evidenceKey}
              id={id}
              className={clsx(
                'w-10 mx-1 p-1 border border-transparent transition-all',
                {
                  'rounded border-orange-400':
                    isRemainingEvidence && isAnyEvidenceSelected,
                  'opacity-10': !status,
                  'opacity-100': status,
                }
              )}
            >
              <EvidenceIcon />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default GhostListItem
