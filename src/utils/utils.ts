import { filter, toArray } from 'fp-ts/lib/Record'

import { Evidence, EvidenceRecord, ghostData } from '../data/ghostData'

export type AnyObject = Record<string, unknown>

/**
 * Returns an array of object keys where keys match `filterValue`
 * @param object
 * @param filterValue
 * @returns String array
 */
export const filterKeysByProp = (object: AnyObject, filterValue: unknown) => {
  return toArray(object)
    .filter(([, value]) => value === filterValue)
    .map(([key]) => key)
}

/**
 * Filter ghosts based on `ghostProps`
 * @param ghostProps
 * @returns Array of possible Ghosts
 */
export const filterGhost = (ghostProps: Partial<EvidenceRecord>) => {
  const ghostIncludedEvidence = filterKeysByProp(ghostProps, true)
  const ghostExcludedEvidence = filterKeysByProp(ghostProps, false)

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

/**
 * Pick only props with `true` values from `source`
 * @param source Evidence Object
 * @returns Filtered object
 */
export const pickTrues = (source: EvidenceRecord): Partial<EvidenceRecord> => {
  const res: Partial<EvidenceRecord> = {}
  Object.entries(source).forEach(([name, status]) => {
    if (status) {
      res[name as Evidence] = status
    }
  })
  const filterFunc = filter((status: boolean) => status)
  const kek = filterFunc(source)
  return kek
}

/**
 * Evidence pretty-name mapping
 */
export const evidencePrettyNameMap: Record<Evidence, string> = {
  emf: 'EMF5',
  spiritBox: 'Spirit box',
  fingerPrints: 'Fingerprints',
  ghostOrbs: 'Ghost orb',
  ghostWriting: 'Ghost writing',
  freezingTemp: 'Freezing temp',
  DOTS: 'D.O.T.S.',
}

export const evidencePrettyName = (evidenceKey: Evidence) =>
  evidencePrettyNameMap[evidenceKey]

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
  Evidence.GhostOrbs,
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
