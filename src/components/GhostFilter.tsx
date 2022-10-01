import EvidenceList from './EvidenceList'
import GhostList from './GhostList'
import Info from './Info'

const GhostFilter = () => {
  return (
    <div className="flex gap-4">
      <div className="w-1/3 flex flex-col gap-4">
        <div className="border border-gray-300 p-4">
          <h3>Confirmed evidence</h3>
          <div className="flex flex-col">
            <EvidenceList />
          </div>
        </div>
        <div className="border border-gray-300 p-4">
          <h3>Instructions</h3>
          <Info />
        </div>
      </div>
      <div className="w-2/3">
        <div className="border border-gray-300 p-4">
          <div>
            <h3>Ghosts</h3>
            <GhostList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GhostFilter
