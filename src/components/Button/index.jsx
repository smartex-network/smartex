import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import cx from 'classnames'

import styles from './styles.css'

class Button extends PureComponent {
  render() {
    const {
      className,
      disabled,
      children,
      type,
      size,
      color,
      empty,
      onClick,
      tag,
      ...props
    } = this.props

    const classes = cx(styles.button, styles[color], {
      [styles.disabled]: disabled,
      [styles.empty]: empty,
    }, className)

    return React.createElement(tag, {
      className: classes,
      type: tag === 'button' ? type : null,
      onClick,
      disabled,
      ...props,
    }, children)
  }
}

Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  size: PropTypes.oneOf([ 'small', 'medium', 'large' ]),
  tag: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
  ]),
  color: PropTypes.oneOf([ 'white', 'black', 'blue' ]),
  empty: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
}

Button.defaultProps = {
  className: '',
  disabled: false,
  type: 'button',
  size: 'small',
  tag: 'button',
  color: null,
  empty: false,
  onClick: () => {},
  children: null,
}

export default Button
