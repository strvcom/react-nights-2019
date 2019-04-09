import React from 'react'
import { Route, Redirect } from 'react-router-dom'

// TODO: connect to global state
const isAuthenticated = false

const PrivateRoute = ({ component: Component, ...rest }) => {
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
              pathname: '/signup',
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

export { PrivateRoute }
