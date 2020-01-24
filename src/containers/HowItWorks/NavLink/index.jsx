import React from 'react'
import PropTypes from 'prop-types'

import cx from 'classnames'

import styles from './styles.css'

const NavLink = ({
  to, className, onNavigate, children, ...props
}) => {
  const handleNavigate = e => {
    e.preventDefault()

    onNavigate(to.slice(1))
  }

  return (
    /* eslint-disable-next-line */
    <a href={ to } className={ cx(styles['nav-link'], className) } onClick={ handleNavigate } { ...props }>
      { children }
    </a>
  )
}

NavLink.propTypes = {
  className: PropTypes.string,
  onNavigate: PropTypes.func,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

NavLink.defaultProps = {
  className: null,
  onNavigate: () => {},
}

export default NavLink
