import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { Translate } from 'react-redux-i18n'

import PathUtils from 'utils/path'

import './styles.css'

const Stats = ({ user }) => (
  <div styleName="stats">
    <div styleName="stat-wrapper">
      <div styleName="stat income">
        <div styleName="info-box">
          <span styleName="value">{ `${user.income} ETH` }</span>
          <span styleName="label">
            <Translate value="panel.yourIncome" />
          </span>
        </div>
        <div styleName="icon">
          <img src={ PathUtils.getImagePath('income.png') } alt="Income" />
        </div>
      </div>
    </div>

    <div styleName="stat-wrapper">
      <div styleName="stat refs">
        <div styleName="info-box">
          <span styleName="value">{ user.refs }</span>
          <span styleName="label">
            <Translate value="panel.yourRefs" />
          </span>
        </div>
        <div styleName="icon">
          <img src={ PathUtils.getImagePath('refs.png') } alt="Referrals" />
        </div>
      </div>
    </div>

    <div styleName="stat-wrapper">
      <div styleName="stat account-id">
        <div styleName="info-box">
          <span styleName="value">{ user.id }</span>
          <span styleName="label">
            <Translate value="panel.yourID" />
          </span>
        </div>
        <div styleName="icon">
          <img src={ PathUtils.getImagePath('id-card.png') } alt="ID card" />
        </div>
      </div>
    </div>
  </div>
)

Stats.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    income: PropTypes.string,
    refs: PropTypes.number,
  }).isRequired,
}

const mapStateToProps = state => ({
  user: state.user.data,
})

export default connect(mapStateToProps)(Stats)
