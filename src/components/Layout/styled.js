import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  padding: 2rem;
`

export const Header = styled.header`
  display: flex;
  border-bottom: 0.1rem solid gainsboro;
  justify-content: space-between;
  padding: 3rem;
`

export const HeaderSection = styled.div``

export const HeaderLink = styled(Link)`
  margin: 0 1rem;
`
