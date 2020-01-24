import React from 'react'
import PropTypes from 'prop-types'

import { Translate } from 'react-redux-i18n'

import NavLink from '../NavLink'

import './styles.css'

const Sidebar = ({ onNavigate }) => (
  <aside styleName="sidebar">
    <nav styleName="nav">
      <div styleName="nav-item">
        <NavLink to="#smartex" onNavigate={ onNavigate }>
          Smartex
        </NavLink>

        <nav styleName="sub-nav">
          <NavLink to="#instruction" onNavigate={ onNavigate }>
            <Translate value="howItWorks.instruction.title" />
          </NavLink>
          <NavLink to="#registration" onNavigate={ onNavigate }>
            <Translate value="auth.registration" />
          </NavLink>
          <NavLink to="#login" onNavigate={ onNavigate }>
            <Translate value="actions.loginCabinet" />
          </NavLink>
        </nav>
      </div>

      <div styleName="nav-item">
        <NavLink to="#earning" onNavigate={ onNavigate }>
          <Translate value="howItWorks.earning.title" />
        </NavLink>

        <nav styleName="sub-nav">
          <NavLink to="#marketing" onNavigate={ onNavigate }>
            <Translate value="howItWorks.marketing.title" />
          </NavLink>
          <NavLink to="#level_1" onNavigate={ onNavigate }>
            <Translate value="common.levelNum" level="1" />
          </NavLink>
          <NavLink to="#level_2" onNavigate={ onNavigate }>
            <Translate value="common.levelNum" level="2" />
          </NavLink>
          <NavLink to="#level_3" onNavigate={ onNavigate }>
            <Translate value="common.levelNum" level="3" />
          </NavLink>
          <NavLink to="#level_4" onNavigate={ onNavigate }>
            <Translate value="common.levelNum" level="4" />
          </NavLink>
          <NavLink to="#level_5" onNavigate={ onNavigate }>
            <Translate value="common.levelNum" level="5" />
          </NavLink>
          <NavLink to="#level_6" onNavigate={ onNavigate }>
            <Translate value="common.levelNum" level="6" />
          </NavLink>
        </nav>
      </div>

      <div styleName="nav-item">
        <NavLink to="#repeat" onNavigate={ onNavigate }>
          Repeat
        </NavLink>

        <nav styleName="sub-nav">
          <NavLink to="#what_if" onNavigate={ onNavigate }>
            <Translate value="howItWorks.whatIf.title" />
          </NavLink>
        </nav>
      </div>
    </nav>
  </aside>
)

Sidebar.propTypes = {
  onNavigate: PropTypes.func,
}

Sidebar.defaultProps = {
  onNavigate: () => {},
}

export default Sidebar
