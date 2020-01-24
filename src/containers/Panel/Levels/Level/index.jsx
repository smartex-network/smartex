import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { Translate } from 'react-redux-i18n'

import cx from 'classnames'

import moment from 'moment'

import Button from 'components/Button'

import { Web3Service } from 'services'

import PathUtils from 'utils/path'
import { getPluralForm } from 'utils/i18n'
import { LEVELS_INFO } from 'constants/levels'

import styles from './styles.css'

const Level = ({
  selectedAccount, currentLevel, level, locale, onBuyLevel,
}) => {
  const info = LEVELS_INFO[level]
  const isNextLevel = (level - 1) === currentLevel
  const [ isBought, setIsBought ] = useState(false)
  const [ duration, setDuration ] = useState(0)
  const [ isActive, setIsActive ] = useState(false)

  const classes = cx(styles.level, {
    inactive: !isBought,
  })

  useEffect(() => {
    if (!selectedAccount) {
      return
    }

    Web3Service.getUserLevelExpiresAt(selectedAccount, level)
      .then(ts => {
        if (ts === 0) {
          return Promise.resolve()
        }

        setIsBought(true)

        const diffSeconds = moment.unix(ts).diff(moment(), 'seconds')

        let diffDays = moment.unix(ts).diff(moment(), 'days')

        if (diffSeconds > 0) {
          setIsActive(true)
        } else {
          diffDays += 36
        }

        return setDuration(diffDays)
      })
  }, [ selectedAccount ]) // eslint-disable-line

  const renderButton = () => {
    if (isBought && !isActive) {
      return (
        <Button onClick={ () => onBuyLevel(level) } color="blue" styleName="button">
          <Translate value="actions.activate" />
        </Button>
      )
    }

    if (isBought && !isNextLevel) {
      return (
        <Button onClick={ () => onBuyLevel(level) } color="white" styleName="button">
          <Translate value="actions.prolongate" />
        </Button>
      )
    }

    if (isNextLevel) {
      return (
        <Button onClick={ () => onBuyLevel(level) } color="blue" styleName="button">
          <Translate value="actions.buy" />
        </Button>
      )
    }

    if (!isBought && !isNextLevel) {
      return (
        <Button disabled color="white" styleName="button">
          <Translate value="actions.buy" />
        </Button>
      )
    }

    return null
  }

  const renderDuration = () => {
    if (!isBought) {
      return <Translate value="panel.days" count={ getPluralForm(locale, 36) } n="+36" />
    }

    if (!isActive) {
      return (
        <Translate
          value="panel.days"
          count={ getPluralForm(locale, duration) }
          n={ `${duration > 0 ? '+' : ''}${duration}` }
        />
      )
    }

    return <Translate value="panel.days" count={ getPluralForm(locale, duration) } n={ duration } />
  }

  return (
    <div className={ classes }>
      <div styleName="summary">
        <h5 styleName="heading">
          <Translate value="common.level" />
        </h5>

        <div styleName="level-icon">
          <img
            src={ PathUtils.getLevelImagePath((isBought || isNextLevel) && isActive ? 'active' : 'inactive', level) }
            alt={ `Level ${level}` }
          />
        </div>

        <div styleName="level-price">
          { `${info.price} ETH` }
        </div>

        <div styleName="level-duration">
          { renderDuration() }
        </div>

        <div styleName="action-button">
          { renderButton() }
        </div>
      </div>

      <div styleName="profit">
        <div styleName="profit-box">
          <span styleName="label">
            <Translate value="common.referrals" />
          </span>
          <span styleName="value">{ info.refsNum }</span>
        </div>
        <div styleName="profit-box">
          <span styleName="label">
            <Translate value="panel.income" />
          </span>
          <span styleName="value">{ `${info.income} ETH`}</span>
        </div>
      </div>
    </div>
  )
}

Level.propTypes = {
  selectedAccount: PropTypes.string,
  currentLevel: PropTypes.number,
  level: PropTypes.number.isRequired,
  locale: PropTypes.string.isRequired,
  onBuyLevel: PropTypes.func.isRequired,
}

Level.defaultProps = {
  selectedAccount: '',
  currentLevel: 0,
}

export default Level
