import React, { useState } from "react"
import { Evidence, ghosts } from "./Ghost"
import { AnyObject, filterGhost, filterKeysByProp } from "./utils"

type FilterProps = {}

const initialState = {
  emf: false,
  freezingTemp: false,
  spiritBox: false,
  ghostWriting: false,
  ghostOrbs: false,
  fingerPrints: false
}

const pickTrues = (obj: Partial<Evidence>) => {
  const res: Partial<Evidence> = {}
  Object.entries(obj)
    .forEach(([name, status]) => {
      if (status) {
        res[name as keyof Evidence] = status
      }
    })
  return res
}

const Filter = ({ }: FilterProps) => {

  const [hasFilters, setHasFilters] = useState(initialState)
  const [notFilters, setNotFilters] = useState(initialState)

  const setFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasFilters({ ...hasFilters, [e.target.value]: e.target.checked })
  }

  const setFilter2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNotFilters({ ...notFilters, [e.target.value]: e.target.checked })
  }

  const resetFilters = () => {
    setHasFilters(initialState)
    setNotFilters(initialState)
  }
  const possibleGhosts = filterGhost({ ghostOrbs: true })

  const hasNodes = Object.entries(hasFilters)
    .map(([name, checked]) => {
      const id = `evidence-has-${name}`
      return (
        <div key={name}>
          <input type="checkbox" id={id} onChange={setFilter} checked={checked} value={name} />
          <label htmlFor={id}>{name}</label>
        </div>
      )
    })

  const notNodes = Object.entries(notFilters)
    .map(([name, checked]) => {
      const id = `evidence-not-${name}`
      return (
        <div key={name}>
          <input type="checkbox" id={id} onChange={setFilter2} checked={checked} value={name} />
          <label htmlFor={id}>{name}</label>
        </div>
      )
    })

  console.log({ hasFilters, notFilters })
  const activeHasFilters = pickTrues(hasFilters)
  const activeNotFilters = pickTrues(notFilters)
  const invertedNotFilters: Partial<Evidence> = Object.keys(activeNotFilters).reduce((prev, current) => {
    prev[current] = false
    return prev
  }, {} as AnyObject)

  const combinedFilters = {
    ...activeHasFilters,
    ...invertedNotFilters
  }

  console.log('combinedFilters', combinedFilters)
  return (
    <div>
      <div>
        <h3>Has</h3>
        {hasNodes}
      </div>
      <div>
        <h3>Doesn't</h3>
        {notNodes}
      </div>
      <button onClick={resetFilters}>Reset</button>
      <div>
        <h3>Possible ghosts</h3>
        {possibleGhosts}
      </div>
    </div>
  )
}

export default Filter
