import { describe, expect, test } from 'vitest'

import { ghostData } from './ghostData'

describe('Ghost data', () => {
  test('has unique evidence entries', () => {
    const ghostNames = ghostData.map(g => g.name)
    const mappedEvidences = ghostData.map(ghost =>
      Object.values(ghost.evidence).toString()
    )
    expect(mappedEvidences.length).toBe(new Set(mappedEvidences).size)
    expect(ghostNames.length).toBe(new Set(ghostNames).size)
  })
})
