import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Tab from './Tab'

import styles from './styles.css'

const TabBar = ({
  value, children, className, onChange,
}) => {
  const [ activeTab, switchTab ] = useState(value)

  function mapChildren(appliedClassName, activeValue) {
    return _children => React.Children.map(_children, child => {
      const {
        props: {
          _key,
        },
      } = child

      const active = _key === activeValue

      return React.cloneElement(child, {
        active,
        onClick: () => {
          switchTab(_key)
          onChange(_key)
        },
      })
    })
  }

  return (
    <div styleName="tab-bar" className={ className }>
      { mapChildren(styles.item, activeTab)(children) }
    </div>
  )
}

TabBar.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  children: PropTypes.node,
  onChange: PropTypes.func,
}

TabBar.defaultProps = {
  className: '',
  children: null,
  onChange: () => {},
  value: 'this.props.children[0].props._key',
}

TabBar.Tab = Tab

export default TabBar
