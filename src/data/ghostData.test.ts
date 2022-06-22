import { describe, expect, test } from 'vitest'

import { ghostData } from './ghostData'

describe('Ghost data', () => {
  test('is valid', () => {
    expect(ghostData).toBeTruthy()
  })
})
