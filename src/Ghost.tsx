import React from "react"

type GhostProps = {
  name: string
  evidence: Evidence
}

const Ghost = ({ name, evidence }: GhostProps) => {

  return (
    <div>
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


export type Evidence = {
  emf: boolean
  freezingTemp: boolean
  spiritBox: boolean
  ghostWriting: boolean
  ghostOrbs: boolean
  fingerPrints: boolean
}

type GhostList = Record<string, Evidence>

export const ghosts: GhostList = {
  phantom: {
    emf: true,
    freezingTemp: true,
    spiritBox: false,
    ghostWriting: false,
    ghostOrbs: true,
    fingerPrints: false
  },
  banshee: {
    emf: true,
    freezingTemp: true,
    spiritBox: false,
    ghostWriting: false,
    ghostOrbs: false,
    fingerPrints: true
  },
  jinn: {
    emf: true,
    freezingTemp: false,
    spiritBox: true,
    ghostWriting: false,
    ghostOrbs: true,
    fingerPrints: false
  },
  revenant: {
    emf: true,
    freezingTemp: false,
    spiritBox: false,
    ghostWriting: true,
    ghostOrbs: false,
    fingerPrints: true
  },
  shade: {
    emf: true,
    freezingTemp: false,
    spiritBox: false,
    ghostWriting: true,
    ghostOrbs: true,
    fingerPrints: false
  },
  oni: {
    emf: true,
    freezingTemp: false,
    spiritBox: true,
    ghostWriting: true,
    ghostOrbs: false,
    fingerPrints: false
  },
  wraith: {
    emf: false,
    freezingTemp: true,
    spiritBox: true,
    ghostWriting: false,
    ghostOrbs: false,
    fingerPrints: true
  },
  mare: {
    emf: false,
    freezingTemp: true,
    spiritBox: true,
    ghostWriting: false,
    ghostOrbs: true,
    fingerPrints: false
  },
  demon: {
    emf: false,
    freezingTemp: true,
    spiritBox: true,
    ghostWriting: true,
    ghostOrbs: false,
    fingerPrints: false
  },
  yurei: {
    emf: false,
    freezingTemp: true,
    spiritBox: false,
    ghostWriting: true,
    ghostOrbs: true,
    fingerPrints: false
  },
  poltergeist: {
    emf: false,
    freezingTemp: false,
    spiritBox: true,
    ghostWriting: false,
    ghostOrbs: true,
    fingerPrints: true
  },
  spirit: {
    emf: false,
    freezingTemp: false,
    spiritBox: true,
    ghostWriting: true,
    ghostOrbs: false,
    fingerPrints: true
  },
  hantu: {
    emf: false,
    freezingTemp: false,
    spiritBox: false,
    ghostWriting: true,
    ghostOrbs: true,
    fingerPrints: true
  }
}
