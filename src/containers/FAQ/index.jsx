import React from 'react'
import PropTypes from 'prop-types'

import { Switch, Route } from 'react-router-dom'

import Header from 'components/Header'
import Footer from 'components/Footer'

import PathUtils from 'utils/path'

import General from './General'
import Ethereum from './Ethereum'

import './styles.css'

const FAQ = ({ showMenu, onToggleMenu }) => (
  <div styleName="faq">
    <Header showMenu={ showMenu } onToggleMenu={ onToggleMenu } />

    <main className="container" styleName="content">
      <Switch>
        <Route exact path={ PathUtils.localePath('faq') } component={ General } />
        <Route exact path={ PathUtils.localePath('faq/ethereum') } component={ Ethereum } />
      </Switch>
    </main>

    <Footer styleName="footer" />
  </div>
)

FAQ.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  onToggleMenu: PropTypes.func.isRequired,
}

export default FAQ
