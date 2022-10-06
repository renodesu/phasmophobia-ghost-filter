import clsx from 'clsx'
import { AiOutlineStop } from 'react-icons/ai'

const Info = () => {
  return (
    <div>
      <div className="grid grid-cols-[60px_auto] gap-2 gap-y-4">
        <div className="flex justify-center">
          <AiOutlineStop className={clsx('w-8 h-8 mr-2')} />
        </div>
        <div>means that evidence is impossible.</div>
        <div className="flex justify-center">
          <span className="border border-orange-400 rounded p-1 mr-1">
            Border
          </span>
        </div>
        <div>means that evidence is missing (for a match).</div>
      </div>
    </div>
  )
}

export default Info
