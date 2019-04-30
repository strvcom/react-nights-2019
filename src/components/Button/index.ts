import styled from 'styled-components'
import theme from '../../common/theme'

const Button = styled.button`
  background: ${({ disabled }) =>
    disabled ? theme.color.gray : theme.color.red};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  padding: 1rem;
  margin-top: 0.5rem;
  border: none;
  border-radius: ${theme.radius.basic};
  color: ${theme.color.white};
`

export default Button
