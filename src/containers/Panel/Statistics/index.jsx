import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { Translate } from 'react-redux-i18n'

import TabBar from 'components/TabBar'

import { Web3Service } from 'services'

import { LEVELS_INFO } from 'constants/levels'

import TableComponent from './TableComponent'

import './styles.css'

const Statistics = ({ selectedAccount }) => {
  const [ activeTab, switchTab ] = useState('incoming')
  const [ transactions, setTransactions ] = useState([])

  useEffect(() => {
    async function fetchTransactions() {
      let txs

      if (activeTab === 'outcoming') {
        const events = await Web3Service.getPastEvents('GetLevelProfitEvent', { referral: selectedAccount })

        txs = events.map(({ returnValues: { user, level, time } }) => ({
          address: user, amount: LEVELS_INFO[level].price, level, date: ~~time,
        }))
      } else if (activeTab === 'lost') {
        const events = await Web3Service.getPastEvents('LostLevelProfitEvent', { user: selectedAccount })

        txs = events.map(({ returnValues: { referral, level, time } }) => ({
          address: referral, amount: LEVELS_INFO[level].price, level, date: ~~time,
        }))
      } else {
        const events = await Web3Service.getPastEvents('GetLevelProfitEvent', { user: selectedAccount })

        txs = events.map(({ returnValues: { referral, level, time } }) => ({
          address: referral, amount: LEVELS_INFO[level].price, level, date: ~~time,
        }))
      }

      setTransactions(txs)
    }

    fetchTransactions()
  }, [ selectedAccount, activeTab ])

  return (
    <div styleName="statistics">
      <div styleName="tabs-wrapper">
        <TabBar value="incoming" onChange={ switchTab }>
          <TabBar.Tab _key="incoming">
            <Translate value="panel.statistics.income" />
          </TabBar.Tab>
          <TabBar.Tab _key="outcoming">
            <Translate value="panel.statistics.outcome" />
          </TabBar.Tab>
          <TabBar.Tab _key="lost">
            <Translate value="panel.statistics.lost" />
          </TabBar.Tab>
        </TabBar>
      </div>

      <div styleName="table-wrapper">
        <TableComponent tab={ activeTab } styleName="transactions" data={ transactions } />
      </div>
    </div>
  )
}

Statistics.propTypes = {
  selectedAccount: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  selectedAccount: state.auth.selectedAccount,
})

export default connect(mapStateToProps)(Statistics)
