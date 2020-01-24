import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Translate } from 'react-redux-i18n'

import CopyToClipboard from 'react-copy-to-clipboard'

import Tooltipped from 'components/Tooltipped'
import Modal from 'components/Modal'
import Icon from 'components/Icon'

import PathUtils from 'utils/path'

import { CONTRACT_ADDRESS } from 'constants/ethereum'

import styles from './styles.css'

const BuyLevelModal = ({ show, price, onClose }) => {
  const [ copied, setCopied ] = useState(false)

  return (
    <Modal show={ show } onClose={ onClose }>
      <div styleName="buy-level-modal">
        <div styleName="send-manual">
          <div styleName="text">
            <Translate value="modals.buy.sendEth" price={ price } class={ styles.price } dangerousHTML />
          </div>
          <div styleName="contract-address">
            <Tooltipped styleName="address" show={ copied } onHide={ () => setCopied(false) }>
              { CONTRACT_ADDRESS }
            </Tooltipped>
            <CopyToClipboard text={ CONTRACT_ADDRESS } onCopy={ () => setCopied(true) }>
              <Icon icon="copy" styleName="copy-address" />
            </CopyToClipboard>
          </div>
        </div>

        <div styleName="divider">
          <Translate value="common.or" />
        </div>

        <div styleName="use-metamask">
          <img src={ PathUtils.getImagePath('metamask.png') } alt="MetaMask" />
          <Translate value="modals.buy.useMM" />
        </div>
      </div>
    </Modal>
  )
}

BuyLevelModal.propTypes = {
  show: PropTypes.bool,
  price: PropTypes.number,
  onClose: PropTypes.func,
}

BuyLevelModal.defaultProps = {
  show: false,
  price: null,
  onClose: () => {},
}

export default BuyLevelModal
