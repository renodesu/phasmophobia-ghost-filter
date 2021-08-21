import React, { useState } from "react"
import { Evidence } from "./data"
import { AnyObject, filterGhost, pickTrues } from "./utils"

type FilterState = {
  hasFilters: Evidence
  notFilters: Evidence
}

const initialState: FilterState = {
  hasFilters: {
    emf: false,
    freezingTemp: false,
    spiritBox: false,
    ghostWriting: false,
    ghostOrbs: false,
    fingerPrints: false
  },
  notFilters: {
    emf: false,
    freezingTemp: false,
    spiritBox: false,
    ghostWriting: false,
    ghostOrbs: false,
    fingerPrints: false
  }
}

const GhostFilter = () => {

  const [filters, setFilters] = useState<FilterState>(initialState)

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

  const resetFilters = () => {
    setFilters(initialState)
  }

  const hasNodes = Object.entries(filters.hasFilters)
    .map(([name, checked]) => {
      const id = `evidence-has-${name}`
      return (
        <div key={name}>
          <input type="checkbox" id={id} onChange={setHasFilters} checked={checked} value={name} />
          <label htmlFor={id}>{name}</label>
        </div>
      )
    })

  const notNodes = Object.entries(filters.notFilters)
    .map(([name, checked]) => {
      const id = `evidence-not-${name}`
      return (
        <div key={name}>
          <input type="checkbox" id={id} onChange={setNotFilters} checked={checked} value={name} />
          <label htmlFor={id}>{name}</label>
        </div>
      )
    })

  const activeHasFilters = pickTrues(filters.hasFilters)
  const activeNotFilters = pickTrues(filters.notFilters)
  const invertedNotFilters: Partial<Evidence> = Object.keys(activeNotFilters)
    .reduce((prev, curr) => {
      prev[curr] = false
      return prev
    }, {} as AnyObject)

  const combinedFilters = {
    ...activeHasFilters,
    ...invertedNotFilters
  }

  const possibleGhosts = filterGhost(combinedFilters)
    .map(([name, evidence]) => {
      return (
        <div key={name}>
          <p>{name}</p>
        </div>
      )
    })

  return (
    <div className="filter">
      <div>
        <h3>Confirmed evidence</h3>
        {hasNodes}
      </div>
      <div>
        <h3>Excluded evidence</h3>
        {notNodes}
      </div>
      <div>
        <button onClick={resetFilters}>Reset</button>
      </div>
      <div>
        <h3>Possible ghosts</h3>
        {possibleGhosts}
      </div>
      <div>
        <h3>Usage</h3>
        <p>Use confirmed evidence to narrow down the ghost type.</p>
        <p>Use excluded evidence further filter the ghost type if you sure it can't be some specific evidence</p>
      </div>
    </div>
  )
}

export default GhostFilter
