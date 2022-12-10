import { atom, selector } from 'recoil'

import {
  Evidence,
  EvidenceRecord,
  evidenceList,
  ghostData,
} from '../data/ghostData'

import { readLocalStorage, writeLocalStorage } from './utils'

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

export const evidenceState = atom<Evidence[]>({
  key: 'evidenceState',
  default: [],
})

export const isAnyEvidenceSelectedState = selector({
  key: 'isAnyEvidenceSelectedState',
  get: ({ get }) => {
    const evidence = get(evidenceState)
    return evidence.length > 0
    // return (
    //   Object.values(evidence.included).some(Boolean) ||
    //   Object.values(evidence.excluded).some(Boolean)
    // )
  },
})

export const possibleGhostsState = selector({
  key: 'possibleGhostsState',
  get: ({ get }) => {
    const selectedEvidence = get(evidenceState)
    const anySelectedState = get(isAnyEvidenceSelectedState)
    console.log('selected evidence', selectedEvidence)

    if (!anySelectedState) {
      return ghostData
    }

    return ghostData.filter(ghost =>
      // ghost.evidence.some(ev => selectedEvidence.includes(ev))
      // ghost.evidence.every(ev => {
      //   // console.log(selectedEvidence.includes(ev))
      //   return selectedEvidence.includes(ev)
      // })
      selectedEvidence.every(ev => ghost.evidence.includes(ev))
    )

    // const activeIncludedEvidence = pickTrues(evidence.included)
    // const activeExcludedEvidence = pickTrues(evidence.excluded)

    // const invertedExcludedEvidence: Partial<EvidenceRecord> = Object.keys(
    //   activeExcludedEvidence
    // ).reduce((prev, curr) => {
    //   prev[curr as Evidence] = false
    //   return prev
    // }, {} as Partial<EvidenceRecord>)

    // // const invertMapper = map(val => !val)

    // // const res = invertMapper(activeExcludedEvidence)
    // // const res = invertMapper(activeExcludedEvidence as Partial<Record<string, unknown>>)

    // const combinedEvidence = {
    //   ...activeIncludedEvidence,
    //   ...invertedExcludedEvidence,
    // }

    // return filterGhostsByEvidence(combinedEvidence)
  },
})

export const impossibleRemainingEvidenceState = selector({
  key: 'impossibleRemainingEvidenceState',
  get: ({ get }) => {
    const possibleGhosts = get(possibleGhostsState)
    // console.log('possibleGhosts', possibleGhosts)

    return Object.values(Evidence).filter(evidence =>
      possibleGhosts.every(ghost => !ghost.evidence.includes(evidence))
    )
  },
})

export const possibleRemainingEvidenceState = selector({
  key: 'possibleRemainingEvidenceState',
  get: ({ get }) => {
    const selectedEvidence = get(evidenceState)
    const impossibleRemainingEvidence = get(impossibleRemainingEvidenceState)
    const impossibleRemainingEvidenceWithoutSelectedEvidence =
      evidenceList.filter(
        ev =>
          !selectedEvidence.includes(ev) &&
          !impossibleRemainingEvidence.includes(ev)
      )

    return impossibleRemainingEvidenceWithoutSelectedEvidence
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
