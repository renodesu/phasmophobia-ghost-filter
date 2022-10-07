import { filter as filterArr, map } from 'fp-ts/lib/Array'
import { filter, toArray } from 'fp-ts/lib/Record'
import { pipe } from 'fp-ts/lib/function'

import { Evidence, EvidenceRecord, ghostData } from '../data/ghostData'

export type UnknownObject = Record<string, unknown>

const filterEntriesByValue = (filterVal: unknown) =>
  filterArr(([, val]) => val === filterVal)
const mapEntryValueToIndex = map(([key]: [string, unknown]) => key)
/**
 * Returns an array of object's keys where key matches `filterValue`
 * @param object
 * @param filterValue
 * @returns String array
 */
export const filterKeysByProp = (
  object: UnknownObject,
  filterValue: unknown
) => {
  return pipe(
    object,
    toArray,
    filterEntriesByValue(filterValue),
    mapEntryValueToIndex
  )
  // return toArray(object)
  //   .filter(([, value]) => value === filterValue)
  //   .map(([key]) => key)
}

/**
 * Filter ghosts based on `ghostEvidence`
 * @param ghostEvidence
 * @returns Array of possible Ghosts
 */
export const filterGhostsByEvidence = (
  ghostEvidence: Partial<EvidenceRecord>
) => {
  const ghostIncludedEvidence = filterKeysByProp(ghostEvidence, true)
  const ghostExcludedEvidence = filterKeysByProp(ghostEvidence, false)

  const possibleGhosts = ghostData.filter(ghost => {
    const trueProps = filterKeysByProp(ghost.evidence, true)
    const falseProps = filterKeysByProp(ghost.evidence, false)
    const allTruesMatch = ghostIncludedEvidence.every(value =>
      trueProps.includes(value)
    )
    const allFalsesMatch = ghostExcludedEvidence.every(value =>
      falseProps.includes(value)
    )

    return allTruesMatch && allFalsesMatch
  })

  return possibleGhosts
}

const pickTruesFilter = filter((status: boolean) => status)
/**
 * Pick only props with `true` values from `source`
 * @param source Evidence Object
 * @returns Filtered object
 */
export const pickTrues = (source: EvidenceRecord): Partial<EvidenceRecord> =>
  pickTruesFilter(source)

/**
 * Evidence pretty-name mapping
 */
export const evidenceMap: Record<Evidence, string> = {
  emf5: 'EMF5',
  spiritBox: 'Spirit Box',
  fingerPrints: 'Fingerprints',
  ghostOrb: 'Ghost Orb',
  ghostWriting: 'Ghost Writing',
  freezingTemp: 'Freezing Temp',
  DOTS: 'D.O.T.S.',
}

export const evidencePrettyName = (evidence: Evidence) => evidenceMap[evidence]

export const writeLocalStorage = (key: string, value: string) =>
  localStorage.setItem(key, value)
export const readLocalStorage = (key: string) => localStorage.getItem(key)
export const clearLocalStorage = () => localStorage.clear()

const evidendeSortOrder: Evidence[] = [
  Evidence.EMF5,
  Evidence.FingerPrints,
  Evidence.GhostWriting,
  Evidence.FreezingTemp,
  Evidence.DOTS,
  Evidence.GhostOrb,
  Evidence.SpiritBox,
]

type EvidenceSortOrder = [Evidence, boolean][]

export const sortEvidence = (evidenceArray: EvidenceSortOrder) =>
  evidenceArray
    .slice()
    .sort(
      ([aKey], [bKey]) =>
        evidendeSortOrder.indexOf(aKey) - evidendeSortOrder.indexOf(bKey)
    )
