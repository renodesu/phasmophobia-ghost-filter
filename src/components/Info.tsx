import clsx from 'clsx'
import { AiOutlineStop } from 'react-icons/ai'

import { Evidence } from '../data/ghostData'

import { EvidenceIcon } from './Icon'

const Info = () => {
  return (
    <div>
      <div className="grid grid-cols-[60px_auto] gap-2 gap-y-4">
        <div className="flex justify-center items-center">
          <AiOutlineStop className={clsx('w-8 h-8 mr-2')} />
        </div>
        <div className="flex items-center">means that evidence cannot have a match.</div>
        <div className="flex justify-center items-center">
          <span className="border border-orange-400 rounded p-1 mr-1">
            <EvidenceIcon name={Evidence.EMF5} className="w-8" />
          </span>
        </div>
        <div className="flex items-center">
          means that evidence is missing for a match.
        </div>
      </div>
    </div>
  )
}

export default Info
