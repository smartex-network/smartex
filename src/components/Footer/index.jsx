import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import { Translate } from 'react-redux-i18n'

import PathUtils from 'utils/path'

import { CONTRACT_ADDRESS } from 'constants/ethereum'

import './styles.css'

const Footer = ({ className }) => (
  <footer className={ className }>
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-3">
          <div styleName="company">
            <div styleName="logo">
              <img src={ PathUtils.getImagePath('logo.png') } alt="Smartex" />
            </div>
            <div styleName="about">
              <span styleName="name">Smartex.network</span>
              <span styleName="copyright">
                © Copyright 2019. All Rights Reserved.
              </span>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 col-lg-3">
          <div styleName="links">
            <Link to="/faq">
              <Translate value="common.faq" />
            </Link>
            <Link to="/faq/ethereum">
              <Translate value="common.faqEth" />
            </Link>
            <a
              href="/presentation-rus-v-1.pdf"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Translate value="footer.presentation" />
            </a>
            <a
              href={ `https://etherscan.io/address/${CONTRACT_ADDRESS}` }
              target="_blank"
              rel="noreferrer noopener"
            >
              <Translate value="common.smart" />
            </a>
            <a
              href="https://dappradar.com/app/1657/smartex"
              target="_blank"
              rel="noreferrer noopener"
            >
              DappRadar
            </a>
            <Link to="/sign-in">
              <Translate value="common.signInUp" />
            </Link>
            <Link to="/how-it-works">
              <Translate value="common.howItWorks" />
            </Link>
            <Link to="/how-to/metamask">
              <Translate value="common.instruction.metamask" />
            </Link>
            <Link to="/how-to/trustwallet">
              <Translate value="common.instruction.trustwallet" />
            </Link>
            <Link to="/how-to/myetherwallet">
              <Translate value="common.instruction.mew" />
            </Link>
          </div>
        </div>

        <div className="col-12 col-md-4 col-lg-3">
          <div styleName="links">
            <a
              href="https://t.me/smartexnetworkchat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Translate value="footer.telegram.chat" />
              { ' ' }
              (RU)
            </a>
            <a
              href="https://t.me/smartexnetworkeng"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Translate value="footer.telegram.chat" />
              { ' ' }
              (EN)
            </a>
            <a
              href="https://t.me/smartexnetworkde"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Translate value="footer.telegram.chat" />
              { ' ' }
              (DE)
            </a>
            <a
              href="https://t.me/smartexnetworkes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Translate value="footer.telegram.chat" />
              { ' ' }
              (ES)
            </a>
            <a
              href="https://t.me/smartexnetwork"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Translate value="footer.telegram.news" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCKHCMTSlAmXiUTdBJhSGq6Q"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Translate value="footer.youtube" />
            </a>
          </div>
        </div>

        <div className="col-12 col-md-4 col-lg-3">
          <div styleName="links">
            <a href="mailto:admin@smartex.network">
              <Translate value="footer.ad.email" />
            </a>
            <a
              href="https://t.me/smartex_admin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Translate value="footer.ad.telegram" />
            </a>
            <a
              href="https://www.bestchange.ru/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Translate value="footer.buy.bestchange" />
            </a>
            <a
              href="https://localethereum.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Translate value="footer.buy.localeth" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  className: PropTypes.string,
}

Footer.defaultProps = {
  className: null,
}

export default Footer
