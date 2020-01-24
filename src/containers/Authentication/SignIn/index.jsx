import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import { Translate, I18n } from 'react-redux-i18n'

import flow from 'lodash/flow'

import Modal from 'components/Modal'
import MotionTrackCard from 'components/MotionTrackCard'
import Button from 'components/Button'
import Svg from 'components/Svg'

import { Auth } from 'ducks'
import { Web3Service } from 'services'

import PathUtils from 'utils/path'
import ErrorUtils from 'utils/error'

import AuthContainerHOC from '../Container'

import './styles.css'

const SignIn = ({ error, signIn }) => {
  const [ modal, setModal ] = useState(null)
  const [ address, setAddress ] = useState('')

  const loginMetaMask = async () => {
    if (!Web3Service.isMetaMask()) {
      return setModal('install-metamask')
    }

    const account = await Web3Service.getAccount()

    return signIn(account)
  }

  const handleSubmit = e => {
    e.preventDefault()

    signIn(address)
  }

  return (
    <MotionTrackCard styleName="sign-in">
      <h2 styleName="heading">
        <Translate value="auth.login" />
      </h2>

      <div styleName="warning">
        <div styleName="icon">
          <Svg src={ PathUtils.getImagePath('warning.svg') } />
        </div>
        <span styleName="text">
          <Translate value="auth.warning" />
        </span>
        <div styleName="icon">
          <Svg src={ PathUtils.getImagePath('warning.svg') } />
        </div>
      </div>

      <form styleName="form" onSubmit={ handleSubmit }>
        <div styleName="input-wrapper">
          <input
            type="text"
            placeholder={ I18n.t('auth.ethOrId') }
            value={ address }
            onChange={ e => setAddress(e.target.value) }
          />
          { ErrorUtils.isInternal(error) && (
            <span styleName="error">{ error.message }</span>
          ) }
        </div>

        <Button type="submit" color="blue" styleName="button">
          <Translate value="actions.login" />
        </Button>
        <Button color="blue" empty styleName="button" onClick={ loginMetaMask }>
          <Translate value="actions.loginAuto" />
        </Button>

        <div styleName="divider">
          <Translate value="common.or" />
        </div>

        <Button color="black" empty styleName="button" tag={ Link } to="/sign-up">
          <Translate value="actions.signUp" />
        </Button>
      </form>

      <Modal show={ !!modal } onClose={ () => setModal(null) }>
        { modal === 'install-metamask' && (
          <div styleName="install-metamask">
            <Translate value="auth.installMM" link="https://metamask.io/" dangerousHTML />
          </div>
        )}
      </Modal>
    </MotionTrackCard>
  )
}

SignIn.propTypes = {
  error: PropTypes.object,
  signIn: PropTypes.func.isRequired,
}

SignIn.defaultProps = {
  error: null,
}

const mapStateToProps = state => ({
  error: state.auth.error,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  signIn: Auth.signInRequest,
}, dispatch)

export default flow([
  connect(mapStateToProps, mapDispatchToProps),
  AuthContainerHOC,
])(SignIn)
