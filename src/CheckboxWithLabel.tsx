import React from 'react'

type CheckboxWithLabelProps = {
  id: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  checked: boolean
  value: string
  disabled?: boolean
}

const noop = () => undefined

const CheckboxWithLabel = ({ id, onChange = noop, checked, value, disabled: readOnly }: CheckboxWithLabelProps) => {
  return (
    <div className="cbWithLabel">
      <input type="checkbox" id={id} onChange={onChange} checked={checked} value={value} disabled={readOnly} />
      <label htmlFor={id}>{value}</label>
    </div>
  )
}

export default CheckboxWithLabel
