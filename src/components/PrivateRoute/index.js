import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {
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
              pathname: '/login',
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

const WithConnect = connect(mapStateToProps)(PrivateRoute)

export { WithConnect as PrivateRoute }
