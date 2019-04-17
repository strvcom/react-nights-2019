import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import * as routes from '../../routes'

const PrivateRouteComponent = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={routeProps => {
        if (isAuthenticated) {
          return <Component {...routeProps} />
        }
        return (
          <Redirect
            to={{
              pathname: routes.LOGIN,
              state: {
                from: routeProps.location.pathname,
              },
            }}
          />
        )
      }}
    />
  )
}

const mapStateToProps = state => ({
  isAuthenticated: Object.keys(state.customer).length !== 0,
})

export const PrivateRoute = connect(mapStateToProps)(PrivateRouteComponent)
