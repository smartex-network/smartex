import React from 'react'
import PropTypes from 'prop-types'

import cx from 'classnames'

import styles from './styles.css'

const MotionTrackCard = ({ className, children }) => (
  <div className={ cx(styles['with-motion-track'], className) }>
    <span styleName="motion-track first" />
    <span styleName="motion-track second" />
    <span styleName="motion-track third" />
    { children }
  </div>
)

MotionTrackCard.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

MotionTrackCard.defaultProps = {
  className: '',
}

export default MotionTrackCard
