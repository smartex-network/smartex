import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import cx from 'classnames'

import LocaleSwitcher from 'components/LocaleSwitcher'

import PathUtils from 'utils/path'

import styles from './styles.css'

const Header = ({
  className, placement, showMenu, onToggleMenu,
}) => {
  const classes = cx(styles.header, {
    [styles['menu-open']]: showMenu,
    [styles[placement]]: !!placement,
  }, className)

  return (
    <header className={ classes }>
      <Link to="/" styleName="brand">
        <img src={ PathUtils.getImagePath('logo-text.png') } alt="Smartex" />
      </Link>

      <div styleName="locale">
        <LocaleSwitcher />
      </div>

      <div
        className={ cx(styles['menu-toggler'], { [styles.open]: showMenu }) }
        role="presentation"
        onClick={ () => onToggleMenu(!showMenu) }
      >
        <div styleName="menu_toggle__line first" />
        <div styleName="menu_toggle__line second" />
        <div styleName="menu_toggle__line third" />
      </div>
    </header>
  )
}

Header.propTypes = {
  className: PropTypes.string,
  placement: PropTypes.oneOf([ 'home', 'auth' ]),
  showMenu: PropTypes.bool.isRequired,
  onToggleMenu: PropTypes.func.isRequired,
}

Header.defaultProps = {
  className: null,
  placement: null,
}

export default Header
