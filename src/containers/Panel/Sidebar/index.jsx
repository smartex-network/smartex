import React from 'react'

import { NavLink } from 'react-router-dom'
import { Translate } from 'react-redux-i18n'

import Scrollable from 'components/Scrollable'
import Icon from 'components/Icon'

import styles from './styles.css'

const Sidebar = () => (
  <div styleName="sidebar">
    <Scrollable horizontal autoHeightMax={ 588 }>
      <div styleName="wrapper">
        <NavLink
          exact
          to="/panel"
          styleName="item"
          activeClassName={ styles.active }
          isActive={ (match, location) => {
            if (location.pathname.endsWith('/panel')) {
              return true
            }

            return false
          } }
        >
          <Icon icon="panel" styleName="menu-icon" />
          <span styleName="text">
            <Translate value="common.panel" />
          </span>
        </NavLink>
        <NavLink
          to="/panel/statistics"
          styleName="item"
          activeClassName={ styles.active }
          isActive={ (match, location) => {
            if (location.pathname.endsWith('/panel/statistics')) {
              return true
            }

            return false
          } }
        >
          <Icon icon="stats" styleName="menu-icon" />
          <span styleName="text">
            <Translate value="common.statistics" />
          </span>
        </NavLink>
        <NavLink
          to="/panel/uplines"
          styleName="item"
          activeClassName={ styles.active }
          isActive={ (match, location) => {
            if (location.pathname.endsWith('/panel/uplines')) {
              return true
            }

            return false
          } }
        >
          <Icon icon="upline" styleName="menu-icon" />
          <span styleName="text">
            <Translate value="common.uplines" />
          </span>
        </NavLink>
        <NavLink
          to="/panel/referrals"
          styleName="item"
          activeClassName={ styles.active }
          isActive={ (match, location) => {
            if (location.pathname.endsWith('/panel/referrals')) {
              return true
            }

            return false
          } }
        >
          <Icon icon="person" styleName="menu-icon" />
          <span styleName="text">
            <Translate value="common.referrals" />
          </span>
        </NavLink>
      </div>
    </Scrollable>
  </div>
)

export default Sidebar
