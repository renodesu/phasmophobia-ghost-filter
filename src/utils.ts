import { Evidence, ghosts } from "./Ghost"

export type AnyObject = Record<string, unknown>

export const filterKeysByProp = (object: AnyObject, filterValue: unknown) => {
  return Object.entries(object)
    .filter(([, value]) => value === filterValue)
    .map(([key]) => key)
}

export const filterGhost = (ghostProps: Partial<Evidence>) => {
  const ghostHasProps = filterKeysByProp(ghostProps, true)
  const ghostNotProps = filterKeysByProp(ghostProps, false)

  const res = Object.entries(ghosts)
    .filter(([name, evidence]) => {
      const trueProps = filterKeysByProp(evidence, true)
      const falseProps = filterKeysByProp(evidence, false)
      const allTruesMatch = ghostHasProps.every((value) => trueProps.includes(value))
      const allFalsesMatch = ghostNotProps.every((value) => falseProps.includes(value))

      return allTruesMatch && allFalsesMatch
    })
  return res.map(([key]) => key)
}
