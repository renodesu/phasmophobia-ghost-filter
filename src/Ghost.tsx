import clsx from "clsx"
import React from "react"
import { GhostData } from "./data"

type GhostProps = {
  ghost: GhostData
  isPossible: boolean
}

const Ghost = ({ ghost, isPossible }: GhostProps) => {
  return (
    <div className={clsx('ghost', { show: isPossible })}>
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
