import React from 'react'
import PropTypes from 'prop-types'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Redirect } from 'react-router'

import { Auth } from 'ducks'

const SignOut = ({ selectedAccount, signOut }) => {
  if (!selectedAccount) {
    return <Redirect to="/sign-in" />
  }

  signOut()

  return null
}

SignOut.propTypes = {
  selectedAccount: PropTypes.string,
  signOut: PropTypes.func.isRequired,
}

SignOut.defaultProps = {
  selectedAccount: null,
}

const mapStateToProps = state => ({
  selectedAccount: state.auth.selectedAccount,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  signOut: Auth.signOutRequest,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SignOut)
