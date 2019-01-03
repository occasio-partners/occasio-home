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
    <div className={`${props.className || ''} ${value ? 'has-value' : 'has-error'} ${props.label ? '' : 'no-label'}`}>
      <input {...attrs} placeholder={props.label} />
      <style jsx>{`
        input {
          width: 301px;
          padding: 1em;
          margin: 1em;
          background: lightgrey;
          border: none;
          font-size: 1em;
        }
        input:hover, input:focus {
          background: darkgrey;
        }
        input:focus {
          outline: 1px solid grey;
          outline-offset: -4px;
        }
      `}</style>
    </div>
  )
})

export default props => <Input validate={val => !props.required || val !== ''} {...props} />
