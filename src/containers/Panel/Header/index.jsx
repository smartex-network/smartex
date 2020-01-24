import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Translate } from 'react-redux-i18n'

import cx from 'classnames'

import { Link } from 'react-router-dom'

import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'

import LocaleSwitcher from 'components/LocaleSwitcher'

import PathUtils from 'utils/path'

import styles from './styles.css'

const Header = ({ className, children }) => {
  const [ isOpen, toggle ] = useState(false)

  return (
    <Navbar className={ cx(styles.header, className) } tag="header" expand="lg" dark>
      <NavbarBrand to="/" tag={ Link }>
        <div styleName="logo">
          <img src={ PathUtils.getImagePath('logo-white.png') } alt="Smartex" />
        </div>
      </NavbarBrand>

      <div
        className={ cx(styles['menu-toggler'], { [styles.open]: isOpen }) }
        role="presentation"
        onClick={ () => toggle(prev => !prev) }
      >
        <div styleName="menu_toggle__line first" />
        <div styleName="menu_toggle__line second" />
        <div styleName="menu_toggle__line third" />
      </div>

      <Collapse styleName="menu" isOpen={ isOpen } navbar>
        <Nav styleName="nav-menu" navbar>
          <NavItem>
            <NavLink styleName="nav-link" to="/" tag={ Link }>
              <Translate value="common.main" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink styleName="nav-link" to="/faq" tag={ Link }>
              <Translate value="common.faq" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink styleName="nav-link" to="/how-it-works" tag={ Link }>
              <Translate value="common.howItWorks" />
            </NavLink>
          </NavItem>
        </Nav>

        <div styleName="locale">
          <LocaleSwitcher />
        </div>

        { children }
      </Collapse>
    </Navbar>
  )
}

Header.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

Header.defaultProps = {
  className: '',
  children: null,
}

export default Header
