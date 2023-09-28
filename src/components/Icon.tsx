import { Evidence } from '../data/ghostData'
import DOTS from '../static/icons/evidence/DOTS.svg?react'
import EMF5 from '../static/icons/evidence/emf5.svg?react'
import UltraViolet from '../static/icons/evidence/fingerprints.svg?react'
import FreezingTemp from '../static/icons/evidence/freezing-temp.svg?react'
import GhostOrb from '../static/icons/evidence/ghost-orbs.svg?react'
import GhostWriting from '../static/icons/evidence/ghost-writing.svg?react'
import SpiritBox from '../static/icons/evidence/spirit-box.svg?react'

import type { FC } from 'react'

type SVGElement = React.FunctionComponent<React.SVGProps<SVGSVGElement>>

export {
  DOTS,
  EMF5,
  UltraViolet,
  FreezingTemp,
  GhostOrb,
  GhostWriting,
  SpiritBox,
}

export const iconMap: Record<Evidence, SVGElement> = {
  [Evidence.EMF5]: EMF5,
  [Evidence.SpiritBox]: SpiritBox,
  [Evidence.UltraViolet]: UltraViolet,
  [Evidence.GhostOrb]: GhostOrb,
  [Evidence.GhostWriting]: GhostWriting,
  [Evidence.FreezingTemp]: FreezingTemp,
  [Evidence.DOTS]: DOTS,
}

export const EvidenceIcon: FC<{
  evidence: Evidence
  className?: string
}> = ({ evidence, className }) => {
  const Icon = iconMap[evidence]
  return <Icon className={className} />
}
