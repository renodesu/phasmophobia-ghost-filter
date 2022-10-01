import { EvidenceKey } from '../data/ghostData'
import { ReactComponent as DOTS } from '../static/evidence/DOTS.svg'
import { ReactComponent as EMF } from '../static/evidence/emf5.svg'
import { ReactComponent as Fingerprints } from '../static/evidence/fingerprints.svg'
import { ReactComponent as FreezingTemp } from '../static/evidence/freezing-temp.svg'
import { ReactComponent as GhostOrbs } from '../static/evidence/ghost-orbs.svg'
import { ReactComponent as GhostWriting } from '../static/evidence/ghost-writing.svg'
import { ReactComponent as SpiritBox } from '../static/evidence/spirit-box.svg'

type SVGElement = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string | undefined
  }
>

export {
  DOTS,
  EMF,
  Fingerprints,
  FreezingTemp,
  GhostOrbs,
  GhostWriting,
  SpiritBox,
}

export const iconMap: Record<EvidenceKey, SVGElement> = {
  emf: EMF,
  spiritBox: SpiritBox,
  fingerPrints: Fingerprints,
  ghostOrbs: GhostOrbs,
  ghostWriting: GhostWriting,
  freezingTemp: FreezingTemp,
  DOTS: DOTS,
}
