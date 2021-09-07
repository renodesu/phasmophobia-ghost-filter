import React from 'react'

type CheckboxWithLabelProps = {
  id: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  checked: boolean
  value: string
  readOnly?: boolean
}

const noop = () => undefined

const CheckboxWithLabel = ({ id, onChange = noop, checked, value, readOnly }: CheckboxWithLabelProps) => {
  return (
    <div className="cbWithLabel">
      <input type="checkbox" id={id} onChange={onChange} checked={checked} value={value} readOnly={readOnly} />
      <label htmlFor={id}>{value}</label>
    </div>
  )
}

export default CheckboxWithLabel
