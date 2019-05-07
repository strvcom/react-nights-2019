import React, { FC, ReactElement } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import isEmpty from 'ramda/src/isEmpty'

import { LOGIN } from '../../routes'
import { isBrowser } from '../../utils/is-browser'
import { AppState } from '../../store'

type Props = ReturnType<typeof mapStateToProps> & {
  children: () => ReactElement
}

const PrivatePageComponent: FC<Props> = ({ isAuthenticated, children }) => {
  if (isAuthenticated) {
    return children()
  }
  if (isBrowser()) {
    Router.push(LOGIN)
  }
  return <p>Loading ...</p>
}

const mapStateToProps = (state: AppState) => ({
  isAuthenticated: !isEmpty(state.customer),
})

export const PrivatePage = connect(mapStateToProps)(PrivatePageComponent)
