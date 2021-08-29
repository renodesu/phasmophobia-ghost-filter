import { atom, selector } from 'recoil'
import { Evidence, evidenceKeys } from './data'
import { filterGhost, pickTrues } from './utils'

type FilterState = {
  hasFilters: Evidence
  notFilters: Evidence
}

export const initialFilterState: FilterState = {
  hasFilters: {
    emf: false,
    spiritBox: false,
    fingerPrints: false,
    ghostOrbs: false,
    ghostWriting: false,
    freezingTemp: false,
    DOTS: false
  },
  notFilters: {
    emf: false,
    spiritBox: false,
    fingerPrints: false,
    ghostOrbs: false,
    ghostWriting: false,
    freezingTemp: false,
    DOTS: false
  }
}

export const filterState = atom({
  key: 'filterState',
  default: initialFilterState
})

export const isAnyFilterActiveState = selector({
  key: 'isAnyFilterActiveState',
  get: ({ get }) => {
    const filters = get(filterState)
    const activeHasFilters = pickTrues(filters.hasFilters)
    const activeNotFilters = pickTrues(filters.notFilters)
    return Object.keys(activeHasFilters).length > 0 || Object.keys(activeNotFilters).length > 0
  }
})

export const possibleGhostsState = selector({
  key: 'possibleGhostsState',
  get: ({ get }) => {
    const filters = get(filterState)

    const activeHasFilters = pickTrues(filters.hasFilters)
    const activeNotFilters = pickTrues(filters.notFilters)
    const invertedNotFilters: Partial<Evidence> = Object.keys(activeNotFilters)
      .reduce((prev, curr) => {
        prev[curr as keyof Evidence] = false
        return prev
      }, {} as Partial<Evidence>)

    const combinedFilters = {
      ...activeHasFilters,
      ...invertedNotFilters
    }

    return filterGhost(combinedFilters)
  }
})

export const impossibleRemainingEvidenceState = selector({
  key: 'impossibleRemainingEvidenceState',
  get: ({ get }) => {
    const possibleGhosts = get(possibleGhostsState)

    const impossibleFilters = evidenceKeys.filter((filter) => {
      const res = possibleGhosts.every(ghost => {
        return ghost.evidence[filter] === false
      })
      return res
    })
    console.log('impossibleFilters', impossibleFilters)
    return impossibleFilters
  }
})

export const possibleRemainingEvidenceState = selector({
  key: 'possibleRemainingEvidenceState',
  get: ({ get }) => {
    const impossibleRemainingEvidence = get(impossibleRemainingEvidenceState)
    const evidence = get(filterState)

    const activeIncludedEvidence = Object.keys(pickTrues(evidence.hasFilters))
    const activeExcludedEvidence = Object.keys(pickTrues(evidence.notFilters))

    // Has and Nots are always mutually exclusive, but just in case - uniquefy them
    const uniqueActiveEvidence = Array.from(new Set([...activeIncludedEvidence, ...activeExcludedEvidence]))
    const activeAndImpossibleEvidence = Array.from(new Set([...uniqueActiveEvidence, ...impossibleRemainingEvidence]))
    const possibleRemainingEvidence = evidenceKeys.filter(key => !activeAndImpossibleEvidence.includes(key))

    return possibleRemainingEvidence
  }
})
