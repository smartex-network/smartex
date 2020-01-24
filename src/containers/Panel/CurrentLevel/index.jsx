import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { Translate } from 'react-redux-i18n'

import { CopyToClipboard } from 'react-copy-to-clipboard'

import Modal from 'components/Modal'
import Button from 'components/Button'
import Icon from 'components/Icon'
import Tooltipped from 'components/Tooltipped'

import PathUtils from 'utils/path'
import UrlUtils from 'utils/url'

import { CONTRACT_ADDRESS } from 'constants/ethereum'

import './styles.css'

const CurrentLevel = ({
  user, locale, onBuyLevel,
}) => {
  const [ showModal, setShowModal ] = useState()
  const [ copied, setCopied ] = useState(false)

  return (
    <div styleName="current-level" className="my-4">
      <div styleName="level-info">
        <div styleName="level-icon">
          <img src={ PathUtils.getImagePath('logo.png') } alt="Smartex" />
        </div>
        <div styleName="level">
          <span styleName="value">
            <Translate value="common.levelNum" level={ user.level } />
          </span>
          <span styleName="label">
            <Translate value="panel.currentLevel" />
          </span>
        </div>
      </div>

      <div styleName="buttons">
        <Button
          styleName="action-button"
          color="white"
          tag="a"
          href={ `https://etherscan.io/address/${CONTRACT_ADDRESS}` }
          target="_blank"
          rel="noopener noreferrer"
        >
          <Translate value="common.smart" />
        </Button>
        <Button styleName="action-button" color="white" onClick={ () => setShowModal(true) }>
          <Translate value="actions.shareLink" />
        </Button>
        <Button onClick={ () => onBuyLevel(user.level + 1) } disabled={ user.level === 6 } styleName="action-button" color="black">
          <Translate value="actions.levelUp" />
        </Button>
      </div>

      <Modal show={ showModal } onClose={ () => setShowModal(false) }>
        <div styleName="ref-link-modal">
          <Translate value="panel.copyRefLink" />

          <Tooltipped styleName="ref-link" show={ copied } onHide={ () => setCopied(false) }>
            <div styleName="copy-text">{ UrlUtils.createRefLink(user.id, window.location, locale) }</div>

            <CopyToClipboard
              text={ UrlUtils.createRefLink(user.id, window.location, locale) }
              onCopy={ () => setCopied(true) }
            >
              <Icon styleName="copy-icon" icon="copy" />
            </CopyToClipboard>
          </Tooltipped>
        </div>
      </Modal>
    </div>
  )
}

CurrentLevel.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    level: PropTypes.number,
  }).isRequired,
  locale: PropTypes.string.isRequired,
  onBuyLevel: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  user: state.user.data,
  locale: state.i18n.locale,
})

export default connect(mapStateToProps)(CurrentLevel)
