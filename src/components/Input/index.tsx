import React, { FC, InputHTMLAttributes } from 'react'
import { Field, FieldProps } from 'formik'

import { Wrapper, Label, StyledInput, StyledError } from './styled'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  name: string
}

export const Input: FC<Props> = ({ label, name, type = 'text' }) => (
  <Field
    name={name}
    render={({ field, form }: FieldProps) => {
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
