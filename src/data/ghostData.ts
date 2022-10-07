export enum Evidence {
  EMF5 = 'emf5',
  SpiritBox = 'spiritBox',
  FingerPrints = 'fingerPrints',
  GhostOrb = 'ghostOrb',
  GhostWriting = 'ghostWriting',
  FreezingTemp = 'freezingTemp',
  DOTS = 'DOTS',
}

export type EvidenceRecord = Record<Evidence, boolean>

export type Ghost = {
  name: string
  evidence: EvidenceRecord
  fakeEvidence?: Evidence[]
  description?: string
}

export const ghostData: Ghost[] = [
  {
    name: 'Banshee',
    evidence: {
      emf5: false,
      spiritBox: false,
      fingerPrints: true,
      ghostOrb: true,
      ghostWriting: false,
      freezingTemp: false,
      DOTS: true,
    },
  },
  {
    name: 'Demon',
    evidence: {
      emf5: false,
      spiritBox: false,
      fingerPrints: true,
      ghostOrb: false,
      ghostWriting: true,
      freezingTemp: true,
      DOTS: false,
    },
  },
  {
    name: 'Goryo',
    evidence: {
      emf5: true,
      spiritBox: false,
      fingerPrints: true,
      ghostOrb: false,
      ghostWriting: false,
      freezingTemp: false,
      DOTS: true,
    },
  },
  {
    name: 'Hantu',
    evidence: {
      emf5: false,
      spiritBox: false,
      fingerPrints: true,
      ghostOrb: true,
      ghostWriting: false,
      freezingTemp: true,
      DOTS: false,
    },
  },
  {
    name: 'Jinn',
    evidence: {
      emf5: true,
      spiritBox: false,
      fingerPrints: true,
      ghostOrb: false,
      ghostWriting: false,
      freezingTemp: true,
      DOTS: false,
    },
  },
  {
    name: 'Mare',
    evidence: {
      emf5: false,
      spiritBox: true,
      fingerPrints: false,
      ghostOrb: true,
      ghostWriting: true,
      freezingTemp: false,
      DOTS: false,
    },
  },
  {
    name: 'Mimic',
    evidence: {
      emf5: false,
      spiritBox: true,
      fingerPrints: true,
      ghostOrb: true,
      ghostWriting: false,
      freezingTemp: true,
      DOTS: false,
    },
    fakeEvidence: [Evidence.GhostOrb],
  },
  {
    name: 'Myling',
    evidence: {
      emf5: true,
      spiritBox: false,
      fingerPrints: true,
      ghostOrb: false,
      ghostWriting: true,
      freezingTemp: false,
      DOTS: false,
    },
  },
  {
    name: 'Obake',
    evidence: {
      emf5: true,
      spiritBox: false,
      fingerPrints: true,
      ghostOrb: true,
      ghostWriting: false,
      freezingTemp: false,
      DOTS: false,
    },
  },
  {
    name: 'Oni',
    evidence: {
      emf5: true,
      spiritBox: false,
      fingerPrints: false,
      ghostOrb: false,
      ghostWriting: false,
      freezingTemp: true,
      DOTS: true,
    },
  },
  {
    name: 'Onryo',
    evidence: {
      emf5: false,
      spiritBox: true,
      fingerPrints: false,
      ghostOrb: true,
      ghostWriting: false,
      freezingTemp: true,
      DOTS: false,
    },
  },
  {
    name: 'Phantom',
    evidence: {
      emf5: false,
      spiritBox: true,
      fingerPrints: true,
      ghostOrb: false,
      ghostWriting: false,
      freezingTemp: false,
      DOTS: true,
    },
  },
  {
    name: 'Poltergeist',
    evidence: {
      emf5: false,
      spiritBox: true,
      fingerPrints: true,
      ghostOrb: false,
      ghostWriting: true,
      freezingTemp: false,
      DOTS: false,
    },
  },
  {
    name: 'Raiju',
    evidence: {
      emf5: true,
      spiritBox: false,
      fingerPrints: false,
      ghostOrb: true,
      ghostWriting: false,
      freezingTemp: false,
      DOTS: true,
    },
  },
  {
    name: 'Revenant',
    evidence: {
      emf5: false,
      spiritBox: false,
      fingerPrints: false,
      ghostOrb: true,
      ghostWriting: true,
      freezingTemp: true,
      DOTS: false,
    },
  },
  {
    name: 'Shade',
    evidence: {
      emf5: true,
      spiritBox: false,
      fingerPrints: false,
      ghostOrb: false,
      ghostWriting: true,
      freezingTemp: true,
      DOTS: false,
    },
  },
  {
    name: 'Spirit',
    evidence: {
      emf5: true,
      spiritBox: true,
      fingerPrints: false,
      ghostOrb: false,
      ghostWriting: true,
      freezingTemp: false,
      DOTS: false,
    },
  },
  {
    name: 'The Twins',
    evidence: {
      emf5: true,
      spiritBox: true,
      fingerPrints: false,
      ghostOrb: false,
      ghostWriting: false,
      freezingTemp: true,
      DOTS: false,
    },
  },
  {
    name: 'Wraith',
    evidence: {
      emf5: true,
      spiritBox: true,
      fingerPrints: false,
      ghostOrb: false,
      ghostWriting: false,
      freezingTemp: false,
      DOTS: true,
    },
  },
  {
    name: 'Yokai',
    evidence: {
      emf5: false,
      spiritBox: true,
      fingerPrints: false,
      ghostOrb: true,
      ghostWriting: false,
      freezingTemp: false,
      DOTS: true,
    },
  },
  {
    name: 'Yurei',
    evidence: {
      emf5: false,
      spiritBox: false,
      fingerPrints: false,
      ghostOrb: true,
      ghostWriting: false,
      freezingTemp: true,
      DOTS: true,
    },
  },
  {
    name: 'Moroi',
    evidence: {
      emf5: false,
      spiritBox: true,
      fingerPrints: false,
      ghostOrb: false,
      ghostWriting: true,
      freezingTemp: true,
      DOTS: false,
    },
  },
  {
    name: 'Deogen',
    evidence: {
      emf5: false,
      spiritBox: true,
      fingerPrints: false,
      ghostOrb: false,
      ghostWriting: true,
      freezingTemp: false,
      DOTS: true,
    },
  },
  {
    name: 'Thaye',
    evidence: {
      emf5: false,
      spiritBox: false,
      fingerPrints: false,
      ghostOrb: true,
      ghostWriting: true,
      freezingTemp: false,
      DOTS: true,
    },
  },
]
