import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 2rem;
`

const Header = styled.header`
  display: flex;
  border-bottom: 0.1rem solid gainsboro;
  justify-content: space-between;
  padding: 3rem;
`

const HeaderSection = styled.div``

const StyledLink = styled(Link)`
  margin: 0 1rem;
`

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header>
          <HeaderSection>
            <StyledLink to="/">All Products</StyledLink>
          </HeaderSection>
          <HeaderSection>
            <StyledLink to="/cart">My Cart</StyledLink>|
            <StyledLink to="/account">My Account</StyledLink>|
            <StyledLink to="/signup">Sign Up</StyledLink>
          </HeaderSection>
        </Header>
        <Wrapper>{this.props.children}</Wrapper>
      </Fragment>
    )
  }
}

export default Layout
