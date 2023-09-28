import { Fragment, type ReactNode } from 'react'
import { AiOutlineStop } from 'react-icons/ai'

import { EMF5 } from './Icon'

interface Legend {
  icon: ReactNode
  label: string
}

const legends: Legend[] = [
  {
    icon: <AiOutlineStop className="w-8 h-8" />,
    label: 'Evidence cannot have a match.',
  },
  {
    icon: (
      <span className="border border-orange-400 rounded p-1">
        <EMF5 className="w-[30px] h-[30px]" />
      </span>
    ),
    label: 'Evidence is remaining for a match.',
  },
]

const IconLegend = () => {
  return (
    <div className="grid grid-cols-[50px_auto] gap-2 gap-y-4">
      {legends.map(legend => {
        const { icon, label } = legend
        return (
          <Fragment key={label}>
            <div className="flex justify-center">{icon}</div>
            <div className="flex items-center">{label}</div>
          </Fragment>
        )
      })}
    </div>
  )
}

export default IconLegend
