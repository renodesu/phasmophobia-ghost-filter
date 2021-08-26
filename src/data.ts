export type Evidence = {
  emf: boolean
  freezingTemp: boolean
  spiritBox: boolean
  ghostWriting: boolean
  ghostOrbs: boolean
  fingerPrints: boolean
  DOTS: boolean
}

export type GhostData = {
  name: string
  evidence: Evidence
  description?: string
}

export const ghostData: GhostData[] = [
  {
    name: 'Phantom',
    evidence: {
      emf: false,
      freezingTemp: false,
      spiritBox: true,
      ghostWriting: false,
      ghostOrbs: false,
      fingerPrints: true,
      DOTS: true
    }
  },
  {
    name: 'Banshee',
    evidence: {
      emf: false,
      freezingTemp: false,
      spiritBox: false,
      ghostWriting: false,
      ghostOrbs: true,
      fingerPrints: true,
      DOTS: true
    }
  },
  {
    name: 'Jinn',
    evidence: {
      emf: true,
      freezingTemp: true,
      spiritBox: false,
      ghostWriting: false,
      ghostOrbs: false,
      fingerPrints: true,
      DOTS: false
    }
  },
  {
    name: 'Revenant',
    evidence: {
      emf: false,
      freezingTemp: true,
      spiritBox: false,
      ghostWriting: true,
      ghostOrbs: true,
      fingerPrints: false,
      DOTS: false
    }
  },
  {
    name: 'Shade',
    evidence: {
      emf: true,
      freezingTemp: true,
      spiritBox: false,
      ghostWriting: true,
      ghostOrbs: false,
      fingerPrints: false,
      DOTS: false
    }
  },
  {
    name: 'Oni',
    evidence: {
      emf: true,
      freezingTemp: true,
      spiritBox: false,
      ghostWriting: false,
      ghostOrbs: false,
      fingerPrints: false,
      DOTS: true
    }
  },
  {
    name: 'Wraith',
    evidence: {
      emf: true,
      freezingTemp: false,
      spiritBox: true,
      ghostWriting: false,
      ghostOrbs: false,
      fingerPrints: false,
      DOTS: true
    }
  },
  {
    name: 'Mare',
    evidence: {
      emf: false,
      freezingTemp: false,
      spiritBox: true,
      ghostWriting: true,
      ghostOrbs: true,
      fingerPrints: false,
      DOTS: false
    }
  },
  {
    name: 'Demon',
    evidence: {
      emf: false,
      freezingTemp: true,
      spiritBox: false,
      ghostWriting: true,
      ghostOrbs: false,
      fingerPrints: true,
      DOTS: false
    }
  },
  {
    name: 'Yurei',
    evidence: {
      emf: false,
      freezingTemp: true,
      spiritBox: false,
      ghostWriting: false,
      ghostOrbs: true,
      fingerPrints: false,
      DOTS: true
    }
  },
  {
    name: 'Poltergeist',
    evidence: {
      emf: false,
      freezingTemp: false,
      spiritBox: true,
      ghostWriting: true,
      ghostOrbs: false,
      fingerPrints: true,
      DOTS: false
    }
  },
  {
    name: 'Spirit',
    evidence: {
      emf: true,
      freezingTemp: false,
      spiritBox: true,
      ghostWriting: true,
      ghostOrbs: false,
      fingerPrints: false,
      DOTS: false
    }
  },
  {
    name: 'Hantu',
    evidence: {
      emf: false,
      freezingTemp: true,
      spiritBox: false,
      ghostWriting: false,
      ghostOrbs: true,
      fingerPrints: true,
      DOTS: false
    }
  },
  {
    name: 'Yokai',
    evidence: {
      emf: false,
      freezingTemp: false,
      spiritBox: true,
      ghostWriting: false,
      ghostOrbs: true,
      fingerPrints: false,
      DOTS: true
    }
  },
  {
    name: 'Goryo',
    evidence: {
      emf: true,
      freezingTemp: false,
      spiritBox: false,
      ghostWriting: false,
      ghostOrbs: false,
      fingerPrints: true,
      DOTS: true
    }
  },
  {
    name: 'Myling',
    evidence: {
      emf: true,
      freezingTemp: false,
      spiritBox: false,
      ghostWriting: true,
      ghostOrbs: false,
      fingerPrints: true,
      DOTS: false
    }
  },
].sort(({ name }, { name: nameB }) => {
  if (name < nameB) return -1
  if (name > nameB) return 1
  return 0
})
