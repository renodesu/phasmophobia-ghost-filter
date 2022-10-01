import clsx from 'clsx'
import { toArray } from 'fp-ts/lib/Record'
import { useRecoilValue } from 'recoil'

import { EvidenceKey, GhostData } from '../data/ghostData'
import {
  isAnyEvidenceSelectedState,
  possibleGhostsState,
  possibleRemainingEvidenceState,
} from '../utils/state'

import {
  DOTS,
  EMF,
  Fingerprints,
  FreezingTemp,
  GhostOrbs,
  GhostWriting,
  SpiritBox,
} from './Icon'

type GhostProps = {
  ghost: GhostData
}

const iconMap: Record<
  EvidenceKey,
  React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined
    }
  >
> = {
  emf: EMF,
  spiritBox: SpiritBox,
  fingerPrints: Fingerprints,
  ghostOrbs: GhostOrbs,
  ghostWriting: GhostWriting,
  freezingTemp: FreezingTemp,
  DOTS: DOTS,
}

const Ghost = ({ ghost }: GhostProps) => {
  const possibleGhosts = useRecoilValue(possibleGhostsState)
  const possibleRemainingEvidence = useRecoilValue(
    possibleRemainingEvidenceState
  )
  const isAnyEvidenceSelected = useRecoilValue(isAnyEvidenceSelectedState)
  const isGhostPossible = possibleGhosts.includes(ghost)
  const ghostEvidenceEntries = toArray(ghost.evidence)

  const filteredEvidenceEntries = ghostEvidenceEntries.filter(ev => ev[1])

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
          // const isFakeEvidence = ghost.fakeEvidence?.includes(evidenceKey)
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

export default Ghost
