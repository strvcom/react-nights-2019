import React from 'react'
import { Field } from 'formik'

import { Wrapper, Label, StyledInput, StyledError } from './styled'

export const Input = ({ label, name, type = 'text' }) => (
  <Field
    name={name}
    render={({ field, form }) => {
      const { errors, touched } = form
      const hasError = touched[name] && Boolean(errors[name])
      return (
        <Wrapper>
          <Label htmlFor={name}>{label}</Label>
          <StyledInput {...field} id={name} type={type} hasError={hasError} />
          {hasError && <StyledError>{errors[name]}</StyledError>}
        </Wrapper>
      )
    }}
  />
)
