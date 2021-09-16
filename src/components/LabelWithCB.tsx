import React from 'react'
import styles from '../styles/LabelWithCB.module.scss'

type CheckboxWithLabelProps = {
  id: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  checked: boolean
  value: string
  text: string
  disabled?: boolean
}

const noop = () => undefined

const LabelWithCB = ({ id, onChange = noop, checked, value, disabled = false, text }: CheckboxWithLabelProps) => {
  return (
    <div className={styles.labelWithCB}>
      <label htmlFor={id}>
        <input type="checkbox" id={id} onChange={onChange} checked={checked} value={value} disabled={disabled} />
        <span>{text}</span>
      </label>
    </div>
  )
}

export default LabelWithCB
