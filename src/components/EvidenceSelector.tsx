import clsx from 'clsx'
import { toArray } from 'fp-ts/lib/Record'
import { AiOutlineStop } from 'react-icons/ai'
import { useRecoilState, useRecoilValue } from 'recoil'

import { Evidence } from '../data/ghostData'
import { evidenceState, impossibleRemainingEvidenceState } from '../utils/state'
import { evidencePrettyNameMap, sortEvidence } from '../utils/utils'

import { iconMap } from './Icon'

const EvidenceSelector = () => {
  const [evidence, setEvidence] = useRecoilState(evidenceState)
  const impossibleRemainingEvidence = useRecoilValue(
    impossibleRemainingEvidenceState
  )

  const evidenceList = sortEvidence(toArray(evidence.included))

  const setConfirmedEvidence = (name: Evidence) => {
    const currentValue = evidence.included[name]
    const targetValue = !currentValue

    if (targetValue) {
      setEvidence({
        included: { ...evidence.included, [name]: !currentValue },
        excluded: { ...evidence.excluded, [name]: currentValue },
      })
    } else {
      setEvidence({
        included: { ...evidence.included, [name]: !currentValue },
        excluded: evidence.excluded,
      })
    }
  }

  return (
    <div>
      {evidenceList.map(([name, checked]) => {
        const id = `evidence-included-${name}`
        const isEvidenceImpossible = impossibleRemainingEvidence.includes(name)
        const EvidenceIcon = iconMap[name]

        return (
          <div
            key={name}
            id={id}
            className={clsx(
              'cursor-pointer border hover:opacity-100 rounded-md p-2 my-1 flex items-center',
              {
                'border-transparent opacity-80': !checked,
                'border-gray-400 opacity-100': checked,
              }
            )}
            onClick={() => setConfirmedEvidence(name)}
          >
            <EvidenceIcon className="h-10 mr-4" />
            {evidencePrettyNameMap[name]}
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
