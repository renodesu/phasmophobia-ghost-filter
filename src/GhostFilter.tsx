import clsx from 'clsx'
import React from 'react'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
import CheckboxWithLabel from './CheckboxWithLabel'
import { Evidence } from './ghostData'
import { evidenceState, impossibleRemainingEvidenceState, isAnyEvidenceSelectedState, possibleRemainingEvidenceState } from './state'

const GhostFilter = () => {
  const [evidence, setEvidence] = useRecoilState(evidenceState)
  const resetEvidence = useResetRecoilState(evidenceState)
  const possibleRemainingEvidence = useRecoilValue(possibleRemainingEvidenceState)
  const impossibleRemainingEvidence = useRecoilValue(impossibleRemainingEvidenceState)
  const isAnyFilterActive = useRecoilValue(isAnyEvidenceSelectedState)

  const setIncludedEvidence = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked
    if (isChecked) {
      setEvidence({ included: { ...evidence.included, [e.target.value]: isChecked }, excluded: { ...evidence.excluded, [e.target.value]: !isChecked } })
    } else {
      setEvidence({ included: { ...evidence.included, [e.target.value]: isChecked }, excluded: evidence.excluded })
    }
  }

  const setExcludedEvidence = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked
    if (isChecked) {
      setEvidence({ included: { ...evidence.included, [e.target.value]: !isChecked }, excluded: { ...evidence.excluded, [e.target.value]: isChecked } })
    } else {
      setEvidence({ included: evidence.included, excluded: { ...evidence.excluded, [e.target.value]: isChecked } })
    }
  }

  const includedNodes = Object.entries(evidence.included)
    .map(([name, checked]) => {
      const id = `evidence-confirmed-${name}`
      const isEvidenceImpossible = impossibleRemainingEvidence.includes(name as keyof Evidence)
      const isEvidenceExcluded = evidence.excluded[name as keyof Evidence]

      // TODO: Check the logits of coloring notpossibles
      return (
        <div key={name} className={clsx({ evidenceNotPossible: isEvidenceImpossible && !isEvidenceExcluded })}>
          <CheckboxWithLabel id={id} onChange={setIncludedEvidence} checked={checked} value={name} />
        </div>
      )
    })

  const excludedNodes = Object.entries(evidence.excluded)
    .map(([name, checked]) => {
      const id = `evidence-excluded-${name}`
      return (
        <div key={name}>
          <CheckboxWithLabel id={id} onChange={setExcludedEvidence} checked={checked} value={name} />
        </div>
      )
    })

  const possibleRemainingEvidenceNode = isAnyFilterActive
    ? possibleRemainingEvidence.map(evidenceKey => {
      return (
        <div key={evidenceKey}>
          {evidenceKey}
        </div>
      )
    })
    : '(All)'

  const impossibleRemainingEvidenceNode = isAnyFilterActive
    ? impossibleRemainingEvidence.map(evidenceKey => {
      return (
        <div key={evidenceKey}>
          {evidenceKey}
        </div>
      )
    })
    : '(None)'

  return (
    <div className="filter">
      <div className="help">
        <div>
          <h3>Usage</h3>
          <p>Use confirmed evidence to narrow down the ghost type.</p>
          <p>Use excluded evidence to further filter the ghost type if you sure it can't be some specific evidence.</p>
          <p>
            <span className="greenBg">Green</span> highlight means that evidence is missing to identify that specific ghost.
          </p>
          {/* <p>
          <span className="redBg">Red</span> highlight means that evidence isn't possible (invalid evidence combination {'->'} no Ghost found).
        </p> */}

        </div>
        <div>
          <div style={{ textAlign: 'center' }}>
            <button onClick={resetEvidence}>Reset</button>
          </div>
        </div>
      </div>
      <div className="columns">
        <div>
          <h3>Possible remaining</h3>
          {possibleRemainingEvidenceNode}
        </div>
        <div className="border">
          <h3>Confirmed</h3>
          {includedNodes}
        </div>
        <div className="border">
          <h3>Excluded</h3>
          {excludedNodes}
        </div>
        <div>
          <h3>Impossible remaining</h3>
          {impossibleRemainingEvidenceNode}
        </div>
      </div>
    </div>
  )
}

export default GhostFilter
