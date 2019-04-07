import styled from 'styled-components'
import theme from '../../common/theme'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 14px auto;
  max-width: 100%;
  padding: 0 12px;
  width: 420px;
`

export const GlobalFormError = styled.div`
  color: ${theme.color.red};
  margin-bottom: 12px;
  padding: 10px;
  text-align: center;
`

export default Form
