import React from 'react'

import { Translate } from 'react-redux-i18n'

import PathUtils from 'utils/path'

import '../common.css'

const TrustWallet = () => (
  <>
    <h1 styleName="title">
      <Translate value="common.instruction.trustwallet" />
    </h1>

    <section styleName="section">
      <div className="mb-5">
        <img src={ PathUtils.getImagePath('how-to/trustwallet/1.png') } alt="Trust Wallet" />
      </div>

      <div>
        <p>
          <Translate value="howTo.trustwallet.1" link="https://trustwallet.com/" dangerousHTML />
        </p>

        <p>
          <Translate value="howTo.trustwallet.2" />
        </p>

        <p>
          <Translate value="howTo.trustwallet.3" />
        </p>

        <p>
          <Translate value="howTo.trustwallet.4" />
        </p>

        <p>
          <Translate value="howTo.trustwallet.5" dangerousHTML />
        </p>

        <p>
          <Translate value="howTo.trustwallet.6" />
        </p>
      </div>
    </section>
  </>
)

export default TrustWallet
