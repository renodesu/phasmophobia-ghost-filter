import { Evidence, ghostData } from "./data"

export type AnyObject = Record<string, unknown>

export const filterKeysByProp = (object: AnyObject, filterValue: unknown) => {
  return Object.entries(object)
    .filter(([, value]) => value === filterValue)
    .map(([key]) => key)
}

export const filterGhost = (ghostProps: Partial<Evidence>) => {
  const ghostHasProps = filterKeysByProp(ghostProps, true)
  const ghostNotProps = filterKeysByProp(ghostProps, false)

  const res = Object.entries(ghostData)
    .filter(([name, evidence]) => {
      const trueProps = filterKeysByProp(evidence, true)
      const falseProps = filterKeysByProp(evidence, false)
      const allTruesMatch = ghostHasProps.every((value) => trueProps.includes(value))
      const allFalsesMatch = ghostNotProps.every((value) => falseProps.includes(value))

      return allTruesMatch && allFalsesMatch
    })
  return res
}

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
