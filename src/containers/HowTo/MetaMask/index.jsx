import React from 'react'

import { Translate } from 'react-redux-i18n'

import PathUtils from 'utils/path'

import styles from '../common.css'

const MetaMask = () => (
  <>
    <h1 styleName="title">
      <Translate value="common.instruction.metamask" />
    </h1>

    <section styleName="section">
      <div className="row">
        <div className="col-12 col-md-7">
          <p>
            <Translate value="howTo.metamask.1" />
          </p>

          <p>
            <Translate value="howTo.metamask.2" link="https://metamask.io/" dangerousHTML />
          </p>

          <p>
            <Translate value="howTo.metamask.3" dangerousHTML />
          </p>
        </div>

        <div className="col-12 col-md-5">
          <img src={ PathUtils.getImagePath('how-to/metamask/1.png') } alt="MetaMask" />
        </div>
      </div>
    </section>

    <section styleName="section">
      <div className="row d-flex flex-row flex-md-row-reverse">
        <div className="col-12 col-md-7">
          <p>
            <Translate value="howTo.metamask.4" />
          </p>

          <p>
            <Translate value="howTo.metamask.5" dangerousHTML />
          </p>

          <p>
            <Translate value="howTo.metamask.6" dangerousHTML />
          </p>
        </div>

        <div className="col-12 col-md-5">
          <img src={ PathUtils.getImagePath('how-to/metamask/2.png') } alt="MetaMask Window" />
        </div>
      </div>
    </section>

    <section styleName="section">
      <div className="row">
        <div className="col-12 col-md-7">
          <p>
            <Translate value="howTo.metamask.7" dangerousHTML />
          </p>

          <p>
            <Translate value="howTo.metamask.8" />
          </p>
        </div>

        <div className="col-12 col-md-5">
          <img src={ PathUtils.getImagePath('how-to/metamask/3.png') } alt="MetaMask QR code" />
        </div>
      </div>
    </section>

    <section styleName="section">
      <div className="row d-flex flex-row flex-md-row-reverse">
        <div className="col-12 col-md-7">
          <p>
            <Translate value="howTo.metamask.9" class={ styles.note } dangerousHTML />
          </p>

          <p>
            <Translate value="howTo.metamask.10" />
          </p>
        </div>

        <div className="col-12 col-md-5">
          <img src={ PathUtils.getImagePath('how-to/metamask/4.png') } alt="MetaMask Connect" />
        </div>
      </div>
    </section>
  </>
)

export default MetaMask
