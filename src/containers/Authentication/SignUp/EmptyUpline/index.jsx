import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { Translate, I18n } from 'react-redux-i18n'

import Cookies from 'universal-cookie'

import Web3 from 'web3'

import { Web3Service } from 'services'

import Button from 'components/Button'

import { ROOT_WALLET } from 'constants/ethereum'

import './styles.css'

const EmptyUpline = ({ onInvitedBy, onSetUpline }) => {
  const [ inputValue, handleInputChange ] = useState('')
  const [ error, setError ] = useState()

  const handleManualUpline = async value => {
    setError(null)

    if (!value) {
      return setError(I18n.t('auth.errors.emptyID'))
    }

    if (!~~value && !Web3.utils.isAddress(value)) {
      return setError(I18n.t('auth.errors.invalidID'))
    }

    let address

    if (Web3.utils.isAddress(value)) {
      address = value
    } else {
      address = await Web3Service.getUserAddressByID(~~value)
    }

    if (!(await Web3Service.checkAddressRegistered(address))) {
      return setError(I18n.t('auth.errors.userNotFound'))
    }

    const user = await Web3Service.getUserByAddress(address)

    onInvitedBy(user.id)

    return onSetUpline(address)
  }

  useEffect(() => {
    const cookie = new Cookies()
    const refID = cookie.get('refID')

    if (refID) {
      onInvitedBy(refID)
      handleManualUpline(refID)
    }
  }, [])  // eslint-disable-line

  return (
    <>
      <div styleName="input-wrapper">
        <input
          type="text"
          placeholder={ I18n.t('auth.ethOrIdUpline') }
          value={ inputValue }
          onChange={ e => {
            setError(null)
            handleInputChange(e.target.value)
          } }
        />
        { error && (
          <span styleName="error">{ error }</span>
        )}
      </div>

      <Button color="blue" styleName="button" onClick={ () => handleManualUpline(inputValue) }>
        <Translate value="actions.done" />
      </Button>
      <Button color="blue" empty styleName="button" onClick={ () => onSetUpline(ROOT_WALLET) }>
        <Translate value="actions.findUpline" />
      </Button>
    </>
  )
}

EmptyUpline.propTypes = {
  onInvitedBy: PropTypes.func.isRequired,
  onSetUpline: PropTypes.func.isRequired,
}

export default EmptyUpline
