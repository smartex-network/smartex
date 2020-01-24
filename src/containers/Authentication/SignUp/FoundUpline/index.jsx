import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Translate } from 'react-redux-i18n'

import { CopyToClipboard } from 'react-copy-to-clipboard'

import { Web3Service } from 'services'

import Modal from 'components/Modal'
import TabBar from 'components/TabBar'
import Button from 'components/Button'
import Icon from 'components/Icon'
import Tooltipped from 'components/Tooltipped'

import { CONTRACT_ADDRESS } from 'constants/ethereum'

import './styles.css'

const FoundUpline = ({
  processing, invitedBy, upline, onRegistration,
}) => {
  const [ showModal, setShowModal ] = useState()
  const [ activeTab, switchTab ] = useState('auto')

  const [ copiedTo, setCopiedTo ] = useState(false)
  const [ copiedAmount, setCopiedAmount ] = useState(false)
  const [ copiedUpline, setCopiedUpline ] = useState(false)

  const handleRegistration = async () => {
    if (!Web3Service.isMetaMask()) {
      return setShowModal(true)
    }

    return onRegistration()
  }

  return (
    <>
      <TabBar styleName="tab-bar" value={ activeTab } onChange={ switchTab }>
        <TabBar.Tab _key="auto">
          <Translate value="auth.automatically" />
        </TabBar.Tab>
        <TabBar.Tab _key="manual">
          <Translate value="auth.manually" />
        </TabBar.Tab>
      </TabBar>
      <div styleName="content">
        { activeTab === 'auto' && (
        <>
          { invitedBy && (
            <div styleName="invited-by">
              <Translate value="auth.invitedBy" id={ invitedBy } />
            </div>
          ) }
          <Button disabled={ processing } styleName="button" color="blue" onClick={ handleRegistration }>
            <Translate value="actions.signUp" />
          </Button>
        </>
        ) }
        { activeTab === 'manual' && (
        <>
          <div styleName="short-description">
            <Translate value="auth.reg.description" />
          </div>
          <div styleName="manual-box">
            <span styleName="label">
              <Translate value="auth.reg.whom" />
            </span>
            <span styleName="value">
              <Tooltipped styleName="copy-text" show={ copiedTo } onHide={ () => setCopiedTo(false) }>
                { CONTRACT_ADDRESS }
              </Tooltipped>
              <CopyToClipboard text={ CONTRACT_ADDRESS } onCopy={ () => setCopiedTo(true) }>
                <Icon styleName="copy-icon" icon="copy" />
              </CopyToClipboard>
            </span>
          </div>
          <div styleName="manual-box">
            <span styleName="label">
              <Translate value="auth.reg.amount" />
            </span>
            <span styleName="value">
              <Tooltipped styleName="copy-text" show={ copiedAmount } onHide={ () => setCopiedAmount(false) }>
                0.5
              </Tooltipped>
              <CopyToClipboard text="0.5" onCopy={ () => setCopiedAmount(true) }>
                <Icon styleName="copy-icon" icon="copy" />
              </CopyToClipboard>
            </span>
          </div>
          <div styleName="manual-box">
            <span styleName="label">
              <Translate value="auth.reg.input" />
            </span>
            <span styleName="value">
              <Tooltipped styleName="copy-text" show={ copiedUpline } onHide={ () => setCopiedUpline(false) }>
                {upline}
              </Tooltipped>
              <CopyToClipboard text={ upline } onCopy={ () => setCopiedUpline(true) }>
                <Icon styleName="copy-icon" icon="copy" />
              </CopyToClipboard>
            </span>
          </div>
        </>
        ) }
      </div>

      <Modal show={ showModal } onClose={ () => setShowModal(false) }>
        <div styleName="install-metamask">
          <Translate value="auth.installMM" link="https://metamask.io/" dangerousHTML />
        </div>
      </Modal>
    </>
  )
}

FoundUpline.propTypes = {
  invitedBy: PropTypes.string,
  processing: PropTypes.bool.isRequired,
  upline: PropTypes.string.isRequired,
  onRegistration: PropTypes.func.isRequired,
}

FoundUpline.defaultProps = {
  invitedBy: null,
}

export default FoundUpline
