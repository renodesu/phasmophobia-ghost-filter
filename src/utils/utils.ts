import { Evidence, ghostData } from '../data/ghostData'

export type AnyObject = Record<string, unknown>

/**
 * Returns an array of object keys where keys match `filterValue`
 * @param object
 * @param filterValue
 * @returns String array
 */
export const filterKeysByProp = (object: AnyObject, filterValue: unknown) => {
  return Object.entries(object)
    .filter(([, value]) => value === filterValue)
    .map(([key]) => key)
}

/**
 * Filter ghosts based on `ghostProps`
 * @param ghostProps
 * @returns Array of possible Ghosts
 */
export const filterGhost = (ghostProps: Partial<Evidence>) => {
  const ghostIncludedEvidence = filterKeysByProp(ghostProps, true)
  const ghostExcludedEvidence = filterKeysByProp(ghostProps, false)

  const possibleGhosts = ghostData.filter(ghost => {
    const trueProps = filterKeysByProp(ghost.evidence, true)
    const falseProps = filterKeysByProp(ghost.evidence, false)
    const allTruesMatch = ghostIncludedEvidence.every((value) => trueProps.includes(value))
    const allFalsesMatch = ghostExcludedEvidence.every((value) => falseProps.includes(value))

    return allTruesMatch && allFalsesMatch
  })

  return possibleGhosts
}

/**
 * Pick only props with `true` values from `source`
 * @param source Object
 * @returns Filtered object
 */
export const pickTrues = (source: Partial<Evidence>) => {
  const res: Partial<Evidence> = {}
  Object.entries(source)
    .forEach(([name, status]) => {
      if (status) {
        res[name as keyof Evidence] = status
      }
    })
  return res
}

/**
 * Evidence pretty-name mapping
 */
const evidencePrettyNameMap: Record<string, string> = {
  emf: 'EMF5',
  spiritBox: 'Spirix box',
  fingerPrints: 'Fingerprints',
  ghostOrbs: 'Ghost orbs',
  ghostWriting: 'Ghost writing',
  freezingTemp: 'Freezing temp',
  DOTS: 'D.O.T.S.'
}

export const evidencePrettyName = (evidenceKey: string) => evidencePrettyNameMap[evidenceKey]

export const writeLocalStorage = (key: string, value: string) => localStorage.setItem(key, value)
export const readLocalStorage = (key: string) => localStorage.getItem(key)
export const clearLocalStorage = () => localStorage.clear()
