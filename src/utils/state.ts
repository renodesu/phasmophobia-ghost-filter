import { atom, selector } from 'recoil'

import { Evidence, EvidenceRecord } from '../data/ghostData'

import {
  filterGhostsByEvidence,
  pickTrues,
  readLocalStorage,
  writeLocalStorage,
} from './utils'

type EvidenceState = {
  included: EvidenceRecord
  excluded: EvidenceRecord
}

export const initialEvidenceState: EvidenceState = {
  included: {
    emf5: false,
    spiritBox: false,
    fingerPrints: false,
    ghostOrb: false,
    ghostWriting: false,
    freezingTemp: false,
    DOTS: false,
  },
  excluded: {
    emf5: false,
    spiritBox: false,
    fingerPrints: false,
    ghostOrb: false,
    ghostWriting: false,
    freezingTemp: false,
    DOTS: false,
  },
}

export const evidenceState = atom({
  key: 'evidenceState',
  default: initialEvidenceState,
})

export const isAnyEvidenceSelectedState = selector({
  key: 'isAnyEvidenceSelectedState',
  get: ({ get }) => {
    const evidence = get(evidenceState)
    return (
      Object.values(evidence.included).some(Boolean) ||
      Object.values(evidence.excluded).some(Boolean)
    )
  },
})

export const possibleGhostsState = selector({
  key: 'possibleGhostsState',
  get: ({ get }) => {
    const evidence = get(evidenceState)

    const activeIncludedEvidence = pickTrues(evidence.included)
    const activeExcludedEvidence = pickTrues(evidence.excluded)

    const invertedExcludedEvidence: Partial<EvidenceRecord> = Object.keys(
      activeExcludedEvidence
    ).reduce((prev, curr) => {
      prev[curr as Evidence] = false
      return prev
    }, {} as Partial<EvidenceRecord>)

    // const invertMapper = map(val => !val)

    // const res = invertMapper(activeExcludedEvidence)
    // const res = invertMapper(activeExcludedEvidence as Partial<Record<string, unknown>>)

    const combinedEvidence = {
      ...activeIncludedEvidence,
      ...invertedExcludedEvidence,
    }

    return filterGhostsByEvidence(combinedEvidence)
  },
})

export const impossibleRemainingEvidenceState = selector({
  key: 'impossibleRemainingEvidenceState',
  get: ({ get }) => {
    const possibleGhosts = get(possibleGhostsState)

    return Object.values(Evidence).filter(evidence =>
      possibleGhosts.every(ghost => ghost.evidence[evidence] === false)
    )
  },
})

export const possibleRemainingEvidenceState = selector({
  key: 'possibleRemainingEvidenceState',
  get: ({ get }) => {
    const impossibleRemainingEvidence = get(impossibleRemainingEvidenceState)
    const evidence = get(evidenceState)

    const activeIncludedEvidence = Object.keys(pickTrues(evidence.included))
    const activeExcludedEvidence = Object.keys(pickTrues(evidence.excluded))

    // Included and Excluded are always mutually exclusive, but just in case - uniquefy them
    const uniqueActiveEvidence = Array.from(
      new Set([...activeIncludedEvidence, ...activeExcludedEvidence])
    )
    const activeAndImpossibleEvidence = Array.from(
      new Set([...uniqueActiveEvidence, ...impossibleRemainingEvidence])
    )
    const possibleRemainingEvidence = Object.values(Evidence).filter(
      evidence => !activeAndImpossibleEvidence.includes(evidence)
    )

    return possibleRemainingEvidence
  },
})

const getDarkModeInitialState = () => {
  const themeState = readLocalStorage('darkMode')
  const preferDarkTheme = window.matchMedia('(prefers-color-scheme)')?.matches

  if (themeState === 'true') {
    return true
  } else if (themeState === 'false') {
    return false
  } else {
    return preferDarkTheme
  }
}

export const darkModeState = atom({
  key: 'darkModeState',
  default: getDarkModeInitialState(),
  effects: [
    ({ onSet }) => {
      onSet(darkMode => writeLocalStorage('darkMode', String(darkMode)))
    },
  ],
})
