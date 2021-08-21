import React from "react"
import { Evidence } from "./data"

type GhostProps = {
  name: string
  evidence: Evidence
}

const Ghost = ({ name, evidence }: GhostProps) => {
  return (
    <div className="ghost">
      <h3>{name}</h3>
      {Object.entries(evidence).map(([evName, status]) => {
        const id = `${name}-${evName}`
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
