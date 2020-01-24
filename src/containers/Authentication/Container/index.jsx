import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { Redirect } from 'react-router-dom'

import Header from 'components/Header'
import Footer from 'components/Footer'
import GradientPage from 'components/GradientPage'

import ReactUtils from 'utils/react'


import './styles.css'

const mapStateToProps = state => ({
  selectedAccount: state.auth.selectedAccount,
})

const AuthContainerHOC = WrappedComponent => {
  const AuthContainer = ({
    selectedAccount, showMenu, onToggleMenu, ...props
  }) => {
    if (selectedAccount) {
      return <Redirect to="/panel" />
    }

    return (
      <GradientPage styleName="auth-container">
        <Header placement="auth" styleName="header" showMenu={ showMenu } onToggleMenu={ onToggleMenu } />

        <div styleName="content">
          <WrappedComponent { ...props } />
        </div>

        <Footer styleName="footer" />
      </GradientPage>
    )
  }

  AuthContainer.displayName = ReactUtils.wrapDisplayName(WrappedComponent, 'AuthContainer')

  AuthContainer.propTypes = {
    selectedAccount: PropTypes.string,
    showMenu: PropTypes.bool.isRequired,
    onToggleMenu: PropTypes.func.isRequired,
  }

  AuthContainer.defaultProps = {
    selectedAccount: null,
  }

  return connect(mapStateToProps)(AuthContainer)
}

export default AuthContainerHOC
