import clsx from 'clsx'
import { useRecoilValue } from 'recoil'

import {
  isAnyEvidenceSelectedState,
  possibleGhostsState,
  possibleRemainingEvidenceState,
} from '../utils/state'
import { evidencePrettyName, sortEvidence } from '../utils/utils'

import { EvidenceIcon } from './Icon'

import type { Ghost } from '../data/ghostData'
import type { FC } from 'react'

const List: FC<{ items: string[] }> = ({ items }) => {
  return (
    <div className="text-sm my-1">
      {items.map(str => (
        <div key={str} className="list-item list-inside list-disc ml-2">
          {str}
        </div>
      ))}
    </div>
  )
}

const GhostListItem: FC<{
  ghost: Ghost
}> = ({ ghost }) => {
  const possibleGhosts = useRecoilValue(possibleGhostsState)
  const possibleRemainingEvidence = useRecoilValue(
    possibleRemainingEvidenceState
  )
  const isAnyEvidenceSelected = useRecoilValue(isAnyEvidenceSelectedState)
  const isGhostPossible = possibleGhosts.includes(ghost)
  const ghostEvidenceEntries = ghost.evidence

  const show =
    (isGhostPossible && isAnyEvidenceSelected) || !isAnyEvidenceSelected

  const sortedEvidence = sortEvidence(ghostEvidenceEntries)

  return (
    <div
      className={clsx(
        'w-[200px] p-2 px-4 border-gray-300 border rounded-md transition-all relative group cursor-help',
        {
          ['opacity-100']: show,
          ['opacity-10']: !show,
        }
      )}
    >
      <div className="font-semibold mb-1">{ghost.name}</div>
      <div className="hidden group-hover:block absolute bg-black p-4 z-50 rounded w-max right-[calc(100%+10px)] top-[calc(-50%)] xborder-2 border-white shadow-[-2px_4px_10px_5px_rgba(255,255,255,0.3)]">
        <div>
          <h2 className="font-semibold">Strengths</h2>
          <List items={ghost.strengths} />
          <h2 className="font-semibold">Weaknesses</h2>
          <List items={ghost.weaknesses} />
        </div>
      </div>
      <div className="flex justify-evenly">
        {sortedEvidence.map(evidence => {
          const id = `evidence-${ghost.name}-${evidence}`

          const isRemainingEvidence =
            possibleRemainingEvidence.includes(evidence)

          return (
            <div
              key={evidence}
              id={id}
              title={evidencePrettyName(evidence)}
              className={clsx(
                'w-10 h-10 p-1 border border-transparent transition-all flex',
                {
                  'rounded border-orange-400':
                    isRemainingEvidence && isAnyEvidenceSelected,
                }
              )}
            >
              <EvidenceIcon evidence={evidence} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default GhostListItem
