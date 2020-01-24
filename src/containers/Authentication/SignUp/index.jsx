import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link, withRouter } from 'react-router-dom'
import { Translate } from 'react-redux-i18n'

import Cookies from 'universal-cookie'

import MotionTrackCard from 'components/MotionTrackCard'
import Button from 'components/Button'
import Svg from 'components/Svg'

import { Web3Service } from 'services'

import PathUtils from 'utils/path'

import AuthContainerHOC from '../Container'

import EmptyUpline from './EmptyUpline'
import FoundUpline from './FoundUpline'

import './styles.css'

class SignUp extends Component {
  state = {
    upline: null,
    processing: false,
    invitedBy: null,
  }

  handleRegistration = async () => {
    const {
      history: { push },
    } = this.props

    const { upline } = this.state

    try {
      this.setState({ processing: true })
      await Web3Service.registerUser(upline)

      const cookie = new Cookies()

      cookie.remove('refID', { path: '/' })

      push('/sign-in')
    } catch (err) { // eslint-disable-line

    } finally {
      this.setState({ processing: false })
    }
  }

  // Finds first available referrer down the tree
  searchAndSetUpline = async address => {
    try {
      const upline = await Web3Service.findFreeReferrer(address)

      this.setState({ upline: upline.toString() })
    } catch (err) {
      console.error(err)
    }
  }

  handleInvitedBy = invitedBy => this.setState({ invitedBy })

  render() {
    const { upline, invitedBy, processing } = this.state

    return (
      <MotionTrackCard styleName="sign-up">
        <h2 styleName="heading">
          <Translate value="actions.signUp" />
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

        <div styleName="form">
          { upline ? (
            <FoundUpline
              processing={ processing }
              upline={ upline }
              invitedBy={ invitedBy }
              onRegistration={ this.handleRegistration }
            />
          ) : (
            <EmptyUpline onInvitedBy={ this.handleInvitedBy } onSetUpline={ this.searchAndSetUpline } />
          ) }

          <div styleName="divider">
            <Translate value="common.or" />
          </div>

          <Button color="black" empty styleName="button" tag={ Link } to="/sign-in">
            <Translate value="actions.login" />
          </Button>
        </div>
      </MotionTrackCard>
    )
  }
}

SignUp.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}

export default AuthContainerHOC(withRouter(SignUp))
