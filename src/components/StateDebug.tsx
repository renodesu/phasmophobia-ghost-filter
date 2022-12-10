import { useRecoilValue } from 'recoil'

import {
  impossibleRemainingEvidenceState,
  isAnyEvidenceSelectedState,
  possibleGhostsState,
  possibleRemainingEvidenceState,
} from '../utils/state'

const StateDebug = () => {
  const isAnyEvidenceSelected = useRecoilValue(isAnyEvidenceSelectedState)
  const possibleGhosts = useRecoilValue(possibleGhostsState)
  const possibleRemainingEvidence = useRecoilValue(
    possibleRemainingEvidenceState
  )
  const impossibleRemainingEvidence = useRecoilValue(
    impossibleRemainingEvidenceState
  )

  return (
    <div>
      <div>
        <h2>isAnyEvidenceSelected</h2>
        <code>{JSON.stringify(isAnyEvidenceSelected)}</code>
      </div>
      <div>
        <h2>possibleGhosts</h2>
        <code>{JSON.stringify(possibleGhosts.map(g => g.name))}</code>
      </div>
      <div>
        <h2>possibleRemainingEvidence</h2>
        <code>{JSON.stringify(possibleRemainingEvidence)}</code>
      </div>
      <div>
        <h2>impossibleRemainingEvidence</h2>
        <code>{JSON.stringify(impossibleRemainingEvidence)}</code>
      </div>
    </div>
  )
}

export default StateDebug
