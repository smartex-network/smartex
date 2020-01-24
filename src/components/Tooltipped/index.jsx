import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { I18n } from 'react-redux-i18n'

import Tooltip from 'rc-tooltip'

import cx from 'classnames'

import styles from './styles.css'

const Tooltipped = ({
  show, className, children, onHide,
}) => {
  useEffect(() => {
    if (show) {
      setTimeout(() => onHide(), 1500)
    }
  }, [ show, onHide ])

  return (
    <Tooltip
      overlayClassName={ cx(styles.tooltip, { [styles.show]: show }) }
      overlay={ I18n.t('common.copied') }
      visible={ show }
      placement="top"
      trigger={ [] }
    >
      <div className={ cx(styles.tooltipped, className) }>
        { children }
      </div>
    </Tooltip>
  )
}

Tooltipped.propTypes = {
  show: PropTypes.bool,
  className: PropTypes.string,
  onHide: PropTypes.func,
  children: PropTypes.node.isRequired,
}

Tooltipped.defaultProps = {
  show: false,
  className: null,
  onHide: () => {},
}

export default Tooltipped
