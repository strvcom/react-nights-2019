import React from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import isEmpty from 'ramda/src/isEmpty'

import { LOGIN } from '../../routes'
import { isBrowser } from '../../utils/is-browser'

const PrivatePageComponent = ({ isAuthenticated, children }) => {
  if (isAuthenticated) {
    return children()
  }
  if (isBrowser()) {
    Router.push(LOGIN)
  }
  return <p>Loading ...</p>
}

const mapStateToProps = state => ({
  isAuthenticated: !isEmpty(state.customer),
})

export const PrivatePage = connect(mapStateToProps)(PrivatePageComponent)
