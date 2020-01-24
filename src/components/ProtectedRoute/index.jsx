import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { Route, Redirect } from 'react-router'

/* eslint-disable react/prop-types */

const createRouteRenderer = (Component, { selectedAccount }) => componentProps => {
  if (selectedAccount) {
    return (
      <Component { ...componentProps } />
    )
  }

  const redirectPath = {
    pathname: '/sign-in',
    state: {
      redirect: componentProps.location,
    },
  }

  return (
    <Redirect to={ redirectPath } />
  )
}

/* eslint-enable react/prop-types */

const ProtectedRoute = ({ component, selectedAccount, ...routeProps }) => (
  <Route
    { ...routeProps }
    render={ createRouteRenderer(component, { selectedAccount }) }
  />
)

ProtectedRoute.propTypes = {
  component: Route.propTypes.component, // eslint-disable-line
  selectedAccount: PropTypes.string,
}

ProtectedRoute.defaultProps = {
  selectedAccount: null,
}

const mapStateToProps = state => ({
  selectedAccount: state.auth.selectedAccount,
})

export default connect(mapStateToProps)(ProtectedRoute)
