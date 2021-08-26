import { atom, selector } from 'recoil'
import { Evidence } from './data'
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
