import React from 'react'

import { Wrapper, Label, StyledInput, StyledError } from './styled'

const Input = ({ error, label, name, onChange, type = 'text', value }) => (
  <Wrapper>
    <Label htmlFor={name}>{label}</Label>
    <StyledInput
      hasError={!!error}
      id={name}
      name={name}
      onChange={onChange}
      type={type}
      value={value}
    />
    {!!error && <StyledError>{error}</StyledError>}
  </Wrapper>
)

export default Input
