import clsx from 'clsx'
import { AiOutlineStop } from 'react-icons/ai'
import { useRecoilState, useRecoilValue } from 'recoil'

import { EvidenceKey } from '../data/ghostData'
import {
  evidenceState,
  impossibleRemainingEvidenceState,
  isAnyEvidenceSelectedState,
  possibleRemainingEvidenceState,
} from '../utils/state'
import { evidencePrettyNameMap } from '../utils/utils'

import GhostList from './GhostList'
import { iconMap } from './Icon'

const GhostFilter = () => {
  const [evidence, setEvidence] = useRecoilState(evidenceState)
  const possibleRemainingEvidence = useRecoilValue(
    possibleRemainingEvidenceState
  )
  const impossibleRemainingEvidence = useRecoilValue(
    impossibleRemainingEvidenceState
  )
  const isAnyEvidenceSelected = useRecoilValue(isAnyEvidenceSelectedState)

  const includedEvidence = Object.entries(evidence.included) as [
    EvidenceKey,
    boolean
  ][]
  const excludedEvidence = Object.entries(evidence.excluded) as [
    EvidenceKey,
    boolean
  ][]

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

  const setExcludedEvidence = (name: EvidenceKey) => {
    const currentValue = evidence.excluded[name]
    const targetValue = !currentValue

    if (targetValue) {
      setEvidence({
        included: { ...evidence.included, [name]: currentValue },
        excluded: { ...evidence.excluded, [name]: !currentValue },
      })
    } else {
      setEvidence({
        included: evidence.included,
        excluded: { ...evidence.excluded, [name]: !currentValue },
      })
    }
  }

  const includedNodes = includedEvidence.map(([name, checked]) => {
    const id = `evidence-included-${name}`
    const isEvidenceImpossible = impossibleRemainingEvidence.includes(name)
    // const isEvidenceExcluded = evidence.excluded[name]

    const Icon = iconMap[name]

    // TODO: Check the logic of coloring notPossibles
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
        <Icon className="h-10 mr-4" />
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

  const excludedNodes = excludedEvidence.map(([name, checked]) => {
    const id = `evidence-excluded-${name}`
    const Icon = iconMap[name]

    return (
      <div
        key={name}
        id={id}
        onClick={() => setExcludedEvidence(name)}
        className={clsx(
          'cursor-pointer border opacity-50 hover:opacity-100 rounded p-1 w-12 h-12 mx-1',
          {
            'border-transparent': !checked,
            'border-gray-400': checked,
            show: checked,
          }
        )}
      >
        <Icon />
      </div>
    )
  })

  const possibleRemainingEvidenceNode = isAnyEvidenceSelected
    ? possibleRemainingEvidence.map(evidenceKey => {
        const Icon = iconMap[evidenceKey]
        return (
          <div
            key={evidenceKey}
            className="cursor-pointer border border-transparent rounded p-1 w-12 h-12 mx-1"
          >
            <Icon />
          </div>
        )
      })
    : '(All)'

  const impossibleRemainingEvidenceNode = isAnyEvidenceSelected
    ? impossibleRemainingEvidence.map(evidenceKey => {
        const Icon = iconMap[evidenceKey]
        return (
          <div
            key={evidenceKey}
            className="cursor-pointer border border-transparent rounded p-1 w-12 h-12 mx-1"
          >
            <Icon />
          </div>
        )
      })
    : '(None)'

  return (
    <div>
      {/* <div className={styles.help}>
        <div>
          <p>Use confirmed evidence to narrow down the ghost type.</p>
          <p>
            Use excluded evidence to further filter the ghost type if you're
            sure it can't be some specific evidence.
          </p>
          <p>
            <span className="text-orange-400">Gold</span> highlight means that
            evidence is missing to identify that specific ghost.
          </p>
        </div>
        <div>
          <div>
            <button
              className="p-4 px-8 border border-gray-400 rounded text-xl uppercase font-bold"
              onClick={resetEvidence}
            >
              Reset (ESC)
            </button>
          </div>
        </div>
      </div> */}
      <div className="flex gap-4">
        <div className="w-1/3 flex flex-col gap-4">
          <div className="border border-gray-300 p-4">
            <h3>Confirmed evidence</h3>
            <div className="flex flex-col">{includedNodes}</div>
          </div>

          <div className="border border-gray-300 p-4">
            <h2 className="font-semibold mb-2">Help</h2>
            <div className="flex items-center my-2">
              <AiOutlineStop className={clsx('w-8 h-8 mr-2')} />
              means evidence is impossible.
            </div>
            <div className="my-2">
              <span className="border border-orange-400 rounded p-1 mr-1">
                Border
              </span>
              means that evidence is missing.
            </div>
          </div>
        </div>
        <div className="w-2/3">
          <div className="border border-gray-300 p-4">
            <h3>Ghosts</h3>
            <GhostList />
          </div>
        </div>
        {/* <div className="border border-gray-300 p-4">
          <h3>Possible remaining</h3>
          <div className="flex justify-center h-10">
            {possibleRemainingEvidenceNode}
          </div>
        </div> */}
        {/* <div className="border border-gray-300 p-4">
          <h3>Impossible remaining</h3>
          <div className="flex justify-center h-10">
            {impossibleRemainingEvidenceNode}
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default GhostFilter
