import styled from 'styled-components/macro'
import theme from '../../common/theme'

const Button = styled.button`
  background: ${theme.color.red};
  padding: 1rem;
  margin-top: 0.5rem;
  border: none;
  border-radius: ${theme.radius.basic};
  color: ${theme.color.white};
`

export default Button
