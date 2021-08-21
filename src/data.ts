export type Evidence = {
  emf: boolean
  freezingTemp: boolean
  spiritBox: boolean
  ghostWriting: boolean
  ghostOrbs: boolean
  fingerPrints: boolean
}

export type GhostEntry = {
  name: string
  evidence: Evidence
  description?: string
}

export const ghostData: GhostEntry[] = [
  {
    name: 'Phantom',
    evidence: {
      emf: true,
      freezingTemp: true,
      spiritBox: false,
      ghostWriting: false,
      ghostOrbs: true,
      fingerPrints: false
    }
  },
  {
    name: 'Banshee',
    evidence: {
      emf: true,
      freezingTemp: true,
      spiritBox: false,
      ghostWriting: false,
      ghostOrbs: false,
      fingerPrints: true
    }
  },
  {
    name: 'Jinn',
    evidence: {
      emf: true,
      freezingTemp: false,
      spiritBox: true,
      ghostWriting: false,
      ghostOrbs: true,
      fingerPrints: false
    }
  },
  {
    name: 'Revenant',
    evidence: {
      emf: true,
      freezingTemp: false,
      spiritBox: false,
      ghostWriting: true,
      ghostOrbs: false,
      fingerPrints: true
    }
  },
  {
    name: 'Shade',
    evidence: {
      emf: true,
      freezingTemp: false,
      spiritBox: false,
      ghostWriting: true,
      ghostOrbs: true,
      fingerPrints: false
    }
  },
  {
    name: 'Oni',
    evidence: {
      emf: true,
      freezingTemp: false,
      spiritBox: true,
      ghostWriting: true,
      ghostOrbs: false,
      fingerPrints: false
    }
  },
  {
    name: 'Wraith',
    evidence: {
      emf: false,
      freezingTemp: true,
      spiritBox: true,
      ghostWriting: false,
      ghostOrbs: false,
      fingerPrints: true
    }
  },
  {
    name: 'Mare',
    evidence: {
      emf: false,
      freezingTemp: true,
      spiritBox: true,
      ghostWriting: false,
      ghostOrbs: true,
      fingerPrints: false
    }
  },
  {
    name: 'Demon',
    evidence: {
      emf: false,
      freezingTemp: true,
      spiritBox: true,
      ghostWriting: true,
      ghostOrbs: false,
      fingerPrints: false
    }
  },
  {
    name: 'Yurei',
    evidence: {
      emf: false,
      freezingTemp: true,
      spiritBox: false,
      ghostWriting: true,
      ghostOrbs: true,
      fingerPrints: false
    }
  },
  {
    name: 'Poltergeist',
    evidence: {
      emf: false,
      freezingTemp: false,
      spiritBox: true,
      ghostWriting: false,
      ghostOrbs: true,
      fingerPrints: true
    }
  },
  {
    name: 'Spirit',
    evidence: {
      emf: false,
      freezingTemp: false,
      spiritBox: true,
      ghostWriting: true,
      ghostOrbs: false,
      fingerPrints: true
    }
  },
  {
    name: 'Hantu',
    evidence: {
      emf: false,
      freezingTemp: false,
      spiritBox: false,
      ghostWriting: true,
      ghostOrbs: true,
      fingerPrints: true
    }
  },
]
