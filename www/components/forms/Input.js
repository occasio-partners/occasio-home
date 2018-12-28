import React from 'react'
import { createFactory } from 'micro-form'

const Input = createFactory(({ name, value, valid, validateField, updateField, ...props }) => {
  const required = 'required' in props

  const attrs = {
    type: props.type || 'text',
    name,
    value,
    onChange: e => updateField(e.target.value)
  }

  if (props.placeholder) {
    attrs.placeholder = props.placeholder
  }
  if (props.minLength) {
    attrs.minLength = props.minLength
  }
  if (props.pattern) {
    attrs.pattern = props.pattern
  }

  if (required) {
    attrs.onBlur = e => {
      validateField()
    }
  }

  return (
    <div className={`input-wrapper ${props.className || ''} ${value ? 'has-value' : 'has-error'} ${props.label ? '' : 'no-label'}`}>
      <input {...attrs} />
      {props.label && <label>{props.label}{required ? '*' : ''}</label>}
      <span />
    </div>
  )
})

export default props => <Input validate={val => !props.required || val !== ''} {...props} />
