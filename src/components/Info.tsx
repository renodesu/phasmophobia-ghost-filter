import clsx from 'clsx'
import { AiOutlineStop } from 'react-icons/ai'

const Info = () => {
  return (
    <div>
      <h2 className="font-semibold mb-2">Instructions</h2>
      <div className="flex items-center my-3">
        <AiOutlineStop className={clsx('w-8 h-8 mr-2')} />
        means that evidence is impossible.
      </div>
      <div className="my-3">
        <span className="border border-orange-400 rounded p-1 mr-1">
          Border
        </span>
        means that evidence is missing (for a match).
      </div>
    </div>
  )
}

export default Info
