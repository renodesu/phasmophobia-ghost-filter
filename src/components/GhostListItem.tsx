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

const List: FC<{ items: string[] }> = ({ items }) => {
  return (
    <div className="text-sm my-1">
      {items.map(str => {
        return (
          <div key={str} className="list-item list-inside list-disc ml-2">
            {str}
          </div>
        )
      })}
    </div>
  )
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
          <h2 className="font-semibold">Strenghts</h2>
          <div>
            <List items={ghost.strenghts} />
          </div>
          <h2 className="font-semibold">Weaknessses</h2>
          <div>
            <List items={ghost.weaknesses} />
          </div>
        </div>
      </div>
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
