import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import CheckboxWithLabel from './CheckboxWithLabel'
import { filterState, impossibleRemainingEvidenceState, initialFilterState, isAnyFilterActiveState, possibleRemainingEvidenceState } from './state'

const GhostFilter = () => {
  const [filters, setFilters] = useRecoilState(filterState)
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

  const resetFilters = () => setFilters(initialFilterState)

  const hasNodes = Object.entries(filters.hasFilters)
    .map(([name, checked]) => {
      const id = `evidence-confirmed-${name}`
      return (
        <div key={name}>
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
    : '(All)'

  return (
    <div className="filter">
      <div className="help">
        <h3>Usage</h3>
        <p>Use confirmed evidence to narrow down the ghost type.</p>
        <p>Use excluded evidence to further filter the ghost type if you sure it can't be some specific evidence.</p>
        <p>
          <span className="greenBg">Green</span> highlight means that evidence is missing to identify that specific ghost.
        </p>
      </div>
      <div className="columns">
        <div className="border">
          <h3>Confirmed evidence</h3>
          {hasNodes}
        </div>
        <div className="border">
          <h3>Excluded evidence</h3>
          {notNodes}
        </div>
        <div>
          <h3>Possible remaining evidence</h3>
          {possibleRemainingEvidenceNode}
        </div>
        <div>
          <h3>Impossible remaining evidence</h3>
          {impossibleRemainingEvidenceNode}
        </div>
        <div>
          <button onClick={resetFilters}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default GhostFilter
