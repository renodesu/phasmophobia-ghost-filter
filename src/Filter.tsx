import React, { useState } from "react"
import { Evidence, ghostList } from "./Ghost"
import { AnyObject, filterGhost, filterKeysByProp } from "./utils"

type FilterProps = {}

const initialState = {
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

const pickTrues = (source: Partial<Evidence>) => {
  const res: Partial<Evidence> = {}
  Object.entries(source)
    .forEach(([name, status]) => {
      if (status) {
        res[name as keyof Evidence] = status
      }
    })
  return res
}

const GhostFilter = ({ }: FilterProps) => {

  const [filters, setFilters] = useState(initialState)

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
    .reduce((prev, current) => {
      prev[current] = false
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
        <h3>Confirmed NOT evidence</h3>
        {notNodes}
      </div>
      <div>
        <button onClick={resetFilters}>Reset</button>
      </div>
      <div>
        <h3>Possible ghosts</h3>
        {possibleGhosts}
      </div>
    </div>
  )
}

export default GhostFilter
