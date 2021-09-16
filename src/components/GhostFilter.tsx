import clsx from 'clsx'
import React from 'react'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
import { Evidence } from '../data/ghostData'
import { evidenceState, impossibleRemainingEvidenceState, isAnyEvidenceSelectedState, possibleRemainingEvidenceState } from '../utils/state'
import { evidencePrettyName } from '../utils/utils'
import styles from '../styles/GhostFilter.module.scss'
import LabelWithCB from './LabelWithCB'

const GhostFilter = () => {
  const [evidence, setEvidence] = useRecoilState(evidenceState)
  const resetEvidence = useResetRecoilState(evidenceState)
  const possibleRemainingEvidence = useRecoilValue(possibleRemainingEvidenceState)
  const impossibleRemainingEvidence = useRecoilValue(impossibleRemainingEvidenceState)
  const isAnyEvidenceSelected = useRecoilValue(isAnyEvidenceSelectedState)

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
      const id = `evidence-included-${name}`
      const isEvidenceImpossible = impossibleRemainingEvidence.includes(name as keyof Evidence)
      const isEvidenceExcluded = evidence.excluded[name as keyof Evidence]

      // TODO: Check the logic of coloring notpossibles
      return (
        <div key={name} className={clsx({ evidenceNotPossible: isEvidenceImpossible && !isEvidenceExcluded })}>
          <LabelWithCB id={id} onChange={setIncludedEvidence} checked={checked} text={evidencePrettyName(name)} value={name} />
        </div>
      )
    })

  const excludedNodes = Object.entries(evidence.excluded)
    .map(([name, checked]) => {
      const id = `evidence-excluded-${name}`
      return (
        <div key={name}>
          <LabelWithCB id={id} onChange={setExcludedEvidence} checked={checked} text={evidencePrettyName(name)} value={name} />
        </div>
      )
    })

  const possibleRemainingEvidenceNode = isAnyEvidenceSelected
    ? possibleRemainingEvidence.map(evidenceKey => {
      return (
        <div key={evidenceKey}>
          {evidencePrettyName(evidenceKey)}
        </div>
      )
    })
    : '(All)'

  const impossibleRemainingEvidenceNode = isAnyEvidenceSelected
    ? impossibleRemainingEvidence.map(evidenceKey => {
      return (
        <div key={evidenceKey}>
          {evidencePrettyName(evidenceKey)}
        </div>
      )
    })
    : '(None)'

  return (
    <div className={styles.ghostFilter}>
      <div className={styles.help}>
        <div>
          <h3>Usage</h3>
          <p>Use confirmed evidence to narrow down the ghost type.</p>
          <p>Use excluded evidence to further filter the ghost type if you sure it can't be some specific evidence.</p>
          <p>
            <span className={styles.greenBg}>Green</span> highlight means that evidence is missing to identify that specific ghost.
          </p>
        </div>
        <div>
          <div className={styles.center}>
            <button onClick={resetEvidence}>Reset</button>
          </div>
        </div>
      </div>
      <div className={styles.columns}>
        <div>
          <h3>Possible remaining</h3>
          {possibleRemainingEvidenceNode}
        </div>
        <div className={styles.border}>
          <h3>Confirmed</h3>
          {includedNodes}
        </div>
        <div className={styles.border}>
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
