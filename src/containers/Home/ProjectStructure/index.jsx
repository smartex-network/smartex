import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { withRouter } from 'react-router'
import { Translate } from 'react-redux-i18n'

import flow from 'lodash/flow'

import Web3 from 'web3'

import { Web3Service } from 'services'

import Levels from 'containers/Panel/Levels'

import BuyLevelModal from 'components/BuyLevelModal'

import { LEVELS_INFO } from 'constants/levels'

import Statistics from './Statistics'

import './styles.css'

const ProjectStructure = ({ selectedAccount, history: { push } }) => {
  const [ modal, setModal ] = useState()

  const handleBuyLevel = async level => {
    if (!selectedAccount) {
      return push('/sign-up')
    }

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
    <div styleName="project-structure">
      <div className="container">
        <h2 styleName="title">
          <Translate value="landing.structure.title" />
        </h2>

        <fieldset styleName="levels-wrapper">
          <legend>
            <Translate value="landing.structure.legend" />
          </legend>

          <Levels onBuyLevel={ handleBuyLevel } />
        </fieldset>

        <Statistics />
      </div>

      <BuyLevelModal show={ !!modal } price={ modal && modal.price } onClose={ () => setModal() } />
    </div>
  )
}

ProjectStructure.propTypes = {
  selectedAccount: PropTypes.string,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}

ProjectStructure.defaultProps = {
  selectedAccount: null,
}

const mapStateToProps = state => ({
  selectedAccount: state.auth.selectedAccount,
})

export default flow([
  connect(mapStateToProps),
  withRouter,
])(ProjectStructure)
