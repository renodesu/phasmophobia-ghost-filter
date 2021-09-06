import clsx from 'clsx'
import React from 'react'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
import CheckboxWithLabel from './CheckboxWithLabel'
import { Evidence } from './data'
import { filterState, impossibleRemainingEvidenceState, isAnyFilterActiveState, possibleRemainingEvidenceState } from './state'

const GhostFilter = () => {
  const [filters, setFilters] = useRecoilState(filterState)
  const resetFilters = useResetRecoilState(filterState)
  const possibleRemainingEvidence = useRecoilValue(possibleRemainingEvidenceState)
  const impossibleRemainingEvidence = useRecoilValue(impossibleRemainingEvidenceState)
  const isAnyFilterActive = useRecoilValue(isAnyFilterActiveState)

  const setHasFilters = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked
    if (isChecked) {
      setFilters({ hasFilters: { ...filters.hasFilters, [e.target.value]: isChecked }, notFilters: { ...filters.notFilters, [e.target.value]: !isChecked } })
    } else {
      setFilters({ hasFilters: { ...filters.hasFilters, [e.target.value]: isChecked }, notFilters: filters.notFilters })
    }
  }

  const setNotFilters = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked
    if (isChecked) {
      setFilters({ hasFilters: { ...filters.hasFilters, [e.target.value]: !isChecked }, notFilters: { ...filters.notFilters, [e.target.value]: isChecked } })
    } else {
      setFilters({ hasFilters: filters.hasFilters, notFilters: { ...filters.notFilters, [e.target.value]: isChecked } })
    }
  }

  const hasNodes = Object.entries(filters.hasFilters)
    .map(([name, checked]) => {
      const id = `evidence-confirmed-${name}`
      const isEvidenceImpossible = impossibleRemainingEvidence.includes(name as keyof Evidence)
      const isEvidenceExcluded = filters.notFilters[name as keyof Evidence]

      // TODO: Check the logits of coloring notpossibles
      return (
        <div key={name} className={clsx({ evidenceNotPossible: isEvidenceImpossible && !isEvidenceExcluded })}>
          <CheckboxWithLabel id={id} onChange={setHasFilters} checked={checked} value={name} />
        </div>
      )
    })

  const notNodes = Object.entries(filters.notFilters)
    .map(([name, checked]) => {
      const id = `evidence-excluded-${name}`
      return (
        <div key={name}>
          <CheckboxWithLabel id={id} onChange={setNotFilters} checked={checked} value={name} />
        </div>
      )
    })

  const possibleRemainingEvidenceNode = isAnyFilterActive
    ? possibleRemainingEvidence.map(filter => {
      return (
        <div key={filter}>
          {filter}
        </div>
      )
    })
    : '(All)'

  const impossibleRemainingEvidenceNode = isAnyFilterActive
    ? impossibleRemainingEvidence.map(filter => {
      return (
        <div key={filter}>
          {filter}
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
            <button onClick={resetFilters}>Reset</button>
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
          {hasNodes}
        </div>
        <div className="border">
          <h3>Excluded</h3>
          {notNodes}
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
