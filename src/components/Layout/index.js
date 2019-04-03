import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 2rem;
`

const Header = styled.header`
  padding: 3rem;
  border-bottom: 0.1rem solid gainsboro;
`

const StyledLink = styled(Link)`
  margin-right: 1rem;
`

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header>
          <StyledLink to="/">All Products</StyledLink>
          <StyledLink to="/cart">My Cart</StyledLink>
        </Header>
        <Wrapper>{this.props.children}</Wrapper>
      </Fragment>
    )
  }
}

export default Layout
