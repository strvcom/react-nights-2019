import React from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
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
  isAuthenticated: Object.keys(state.customer).length !== 0,
})

export const PrivatePage = connect(mapStateToProps)(PrivatePageComponent)
