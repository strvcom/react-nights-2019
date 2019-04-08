import React from 'react'
import { Field } from 'formik'

import { Wrapper, Label, StyledInput, StyledError } from './styled'

const Input = ({ error, isTouched, label, name, type = 'text' }) => {
  const hasError = isTouched && Boolean(error)
  return (
    <Wrapper>
      <Label htmlFor={name}>{label}</Label>
      <Field
        name={name}
        render={({ field }) => (
          <StyledInput {...field} id={name} type={type} hasError={hasError} />
        )}
      />
      {hasError && <StyledError>{error}</StyledError>}
    </Wrapper>
  )
}

export default Input
