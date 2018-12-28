import React from 'react'
import { createForm } from 'micro-form'

export default ({ children, ...props }) => {
  const Component = createForm(children)

  return <Component {...props} />
}
