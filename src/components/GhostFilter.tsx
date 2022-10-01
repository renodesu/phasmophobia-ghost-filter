import clsx from 'clsx'
import { toArray } from 'fp-ts/lib/Record'
import { AiOutlineStop } from 'react-icons/ai'
import { useRecoilState, useRecoilValue } from 'recoil'

import { EvidenceKey } from '../data/ghostData'
import { evidenceState, impossibleRemainingEvidenceState } from '../utils/state'
import { evidencePrettyNameMap } from '../utils/utils'

import GhostList from './GhostList'
import { iconMap } from './Icon'
import Info from './Info'

const GhostFilter = () => {
  const [evidence, setEvidence] = useRecoilState(evidenceState)

  const impossibleRemainingEvidence = useRecoilValue(
    impossibleRemainingEvidenceState
  )

  const includedEvidence = toArray(evidence.included)

  const setIncludedEvidence = (name: EvidenceKey) => {
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

  const evidenceNodes = includedEvidence.map(([name, checked]) => {
    const id = `evidence-included-${name}`
    const isEvidenceImpossible = impossibleRemainingEvidence.includes(name)
    const EvidenceIcon = iconMap[name]

    return (
      <div
        key={name}
        id={id}
        className={clsx(
          'cursor-pointer border opacity-50 hover:opacity-100 rounded-md p-2 my-1 flex items-center',
          {
            'border-transparent': !checked,
            'border-gray-400': checked,
            show: checked,
          }
        )}
        onClick={() => setIncludedEvidence(name)}
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
  })

  return (
    <div>
      <div className="flex gap-4">
        <div className="w-1/3 flex flex-col gap-4">
          <div className="border border-gray-300 p-4">
            <h3>Confirmed evidence</h3>
            <div className="flex flex-col">{evidenceNodes}</div>
          </div>
          <div className="border border-gray-300 p-4">
            <Info />
          </div>
        </div>
        <div className="w-2/3">
          <div className="border border-gray-300 p-4">
            <h3>Ghosts</h3>
            <GhostList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GhostFilter
