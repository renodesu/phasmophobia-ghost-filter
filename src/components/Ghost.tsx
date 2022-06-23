import clsx from 'clsx'
import { useRecoilValue } from 'recoil'

import { EvidenceKey, GhostData } from '../data/ghostData'
import {
  isAnyEvidenceSelectedState,
  possibleGhostsState,
  possibleRemainingEvidenceState,
} from '../utils/state'

import styles from './Ghost.module.scss'
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
  const evidenceEntries = Object.entries(ghost.evidence) as [
    EvidenceKey,
    boolean
  ][]

  return (
    <div
      className={clsx(
        styles.ghost,
        'w-auto p-2 px-4 m-1 opacity-10 border-gray-300 border rounded',
        {
          [styles.show]:
            (isGhostPossible && isAnyEvidenceSelected) ||
            !isAnyEvidenceSelected,
        }
      )}
    >
      <div className="text-xl mb-1">{ghost.name}</div>
      <div className="flex">
        {evidenceEntries.map(([evidenceKey, status]) => {
          const id = `evidence-${ghost.name}-${evidenceKey}`
          const isRemainingEvidence =
            status && possibleRemainingEvidence.includes(evidenceKey)
          const isFakeEvidence = ghost.fakeEvidence?.includes(evidenceKey)
          const Comp = iconMap[evidenceKey]

          return (
            <div
              key={evidenceKey}
              id={id}
              className={clsx('w-10 mx-1 p-1 border border-transparent', {
                [styles.isRemainingFilter]:
                  isRemainingEvidence && isAnyEvidenceSelected,
                [styles.isFakeEvidence]: isFakeEvidence,
                'opacity-10': !status,
                'opacity-100': status,
              })}
            >
              <Comp />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Ghost
