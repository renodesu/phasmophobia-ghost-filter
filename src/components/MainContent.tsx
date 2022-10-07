import EvidenceSelector from './EvidenceSelector'
import GhostList from './GhostList'
import IconLegend from './IconLegend'

const MainContent = () => {
  return (
    <div className="flex gap-4">
      <div className="min-w-max flex flex-col gap-4">
        <div className="border border-gray-300 p-4">
          <h3 className="mb-2">Confirmed evidence</h3>
          <EvidenceSelector />
        </div>
        <div className="border border-gray-300 p-4">
          <h3 className="mb-2">Icon legend</h3>
          <IconLegend />
        </div>
      </div>
      <div>
        <div className="border border-gray-300 p-4">
          <h3 className="mb-2">Ghosts</h3>
          <GhostList />
        </div>
      </div>
    </div>
  )
}

export default MainContent
