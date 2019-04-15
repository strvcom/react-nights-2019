import React, { Component, Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { logout } from '../../store/user/actions'
import { removeToken } from '../../utils/token'

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
  handleLogout = () => {
    this.props.logout()
    removeToken()
    this.props.history.push('/')
  }

  render() {
    const { isAuthenticated } = this.props
    return (
      <Fragment>
        <Header>
          <HeaderSection>
            <StyledLink to="/">All Products</StyledLink>
          </HeaderSection>
          <HeaderSection>
            <StyledLink to="/cart">My Cart</StyledLink>|
            {isAuthenticated && (
              <>
                <StyledLink to="/account">My Account</StyledLink>|
              </>
            )}
            <StyledLink to="/login">Log In</StyledLink> |
            <StyledLink to="/signup">Sign Up</StyledLink>
            {isAuthenticated && (
              <>
                |
                <StyledLink as="button" onClick={this.handleLogout}>
                  Logout
                </StyledLink>
              </>
            )}
          </HeaderSection>
        </Header>
        <Wrapper>{this.props.children}</Wrapper>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: Object.keys(state.user).length !== 0,
})

export default connect(
  mapStateToProps,
  { logout }
)(withRouter(Layout))
