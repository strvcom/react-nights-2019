import React, { Fragment, FC } from 'react'
import { connect } from 'react-redux'

import { AppState } from '../../store'
import * as routes from '../../routes'

import { Wrapper, Header, HeaderSection, HeaderLink } from './styled'

type Props = ReturnType<typeof mapStateToProps> & {
  dataTestId?: string
}

const Layout: FC<Props> = ({ isAuthenticated, children, dataTestId }) => (
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

const mapStateToProps = (state: AppState) => ({
  isAuthenticated: Boolean(state.customer),
})

export default connect(mapStateToProps)(Layout)
