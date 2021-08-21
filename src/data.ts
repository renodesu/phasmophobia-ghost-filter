export type Evidence = {
  emf: boolean
  freezingTemp: boolean
  spiritBox: boolean
  ghostWriting: boolean
  ghostOrbs: boolean
  fingerPrints: boolean
}

type GhostList = Record<string, Evidence>

export const ghostData: GhostList = {
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
