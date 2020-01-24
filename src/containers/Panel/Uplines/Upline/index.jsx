import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { Translate } from 'react-redux-i18n'

import Svg from 'components/Svg'
import Address from 'components/Address'

import { Web3Service } from 'services'

import PathUtils from 'utils/path'

import './styles.css'

const Upline = ({ selectedAccount, level }) => {
  const [ uplineAddress, setUplineAddress ] = useState('')
  const [ uplineID, setUplineID ] = useState('')

  useEffect(() => {
    Web3Service.getUserUpline(selectedAccount, level)
      .then(address => {
        setUplineAddress(address)

        return Web3Service.getUserByAddress(address)
      })
      .then(({ id }) => setUplineID(id))
  }, [ selectedAccount, level ])

  return (
    <div styleName="upline">
      <div styleName="heading">
        <div styleName="icon">
          <Svg src={ PathUtils.getImagePath(`uplines/${level}.svg`) } />
        </div>

        <div styleName="text">
          <Translate value="panel.levelUpline" level={ level } />
        </div>
      </div>

      <div styleName="info">
        <span styleName="label">ID:</span>
        <span styleName="value">{ uplineID }</span>

        <span styleName="label">
          <Translate value="common.address" />
          :
        </span>
        <span styleName="value">
          <Address address={ uplineAddress } />
        </span>
      </div>
    </div>
  )
}

Upline.propTypes = {
  selectedAccount: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
}

export default Upline
