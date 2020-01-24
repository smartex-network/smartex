import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import map from 'lodash/map'

import { LEVELS_INFO } from 'constants/levels'

import Level from './Level'

import './styles.css'

const Levels = ({
  selectedAccount, user, locale, onBuyLevel,
}) => (
  <div styleName="levels">
    <div className="row">
      { map(LEVELS_INFO, (_, level) => (
        <div key={ level } className="col-md-6 col-lg-4 mb-5">
          <Level
            level={ ~~level }
            locale={ locale }
            currentLevel={ user.level }
            selectedAccount={ selectedAccount }
            onBuyLevel={ onBuyLevel }
          />
        </div>
      )) }
    </div>
  </div>
)

Levels.propTypes = {
  selectedAccount: PropTypes.string,
  user: PropTypes.shape({
    level: PropTypes.number,
  }).isRequired,
  locale: PropTypes.string.isRequired,
  onBuyLevel: PropTypes.func,
}

Levels.defaultProps = {
  selectedAccount: '',
  onBuyLevel: () => {},
}

const mapStateToProps = state => ({
  selectedAccount: state.auth.selectedAccount,
  user: state.user.data,
  locale: state.i18n.locale,
})

export default connect(mapStateToProps)(Levels)
