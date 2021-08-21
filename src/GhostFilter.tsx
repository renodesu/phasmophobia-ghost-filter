import React, { useState } from "react"
import { useRecoilState } from "recoil"
import { Evidence } from "./data"
import { filterState, initialState } from "./state"
import { AnyObject, filterGhost, pickTrues } from "./utils"

const GhostFilter = () => {
  const [filters, setFilters] = useRecoilState(filterState)

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

  const resetFilters = () => setFilters(initialState)

  const hasNodes = Object.entries(filters.hasFilters)
    .map(([name, checked]) => {
      const id = `evidence-confirmed-${name}`
      return (
        <div key={name}>
          <input type="checkbox" id={id} onChange={setHasFilters} checked={checked} value={name} />
          <label htmlFor={id}>{name}</label>
        </div>
      )
    })

  const notNodes = Object.entries(filters.notFilters)
    .map(([name, checked]) => {
      const id = `evidence-excluded-${name}`
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
    .map(ghost => {
      return (
        <div key={ghost.name}>
          <p>{ghost.name}</p>
        </div>
      )
    })

  return (
    <div className="filter">
      <div className="help">
        <h3>Usage</h3>
        <p>Use confirmed evidence to narrow down the ghost type.</p>
        <p>Use excluded evidence to further filter the ghost type if you sure it can't be some specific evidence.</p>
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
          <button onClick={resetFilters}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default GhostFilter
