import { Evidence } from '../data/ghostData'

/**
 * Evidence pretty-name mapping
 */
export const evidenceMap: Record<Evidence, string> = {
  emf5: 'EMF5',
  spiritBox: 'Spirit Box',
  ultraViolet: 'Ultraviolet',
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
  Evidence.UltraViolet,
  Evidence.GhostWriting,
  Evidence.FreezingTemp,
  Evidence.DOTS,
  Evidence.GhostOrb,
  Evidence.SpiritBox,
]

export const sortEvidence = (evidenceArray: Evidence[]) =>
  evidenceArray
    .slice()
    .sort((a, b) => evidendeSortOrder.indexOf(a) - evidendeSortOrder.indexOf(b))
