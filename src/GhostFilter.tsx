import React from 'react'
import { useRecoilState } from 'recoil'
import CheckboxWithLabel from './CheckboxWithLabel'
import { filterState, initialFilterState } from './state'

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
