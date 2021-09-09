import React from 'react'
import { evidencePrettyName } from './utils/utils'

type CheckboxWithLabelProps = {
  id: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  checked: boolean
  value: string
  disabled?: boolean
}

const noop = () => undefined

const CheckboxWithLabel = ({ id, onChange = noop, checked, value, disabled }: CheckboxWithLabelProps) => {
  return (
    <div className="labelWithCB">
      <label htmlFor={id}>
        <input type="checkbox" id={id} onChange={onChange} checked={checked} value={value} disabled={disabled} />
        <span>{evidencePrettyName(value)}</span>
      </label>
    </div>
  )
}

export default CheckboxWithLabel
