import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import { Translate } from 'react-redux-i18n'

import PathUtils from 'utils/path'

import { CONTRACT_ADDRESS } from 'constants/ethereum'

import './styles.css'

const Main = ({ selectedAccount }) => (
  <div styleName="main">
    <div styleName="content" className="container">
      <div className="row" styleName="row">
        <div className="col-12 col-md-6 my-4 my-md-0" styleName="cell">
          <h1 styleName="heading">
            <img src={ PathUtils.getImagePath('logo-text.png') } alt="Smartex" />
          </h1>

          <h2 styleName="description">
            <Translate value="landing.main.description" />
          </h2>

          <div styleName="buttons">
            { selectedAccount ? (
              <Link to="/panel" styleName="button">
                <Translate value="common.personalArea" />
              </Link>
            ) : (
              <Link to="/sign-up" styleName="button">
                <Translate value="auth.registration" />
              </Link>
            ) }
          </div>

          <div styleName="socials">
            <Link to="/how-it-works" styleName="social">
              <img src={ PathUtils.getImagePath('how-to.png') } alt="How To" />
            </Link>
            <a
              styleName="social"
              href={ `https://etherscan.io/address/${CONTRACT_ADDRESS}` }
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={ PathUtils.getImagePath('smart-contract.png') } alt="Smart contract" />
            </a>
            <a
              styleName="social"
              href="https://t.me/smartexnetwork"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={ PathUtils.getImagePath('telegram.png') } alt="Telegram" />
            </a>
            <a
              styleName="social"
              href="https://t.me/smartexnetworkchat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={ PathUtils.getImagePath('telegram-chat.png') } alt="Telegram chat" />
            </a>
          </div>
        </div>

        <div className="d-none d-md-flex col-md-6 my-4 my-md-0" styleName="cell">
          <div styleName="logo">
            <img src={ PathUtils.getImagePath('logo-landing.png') } alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  </div>
)

Main.propTypes = {
  selectedAccount: PropTypes.string,
}

Main.defaultProps = {
  selectedAccount: null,
}

export default Main
