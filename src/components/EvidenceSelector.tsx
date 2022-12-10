import clsx from 'clsx'
import { AiOutlineStop } from 'react-icons/ai'
import { useRecoilState, useRecoilValue } from 'recoil'

import { Evidence, evidenceList } from '../data/ghostData'
import { evidenceState, impossibleRemainingEvidenceState } from '../utils/state'
import { evidenceMap } from '../utils/utils'

import { iconMap } from './Icon'

const EvidenceSelector = () => {
  const [selectedEvidence, setSelectedEvidence] = useRecoilState(evidenceState)
  const impossibleRemainingEvidence = useRecoilValue(
    impossibleRemainingEvidenceState
  )

  // const evidenceList = sortEvidence(toArray(evidence.included))

  const toggleEvidence = (evidence: Evidence) => {
    if (selectedEvidence.includes(evidence)) {
      setSelectedEvidence(selectedEvidence.filter(ev => ev !== evidence))
    } else {
      setSelectedEvidence([...selectedEvidence, evidence])
    }
  }

  return (
    <div className="flex flex-col gap-1">
      {evidenceList.map(ev => {
        const id = `evidence-included-${ev}`
        const isEvidenceImpossible = impossibleRemainingEvidence.includes(ev)
        const EvidenceIcon = iconMap[ev]
        const isSelected = selectedEvidence.includes(ev)

        return (
          <div
            key={ev}
            id={id}
            className={clsx(
              'cursor-pointer border hover:opacity-100 rounded-md p-2 flex items-center',
              {
                'border-transparent opacity-80': !isSelected,
                'border-gray-400 opacity-100': isSelected,
              }
            )}
            onClick={() => toggleEvidence(ev)}
          >
            <EvidenceIcon className="h-10 mr-4" />
            {evidenceMap[ev]}
            <div className="ml-auto">
              <AiOutlineStop
                className={clsx('w-8 h-8 transition-all', {
                  'opacity-100': isEvidenceImpossible,
                  'opacity-0': !isEvidenceImpossible,
                })}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default EvidenceSelector
