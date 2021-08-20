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

export const ghostList: GhostList = {
  Phantom: {
    emf: true,
    freezingTemp: true,
    spiritBox: false,
    ghostWriting: false,
    ghostOrbs: true,
    fingerPrints: false
  },
  Banshee: {
    emf: true,
    freezingTemp: true,
    spiritBox: false,
    ghostWriting: false,
    ghostOrbs: false,
    fingerPrints: true
  },
  Jinn: {
    emf: true,
    freezingTemp: false,
    spiritBox: true,
    ghostWriting: false,
    ghostOrbs: true,
    fingerPrints: false
  },
  Revenant: {
    emf: true,
    freezingTemp: false,
    spiritBox: false,
    ghostWriting: true,
    ghostOrbs: false,
    fingerPrints: true
  },
  Shade: {
    emf: true,
    freezingTemp: false,
    spiritBox: false,
    ghostWriting: true,
    ghostOrbs: true,
    fingerPrints: false
  },
  Oni: {
    emf: true,
    freezingTemp: false,
    spiritBox: true,
    ghostWriting: true,
    ghostOrbs: false,
    fingerPrints: false
  },
  Wraith: {
    emf: false,
    freezingTemp: true,
    spiritBox: true,
    ghostWriting: false,
    ghostOrbs: false,
    fingerPrints: true
  },
  Mare: {
    emf: false,
    freezingTemp: true,
    spiritBox: true,
    ghostWriting: false,
    ghostOrbs: true,
    fingerPrints: false
  },
  Demon: {
    emf: false,
    freezingTemp: true,
    spiritBox: true,
    ghostWriting: true,
    ghostOrbs: false,
    fingerPrints: false
  },
  Yurei: {
    emf: false,
    freezingTemp: true,
    spiritBox: false,
    ghostWriting: true,
    ghostOrbs: true,
    fingerPrints: false
  },
  Poltergeist: {
    emf: false,
    freezingTemp: false,
    spiritBox: true,
    ghostWriting: false,
    ghostOrbs: true,
    fingerPrints: true
  },
  Spirit: {
    emf: false,
    freezingTemp: false,
    spiritBox: true,
    ghostWriting: true,
    ghostOrbs: false,
    fingerPrints: true
  },
  Hantu: {
    emf: false,
    freezingTemp: false,
    spiritBox: false,
    ghostWriting: true,
    ghostOrbs: true,
    fingerPrints: true
  }
}
