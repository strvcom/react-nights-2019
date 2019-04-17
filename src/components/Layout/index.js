import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import * as customerActions from '../../store/customer/actions'
import * as routes from '../../routes'

import { removeToken } from '../../utils/token'
import { removeCustomer } from '../../utils/customer'
import { Wrapper, Header, HeaderSection, HeaderLink } from './styled'

class Layout extends Component {
  handleLogout = () => {
    this.props.logout()
    removeToken()
    removeCustomer()
    this.props.history.push(routes.HOMEPAGE)
  }

  render() {
    const { isAuthenticated } = this.props

    return (
      <Fragment>
        <Header>
          <HeaderSection>
            <HeaderLink to={routes.PRODUCT_LIST}>All Products</HeaderLink>
          </HeaderSection>
          <HeaderSection>
            <HeaderLink to={routes.CART}>My Cart</HeaderLink>|
            {isAuthenticated ? (
              <>
                <HeaderLink to={routes.ACCOUNT}>My Account</HeaderLink>|
                <HeaderLink as="button" onClick={this.handleLogout}>
                  Logout
                </HeaderLink>
              </>
            ) : (
              <>
                <HeaderLink to={routes.LOGIN}>Log In</HeaderLink> |
                <HeaderLink to={routes.SIGN_UP}>Sign Up</HeaderLink>
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
  isAuthenticated: Object.keys(state.customer).length !== 0,
})

const mapDispatchToProps = {
  logout: customerActions.logout,
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Layout)
)
