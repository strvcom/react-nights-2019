import styled from 'styled-components'
import theme from '../../common/theme'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`

export const StyledInput = styled.input`
  border: 2px solid
    ${({ hasError }) => (hasError ? theme.color.red : theme.color.gray)};
  border-radius: 4px;
  font-size: 16px;
  font-weight: 100;
  padding: 10px 12px;
`

export const Label = styled.label`
  font-size: 16px;
  margin-bottom: 6px;
`

export const StyledError = styled.div`
  color: ${theme.color.red};
  margin-top: 4px;
`
