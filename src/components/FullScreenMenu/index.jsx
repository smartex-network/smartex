import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import { Translate } from 'react-redux-i18n'

import cx from 'classnames'

import ReactUtils from 'utils/react'
import PathUtils from 'utils/path'

import styles from './styles.css'

const FullScreenMenuHOC = WrappedComponent => {
  const FullScreenMenu = ({ selectedAccount, ...props }) => {
    const [ showMenu, toggleMenu ] = useState(false)

    const handleToggleMenu = value => {
      document.body.classList.toggle('menu-open')

      toggleMenu(value)
    }

    const classes = cx(styles['fullscreen-menu'], {
      [styles.active]: showMenu,
    })

    return (
      <>
        <WrappedComponent showMenu={ showMenu } onToggleMenu={ handleToggleMenu } { ...props } />

        <div className={ classes }>
          <div styleName="menu-left">
            <div styleName="menu-item">
              <Link to="/" styleName="menu-link" onClick={ () => handleToggleMenu(false) }>
                <Translate value="common.main" />
              </Link>
            </div>

            { selectedAccount ? (
              <div styleName="menu-item">
                <Link to="/panel" styleName="menu-link" onClick={ () => handleToggleMenu(false) }>
                  <Translate value="common.personalArea" />
                </Link>
              </div>
            ) : (
              <>
                <div styleName="menu-item">
                  <Link to="/sign-in" styleName="menu-link" onClick={ () => handleToggleMenu(false) }>
                    <Translate value="actions.loginSystem" />
                  </Link>
                </div>
                <div styleName="menu-item">
                  <Link to="/sign-up" styleName="menu-link" onClick={ () => handleToggleMenu(false) }>
                    <Translate value="actions.signUp" />
                  </Link>
                </div>
              </>
            )}

            <div styleName="menu-item">
              <Link to="/faq" styleName="menu-link" onClick={ () => handleToggleMenu(false) }>
                <Translate value="common.faq" />
              </Link>
            </div>

            <div styleName="menu-item">
              <Link to="/faq/ethereum" styleName="menu-link" onClick={ () => handleToggleMenu(false) }>
                <Translate value="common.faqEth" />
              </Link>
            </div>
            <div styleName="menu-item">
              <Link to="/how-it-works" styleName="menu-link" onClick={ () => handleToggleMenu(false) }>
                <Translate value="common.howItWorks" />
              </Link>
            </div>

            { selectedAccount && (
              <div styleName="menu-item">
                <Link to="/sign-out" styleName="menu-link" onClick={ () => handleToggleMenu(false) }>
                  <Translate value="actions.logout" />
                </Link>
              </div>
            ) }
          </div>
          <div styleName="menu-right">
            <div styleName="logo">
              <img src={ PathUtils.getImagePath('logo-white.png') } alt="Smartex" />
            </div>
            <h2>Smartex</h2>
            <h3>
              <Translate value="description" />
            </h3>
          </div>
        </div>
      </>
    )
  }

  FullScreenMenu.displayName = ReactUtils.wrapDisplayName(WrappedComponent, 'FullScreenMenu')

  FullScreenMenu.propTypes = {
    selectedAccount: PropTypes.string,
  }

  FullScreenMenu.defaultProps = {
    selectedAccount: null,
  }

  const mapStateToProps = state => ({
    selectedAccount: state.auth.selectedAccount,
  })

  return connect(mapStateToProps)(FullScreenMenu)
}

export default FullScreenMenuHOC
