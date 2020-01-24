import React from 'react'
import PropTypes from 'prop-types'

import cx from 'classnames'

import styles from './styles.css'

const Tab = ({
  className, active, onClick, children,
}) => {
  const classes = cx(styles.tab, className, {
    [styles.active]: active,
  })

  return (
    <button type="button" className={ classes } onClick={ onClick }>
      { children }
    </button>
  )
}

Tab.propTypes = {
  className: PropTypes.string,
  _key: PropTypes.string.isRequired, // eslint-disable-line react/no-unused-prop-types
  children: PropTypes.node,
  active: PropTypes.bool,
  onClick: PropTypes.func,
}

Tab.defaultProps = {
  className: '',
  active: false,
  onClick: () => {},
  children: null,
}

export default Tab
