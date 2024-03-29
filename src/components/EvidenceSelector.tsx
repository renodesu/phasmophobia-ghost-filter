import clsx from 'clsx'
import { AiOutlineStop } from 'react-icons/ai'
import { useRecoilState, useRecoilValue } from 'recoil'

import { evidenceList } from '../data/ghostData'
import {
  impossibleRemainingEvidenceState,
  selectedEvidenceState,
} from '../utils/state'
import { evidenceMap, sortEvidence } from '../utils/utils'

import { iconMap } from './Icon'

import type { Evidence} from '../data/ghostData'

const EvidenceSelector = () => {
  const [selectedEvidence, setSelectedEvidence] = useRecoilState(
    selectedEvidenceState
  )
  const impossibleRemainingEvidence = useRecoilValue(
    impossibleRemainingEvidenceState
  )
  const sortedEvidenceList = sortEvidence(evidenceList)

  const toggleEvidence = (evidence: Evidence) => {
    if (selectedEvidence.includes(evidence)) {
      setSelectedEvidence(selectedEvidence.filter(ev => ev !== evidence))
    } else {
      setSelectedEvidence([...selectedEvidence, evidence])
    }
  }

  return (
    <div className="flex flex-col gap-1">
      {sortedEvidenceList.map(ev => {
        const id = `evidence-selected-${ev}`
        const isEvidenceImpossible = impossibleRemainingEvidence.includes(ev)
        const EvidenceIcon = iconMap[ev]
        const isSelected = selectedEvidence.includes(ev)

        return (
          <div
            key={ev}
            id={id}
            className={clsx(
              'cursor-pointer border hover:opacity-100 rounded-md p-2 flex items-center select-none gap-4',
              {
                'border-transparent opacity-80': !isSelected,
                'border-gray-400 opacity-100': isSelected,
              }
            )}
            onClick={() => toggleEvidence(ev)}
          >
            <EvidenceIcon className="h-10" />
            <div className="flex-grow">{evidenceMap[ev]}</div>
            <AiOutlineStop
              className={clsx('w-8 h-8 transition-all', {
                'opacity-100': isEvidenceImpossible,
                'opacity-0': !isEvidenceImpossible,
              })}
            />
          </div>
        )
      })}
    </div>
  )
}

export default EvidenceSelector
