import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Switch, Route } from 'react-router'
import { Link } from 'react-router-dom'

import { Row, Col } from 'reactstrap'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import Web3 from 'web3'

import Footer from 'components/Footer'
import GradientPage from 'components/GradientPage'
import Icon from 'components/Icon'
import BuyLevelModal from 'components/BuyLevelModal'
import Tooltipped from 'components/Tooltipped'

import { Web3Service } from 'services'

import { Auth, Referrals as ReferralsActions } from 'ducks'

import { LEVELS_INFO } from 'constants/levels'

import PathUtils from 'utils/path'

import Header from './Header'
import Sidebar from './Sidebar'
import Stats from './Stats'
import CurrentLevel from './CurrentLevel'

import Levels from './Levels'
import Statistics from './Statistics'
import Uplines from './Uplines'
import Referrals from './Referrals'

import './styles.css'

const Panel = ({ selectedAccount, fetchReferrals, signOut }) => {
  const [ modal, setModal ] = useState()
  const [ copied, setCopied ] = useState(false)

  useEffect(() => {
    const unsubscribe = Web3Service.subscribeMetaMaskAccounts(accounts => {
      if (selectedAccount && selectedAccount !== accounts[0]) {
        signOut()
      }
    })

    return unsubscribe
  }, []) // eslint-disable-line

  useEffect(() => {
    fetchReferrals(selectedAccount)
  }, [ selectedAccount ]) // eslint-disable-line

  const handleBuyLevel = async level => {
    const info = LEVELS_INFO[level]

    if (!Web3Service.isMetaMask()) {
      return setModal(info)
    }

    const account = await Web3Service.getAccount()

    if (account.toLowerCase() !== selectedAccount.toLowerCase()) {
      return setModal(info)
    }

    await Web3Service.buyLevel(level, account, Web3.utils.toWei(`${info.price}`, 'ether'))

    return null
  }

  return (
    <GradientPage styleName="panel">
      <div styleName="container">
        <Header styleName="header">
          <div styleName="account-info" className="ml-auto">
            <Tooltipped styleName="address" show={ copied } onHide={ () => setCopied(false) }>
              <span>{ selectedAccount }</span>
            </Tooltipped>
            <CopyToClipboard text={ selectedAccount } onCopy={ () => setCopied(true) }>
              <Icon icon="copy" styleName="copy-address" />
            </CopyToClipboard>

            <Link to="/sign-out" styleName="logout">
              <Icon icon="logout" />
            </Link>
          </div>
        </Header>

        <main>
          <Row>
            <Col xs="12" lg="2">
              <Sidebar />
            </Col>

            <Col xs="12" lg="10">
              <Stats />
              <CurrentLevel onBuyLevel={ handleBuyLevel } />

              <Switch>
                <Route exact path={ PathUtils.localePath('panel') } render={ () => <Levels onBuyLevel={ handleBuyLevel } /> } />
                <Route path={ PathUtils.localePath('panel/statistics') } component={ Statistics } />
                <Route path={ PathUtils.localePath('panel/uplines') } component={ Uplines } />
                <Route path={ PathUtils.localePath('panel/referrals') } component={ Referrals } />
              </Switch>
            </Col>
          </Row>
        </main>
      </div>

      <Footer styleName="footer" />

      <BuyLevelModal show={ !!modal } price={ modal && modal.price } onClose={ () => setModal() } />
    </GradientPage>
  )
}

Panel.propTypes = {
  selectedAccount: PropTypes.string,
  signOut: PropTypes.func.isRequired,
  fetchReferrals: PropTypes.func.isRequired,
}

Panel.defaultProps = {
  selectedAccount: null,
}

const mapStateToProps = state => ({
  selectedAccount: state.auth.selectedAccount,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  signOut: Auth.signOutRequest,
  fetchReferrals: ReferralsActions.fetchRequest,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Panel)
