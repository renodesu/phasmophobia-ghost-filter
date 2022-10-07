import { AiOutlineStop } from 'react-icons/ai'

import { EMF5Icon } from './Icon'

const IconLegend = () => {
  return (
    <div>
      <div className="grid grid-cols-[50px_auto] gap-2 gap-y-4">
        <div className="flex justify-center">
          <AiOutlineStop className="w-8 h-8" />
        </div>
        <div className="flex items-center">Evidence cannot have a match.</div>
        <div className="flex justify-center">
          <span className="border border-orange-400 rounded p-1 mr-1">
            <EMF5Icon className="w-8 h-8" />
          </span>
        </div>
        <div className="flex items-center">
          Evidence is remaining for a match.
        </div>
      </div>
    </div>
  )
}

export default IconLegend
