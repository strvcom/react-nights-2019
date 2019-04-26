import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import * as routes from '../../routes'

import { Wrapper, Header, HeaderSection, HeaderLink } from './styled'

const Layout = ({ isAuthenticated, children, dataTestId }) => (
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
            <HeaderLink to={routes.LOGOUT}>Logout</HeaderLink>
          </>
        ) : (
          <>
            <HeaderLink to={routes.LOGIN}>Log In</HeaderLink> |
            <HeaderLink to={routes.SIGN_UP}>Sign Up</HeaderLink>
          </>
        )}
      </HeaderSection>
    </Header>
    <Wrapper data-testid={dataTestId}>{children}</Wrapper>
  </Fragment>
)

const mapStateToProps = state => ({
  isAuthenticated: Object.keys(state.customer).length !== 0,
})

export default connect(mapStateToProps)(Layout)
