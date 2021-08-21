import { atom, selector } from "recoil";
import { Evidence } from "./data";
import { AnyObject, filterGhost, pickTrues } from "./utils";

type FilterState = {
  hasFilters: Evidence
  notFilters: Evidence
}

export const initialState: FilterState = {
  hasFilters: {
    emf: false,
    freezingTemp: false,
    spiritBox: false,
    ghostWriting: false,
    ghostOrbs: false,
    fingerPrints: false
  },
  notFilters: {
    emf: false,
    freezingTemp: false,
    spiritBox: false,
    ghostWriting: false,
    ghostOrbs: false,
    fingerPrints: false
  }
}

export const filterState = atom({
  key: 'filterState',
  default: initialState
})

export const possibleGhostsState = selector({
  key: 'possibleGhostsState',
  get: ({ get }) => {
    const filters = get(filterState)

    const activeHasFilters = pickTrues(filters.hasFilters)
    const activeNotFilters = pickTrues(filters.notFilters)
    const invertedNotFilters: Partial<Evidence> = Object.keys(activeNotFilters)
      .reduce((prev, curr) => {
        prev[curr] = false
        return prev
      }, {} as AnyObject)

    const combinedFilters = {
      ...activeHasFilters,
      ...invertedNotFilters
    }

    const possibleGhosts = filterGhost(combinedFilters)

    return possibleGhosts
  }
})
