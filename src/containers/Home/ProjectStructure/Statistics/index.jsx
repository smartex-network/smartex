import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Translate } from 'react-redux-i18n'

import times from 'lodash/times'

import Moment from 'react-moment'

import Svg from 'components/Svg'

import { Statistics } from 'ducks'

import PathUtils from 'utils/path'

import { START_DATE } from 'constants/ethereum'

import './styles.css'

const Stats = ({ stats, fetchStatistics }) => {
  useEffect(() => {
    fetchStatistics()
  }, [ fetchStatistics ])

  return (
    <div styleName="project-statistics">
      <div styleName="global">
        <div styleName="stat">
          <div styleName="icon">
            <Svg src={ PathUtils.getImagePath('users.svg') } />
          </div>
          <span styleName="value">{ stats.totalUsers }</span>
          <span styleName="label">
            <Translate value="landing.structure.totalUsers" />
          </span>
        </div>
        <div styleName="stat">
          <div styleName="icon">
            <Svg src={ PathUtils.getImagePath('ethereum.svg') } />
          </div>
          <span styleName="value">{ `${stats.totalAmount} ETH` }</span>
          <span styleName="label">
            <Translate value="landing.structure.totalAmount" />
          </span>
        </div>
        <div styleName="stat">
          <div styleName="icon">
            <Svg src={ PathUtils.getImagePath('calendar.svg') } />
          </div>
          <span styleName="value">
            <Moment diff={ START_DATE } unit="days" />
          </span>
          <span styleName="label">
            <Translate value="landing.structure.projectDays" />
          </span>
        </div>
      </div>

      <div styleName="users-per-level">
        { times(6, idx => {
          const lvl = idx + 1

          return (
            <div key={ lvl } styleName="level">
              <span styleName="value">{ stats.usersPerLevel[lvl] || 0 }</span>
              <span styleName="label">
                <Translate value="common.levelNum" level={ lvl } />
              </span>
            </div>
          )
        }) }
      </div>
    </div>
  )
}

Stats.propTypes = {
  stats: PropTypes.shape({
    totalUsers: PropTypes.number.isRequired,
    totalAmount: PropTypes.string.isRequired,
    usersPerLevel: PropTypes.shape({}).isRequired,
  }).isRequired,
  fetchStatistics: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  stats: state.statistics.data,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchStatistics: Statistics.fetchRequest,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Stats)
