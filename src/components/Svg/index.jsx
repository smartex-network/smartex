import React from 'react'
import PropTypes from 'prop-types'

import cx from 'classnames'

import ReactSVG from 'react-svg'

import styles from './styles.css'

const Svg = ({ className, src }) => <ReactSVG src={ src } className={ cx(styles.svg, className) } />

Svg.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
}

Svg.defaultProps = {
  className: '',
}

export default Svg
