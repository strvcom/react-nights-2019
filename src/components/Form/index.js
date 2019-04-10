import styled from 'styled-components'

import theme from '../../common/theme'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 1.4rem auto;
  max-width: 420px;
  padding: 0 1.2rem;
  width: 100%;
`

export const GlobalFormError = styled.div`
  color: ${theme.color.red};
  margin-bottom: 1.2rem;
  padding: 1rem;
  text-align: center;
`
