import styled from 'styled-components'

import theme from '../../common/theme'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.6rem;
`

export const StyledInput = styled.input`
  border: 2px solid
    ${({ hasError }) => (hasError ? theme.color.red : theme.color.gray)};
  border-radius: ${theme.radius.basic};
  font-size: ${theme.fontSize.medium};
  font-weight: 100;
  padding: 1rem 1.2rem;
`

export const Label = styled.label`
  font-size: ${theme.fontSize.medium};
  margin-bottom: 0.6rem;
`

export const StyledError = styled.div`
  color: ${theme.color.red};
  margin-top: 0.4rem;
`
