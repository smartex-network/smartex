import React from 'react'

import { Link } from 'react-router-dom'
import { Translate } from 'react-redux-i18n'

import Svg from 'components/Svg'

import PathUtils from 'utils/path'

import './styles.css'

const UsefulLinks = () => (
  <div id="useful-links" styleName="useful-links">
    <div className="container">
      <h2 styleName="title">
        <Translate value="landing.usefulLinks.title" />
      </h2>

      <div styleName="links-list">
        <Link to="/faq" styleName="link">
          <div styleName="body">
            <span styleName="heading">
              <Translate value="common.faq" />
            </span>
            <span styleName="description">
              <Translate value="landing.usefulLinks.description.faq" />
            </span>
          </div>

          <div styleName="footer">
            <div styleName="link-icon">
              <Svg src={ PathUtils.getImagePath('right-arrow.svg') } />
            </div>
          </div>
        </Link>

        <Link to="/faq/ethereum" styleName="link">
          <div styleName="body">
            <span styleName="heading">
              <Translate value="common.faqEth" />
            </span>
            <span styleName="description">
              <Translate value="landing.usefulLinks.description.faqEth" />
            </span>
          </div>

          <div styleName="footer">
            <div styleName="link-icon">
              <Svg src={ PathUtils.getImagePath('right-arrow.svg') } />
            </div>
          </div>
        </Link>

        <a
          styleName="link"
          href={ `https://etherscan.io/address/${process.env.REACT_APP_ETH_CONTRACT_ADDRESS}` }
          target="_blank"
          rel="noreferrer noopener"
        >
          <div styleName="body">
            <span styleName="heading">
              <Translate value="common.smart" />
            </span>
            <span styleName="description">
              <Translate value="landing.usefulLinks.description.smart" />
            </span>
          </div>

          <div styleName="footer">
            <div styleName="link-icon">
              <Svg src={ PathUtils.getImagePath('right-arrow.svg') } />
            </div>
          </div>
        </a>

        <Link to="/sign-in" styleName="link">
          <div styleName="body">
            <span styleName="heading">
              <Translate value="common.signInUp" />
            </span>
            <span styleName="description">
              <Translate value="landing.usefulLinks.description.signInUp" />
            </span>
          </div>

          <div styleName="footer">
            <div styleName="link-icon">
              <Svg src={ PathUtils.getImagePath('right-arrow.svg') } />
            </div>
          </div>
        </Link>
      </div>
    </div>
  </div>
)

export default UsefulLinks
