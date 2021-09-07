import { Evidence, ghostData } from './ghostData'

export type AnyObject = Record<string, unknown>

/**
 * Returns a new object where object keys match `filterValue`
 * @param object
 * @param filterValue
 * @returns Filtered object
 */
export const filterKeysByProp = (object: AnyObject, filterValue: unknown) => {
  return Object.entries(object)
    .filter(([, value]) => value === filterValue)
    .map(([key]) => key)
}

/**
 * Filter ghosts based on `ghostProps`
 * @param ghostProps
 * @returns List of possible Ghosts after filtering
 */
export const filterGhost = (ghostProps: Partial<Evidence>) => {
  const ghostHasProps = filterKeysByProp(ghostProps, true)
  const ghostNotProps = filterKeysByProp(ghostProps, false)

  const possibleGhosts = ghostData.filter(ghost => {
    const trueProps = filterKeysByProp(ghost.evidence, true)
    const falseProps = filterKeysByProp(ghost.evidence, false)
    const allTruesMatch = ghostHasProps.every((value) => trueProps.includes(value))
    const allFalsesMatch = ghostNotProps.every((value) => falseProps.includes(value))

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
