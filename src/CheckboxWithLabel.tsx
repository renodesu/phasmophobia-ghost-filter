import React from "react"

type CheckboxWithLabelProps = {
  id: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  checked: boolean
  value: string
}

const CheckboxWithLabel = ({ id, onChange, checked, value }: CheckboxWithLabelProps) => {
  return (
    <>
      <input type="checkbox" id={id} onChange={onChange} checked={checked} value={value} />
      <label htmlFor={id}>{value}</label>
    </>
  )
}
export default CheckboxWithLabel
