import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { CopyToClipboard } from 'react-copy-to-clipboard'

import Tooltipped from 'components/Tooltipped'
import Icon from 'components/Icon'

import './styles.css'

const Address = ({ address }) => {
  const [ copied, setCopied ] = useState(false)

  return (
    <Tooltipped styleName="address" show={ copied } onHide={ () => setCopied(false) }>
      <a href={ `https://etherscan.io/address/${address}` } target="_blank" rel="noopener noreferrer">
        { address }
      </a>
      <CopyToClipboard text={ address } onCopy={ () => setCopied(true) }>
        <Icon styleName="copy-address" icon="copy" />
      </CopyToClipboard>
    </Tooltipped>
  )
}

Address.propTypes = {
  address: PropTypes.string.isRequired,
}

export default Address
