import React from 'react'
import PropTypes from 'prop-types'

import cx from 'classnames'

import './styles.css'

const Icon = ({
  element, icon, className, ...props
}) => {
  const Component = element

  return (
    <Component { ...props } styleName="icon" className={ cx(`icon-${icon}`, className) } />
  )
}

Icon.propTypes = {
  element: PropTypes.node,
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Icon.defaultProps = {
  element: 'span',
  className: '',
}

export default Icon
