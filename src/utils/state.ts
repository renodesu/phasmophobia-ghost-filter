import { atom, selector } from 'recoil'

import { Evidence, evidenceList, ghostData } from '../data/ghostData'

import { readLocalStorage, writeLocalStorage } from './utils'

export const selectedEvidenceState = atom<Evidence[]>({
  key: 'selectedEvidenceState',
  default: [],
})

export const isAnyEvidenceSelectedState = selector({
  key: 'isAnyEvidenceSelectedState',
  get: ({ get }) => {
    const selectedEvidence = get(selectedEvidenceState)
    return selectedEvidence.length > 0
  },
})

export const possibleGhostsState = selector({
  key: 'possibleGhostsState',
  get: ({ get }) => {
    const selectedEvidence = get(selectedEvidenceState)
    const isAnyEvidenceSelected = get(isAnyEvidenceSelectedState)

    if (!isAnyEvidenceSelected) {
      return ghostData
    }

    return ghostData.filter(ghost =>
      selectedEvidence.every(ev => ghost.evidence.includes(ev))
    )
  },
})

export const impossibleRemainingEvidenceState = selector({
  key: 'impossibleRemainingEvidenceState',
  get: ({ get }) => {
    const possibleGhosts = get(possibleGhostsState)

    return Object.values(Evidence).filter(evidence =>
      possibleGhosts.every(ghost => !ghost.evidence.includes(evidence))
    )
  },
})

export const possibleRemainingEvidenceState = selector({
  key: 'possibleRemainingEvidenceState',
  get: ({ get }) => {
    const selectedEvidence = get(selectedEvidenceState)
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

const getColorSchemeInitialState = () => {
  const themeState = readLocalStorage('darkMode')
  // const preferDarkTheme = window.matchMedia('(prefers-color-scheme)')?.matches
  const preferDarkTheme = true // Prefer darkmode initially

  if (themeState === 'true') {
    return true
  } else if (themeState === 'false') {
    return false
  } else {
    return preferDarkTheme
  }
}

export const colorSchemeState = atom({
  key: 'colorSchemeState',
  default: getColorSchemeInitialState(),
  effects: [
    ({ onSet }) => {
      onSet(darkMode => writeLocalStorage('darkMode', String(darkMode)))
    },
  ],
})
