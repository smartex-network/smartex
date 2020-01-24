import React from 'react'
import PropTypes from 'prop-types'

import { Switch, Route } from 'react-router-dom'

import Header from 'components/Header'
import Footer from 'components/Footer'

import PathUtils from 'utils/path'

import MetaMask from './MetaMask'
import TrustWallet from './TrustWallet'
import MeW from './MeW'

import './styles.css'

const HowTo = ({ showMenu, onToggleMenu }) => (
  <div>
    <Header showMenu={ showMenu } onToggleMenu={ onToggleMenu } />

    <main className="container">
      <Switch>
        <Route exact path={ PathUtils.localePath('how-to/metamask') } component={ MetaMask } />
        <Route exact path={ PathUtils.localePath('how-to/trustwallet') } component={ TrustWallet } />
        <Route exact path={ PathUtils.localePath('how-to/myetherwallet') } component={ MeW } />
      </Switch>
    </main>

    <Footer styleName="footer" />
  </div>
)

HowTo.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  onToggleMenu: PropTypes.func.isRequired,
}

export default HowTo
