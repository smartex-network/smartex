import React from 'react'
import PropTypes from 'prop-types'

import cx from 'classnames'

import styles from './styles.css'

const GradientPage = ({ className, children }) => (
  <div className={ cx(styles.gradient, className) }>
    { children }
  </div>
)

GradientPage.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

GradientPage.defaultProps = {
  className: '',
}

export default GradientPage
