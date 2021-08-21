import React from "react"
import { GhostEntry } from "./data"

type GhostProps = {
  ghost: GhostEntry
}

const Ghost = ({ ghost }: GhostProps) => {
  return (
    <div className="ghost">
      <h3>{ghost.name}</h3>
      {Object.entries(ghost.evidence).map(([evName, status]) => {
        const id = `${ghost.name}-${evName}`
        return (
          <div key={evName}>
            <input type="checkbox" id={id} checked={status} readOnly />
            <label htmlFor={id}>{evName}</label>
          </div>
        )
      })}
    </div>
  )
}

export default Ghost
