// TODO: enum
export enum Ev {
  EMF5 = 'emf',
  SpiritBox = 'spiritBox',
  FingerPrints = 'fingerPrints',
  GhostOrbs = 'ghostOrbs',
  GhostWriting = 'ghostWriting',
  FreezingTemp = 'freezingTemp',
  DOTS = 'DOTS',
}

export const evidenceKeys = [
  'emf',
  'spiritBox',
  'fingerPrints',
  'ghostOrbs',
  'ghostWriting',
  'freezingTemp',
  'DOTS',
] as const

export type EvidenceKey = typeof evidenceKeys[number]
export type Evidence = {
  [key in EvidenceKey]: boolean
}

export type GhostData = {
  name: string
  evidence: Evidence
  fakeEvidence?: EvidenceKey[]
  description?: string
}

export const ghostData: GhostData[] = [
  {
    name: 'Banshee',
    evidence: {
      emf: false,
      spiritBox: false,
      fingerPrints: true,
      ghostOrbs: true,
      ghostWriting: false,
      freezingTemp: false,
      DOTS: true,
    },
  },
  {
    name: 'Demon',
    evidence: {
      emf: false,
      spiritBox: false,
      fingerPrints: true,
      ghostOrbs: false,
      ghostWriting: true,
      freezingTemp: true,
      DOTS: false,
    },
  },
  {
    name: 'Goryo',
    evidence: {
      emf: true,
      spiritBox: false,
      fingerPrints: true,
      ghostOrbs: false,
      ghostWriting: false,
      freezingTemp: false,
      DOTS: true,
    },
  },
  {
    name: 'Hantu',
    evidence: {
      emf: false,
      spiritBox: false,
      fingerPrints: true,
      ghostOrbs: true,
      ghostWriting: false,
      freezingTemp: true,
      DOTS: false,
    },
  },
  {
    name: 'Jinn',
    evidence: {
      emf: true,
      spiritBox: false,
      fingerPrints: true,
      ghostOrbs: false,
      ghostWriting: false,
      freezingTemp: true,
      DOTS: false,
    },
  },
  {
    name: 'Mare',
    evidence: {
      emf: false,
      spiritBox: true,
      fingerPrints: false,
      ghostOrbs: true,
      ghostWriting: true,
      freezingTemp: false,
      DOTS: false,
    },
  },
  {
    name: 'Mimic',
    evidence: {
      emf: false,
      spiritBox: true,
      fingerPrints: true,
      ghostOrbs: true,
      ghostWriting: false,
      freezingTemp: true,
      DOTS: false,
    },
    fakeEvidence: ['ghostOrbs'],
  },
  {
    name: 'Myling',
    evidence: {
      emf: true,
      spiritBox: false,
      fingerPrints: true,
      ghostOrbs: false,
      ghostWriting: true,
      freezingTemp: false,
      DOTS: false,
    },
  },
  {
    name: 'Obake',
    evidence: {
      emf: true,
      spiritBox: false,
      fingerPrints: true,
      ghostOrbs: true,
      ghostWriting: false,
      freezingTemp: false,
      DOTS: false,
    },
  },
  {
    name: 'Oni',
    evidence: {
      emf: true,
      spiritBox: false,
      fingerPrints: false,
      ghostOrbs: false,
      ghostWriting: false,
      freezingTemp: true,
      DOTS: true,
    },
  },
  {
    name: 'Onryo',
    evidence: {
      emf: false,
      spiritBox: true,
      fingerPrints: false,
      ghostOrbs: true,
      ghostWriting: false,
      freezingTemp: true,
      DOTS: false,
    },
  },
  {
    name: 'Phantom',
    evidence: {
      emf: false,
      spiritBox: true,
      fingerPrints: true,
      ghostOrbs: false,
      ghostWriting: false,
      freezingTemp: false,
      DOTS: true,
    },
  },
  {
    name: 'Poltergeist',
    evidence: {
      emf: false,
      spiritBox: true,
      fingerPrints: true,
      ghostOrbs: false,
      ghostWriting: true,
      freezingTemp: false,
      DOTS: false,
    },
  },
  {
    name: 'Raiju',
    evidence: {
      emf: true,
      spiritBox: false,
      fingerPrints: false,
      ghostOrbs: true,
      ghostWriting: false,
      freezingTemp: false,
      DOTS: true,
    },
  },
  {
    name: 'Revenant',
    evidence: {
      emf: false,
      spiritBox: false,
      fingerPrints: false,
      ghostOrbs: true,
      ghostWriting: true,
      freezingTemp: true,
      DOTS: false,
    },
  },
  {
    name: 'Shade',
    evidence: {
      emf: true,
      spiritBox: false,
      fingerPrints: false,
      ghostOrbs: false,
      ghostWriting: true,
      freezingTemp: true,
      DOTS: false,
    },
  },
  {
    name: 'Spirit',
    evidence: {
      emf: true,
      spiritBox: true,
      fingerPrints: false,
      ghostOrbs: false,
      ghostWriting: true,
      freezingTemp: false,
      DOTS: false,
    },
  },
  {
    name: 'The Twins',
    evidence: {
      emf: true,
      spiritBox: true,
      fingerPrints: false,
      ghostOrbs: false,
      ghostWriting: false,
      freezingTemp: true,
      DOTS: false,
    },
  },
  {
    name: 'Wraith',
    evidence: {
      emf: true,
      spiritBox: true,
      fingerPrints: false,
      ghostOrbs: false,
      ghostWriting: false,
      freezingTemp: false,
      DOTS: true,
    },
  },
  {
    name: 'Yokai',
    evidence: {
      emf: false,
      spiritBox: true,
      fingerPrints: false,
      ghostOrbs: true,
      ghostWriting: false,
      freezingTemp: false,
      DOTS: true,
    },
  },
  {
    name: 'Yurei',
    evidence: {
      emf: false,
      spiritBox: false,
      fingerPrints: false,
      ghostOrbs: true,
      ghostWriting: false,
      freezingTemp: true,
      DOTS: true,
    },
  },
  {
    name: 'Moroi',
    evidence: {
      emf: false,
      spiritBox: true,
      fingerPrints: false,
      ghostOrbs: false,
      ghostWriting: true,
      freezingTemp: true,
      DOTS: false,
    },
  },
  {
    name: 'Deogen',
    evidence: {
      emf: false,
      spiritBox: true,
      fingerPrints: false,
      ghostOrbs: false,
      ghostWriting: true,
      freezingTemp: false,
      DOTS: true,
    },
  },
  {
    name: 'Thaye',
    evidence: {
      emf: false,
      spiritBox: false,
      fingerPrints: false,
      ghostOrbs: true,
      ghostWriting: true,
      freezingTemp: false,
      DOTS: true,
    },
  },
]
