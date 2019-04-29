import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import * as routes from '../../routes'
import { Wrapper, Header, HeaderSection, HeaderLink } from './styled'

const Layout = ({ isAuthenticated, children }) => (
  <Fragment>
    <Header>
      <HeaderSection>
        <HeaderLink href={routes.PRODUCT_LIST}>All Products</HeaderLink>
      </HeaderSection>
      <HeaderSection>
        <HeaderLink href={routes.CART}>My Cart</HeaderLink>|
        {isAuthenticated ? (
          <>
            <HeaderLink href={routes.ACCOUNT}>My Account</HeaderLink>|
            <HeaderLink href={routes.LOGOUT} as="button">
              Logout
            </HeaderLink>
          </>
        ) : (
          <>
            <HeaderLink href={routes.LOGIN}>Log In</HeaderLink> |
            <HeaderLink href={routes.SIGN_UP}>Sign Up</HeaderLink>
          </>
        )}
      </HeaderSection>
    </Header>
    <Wrapper>{children}</Wrapper>
  </Fragment>
)

const mapStateToProps = state => ({
  isAuthenticated: Object.keys(state.customer).length !== 0,
})

export default connect(mapStateToProps)(Layout)
