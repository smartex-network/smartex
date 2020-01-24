import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import times from 'lodash/times'

import Upline from './Upline'

import './styles.css'

const Uplines = ({ selectedAccount }) => (
  <div styleName="uplines">
    { times(3, idx => <Upline key={ idx } selectedAccount={ selectedAccount } level={ idx + 1 } />)}
  </div>
)

Uplines.propTypes = {
  selectedAccount: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  selectedAccount: state.auth.selectedAccount,
})

export default connect(mapStateToProps)(Uplines)
