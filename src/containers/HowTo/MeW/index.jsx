import React from 'react'

import { Translate } from 'react-redux-i18n'

import PathUtils from 'utils/path'

import styles from '../common.css'

const MeW = () => (
  <>
    <h1 styleName="title">
      <Translate value="common.instruction.mew" />
    </h1>

    <section styleName="section">
      <p>
        <Translate value="howTo.mew.1" link="https://www.myetherwallet.com/" dangerousHTML />
      </p>
    </section>

    <section styleName="section">
      <div className="row">
        <div className="col-12 col-md-7">
          <p styleName="heading">
            <Translate value="howTo.mew.2" />
          </p>

          <p>
            <span styleName="note">
              <Translate value="howTo.mew.step" step="1" />
            </span>
            { ' ' }
            <Translate value="howTo.mew.3" />
          </p>

          <p>
            <span styleName="note">
              <Translate value="howTo.mew.step" step="2" />
            </span>
            { ' ' }
            <Translate value="howTo.mew.4" dangerousHTML />
          </p>

          <p>
            <span styleName="note">
              <Translate value="howTo.mew.step" step="3" />
            </span>
            { ' ' }
            <Translate value="howTo.mew.5" />
          </p>

          <br />

          <p>
            <Translate value="howTo.mew.6" />
          </p>

          <br />

          <p>
            <span styleName="note">
              <Translate value="howTo.mew.step" step="4" />
            </span>
            { ' ' }
            <Translate value="howTo.mew.7" />
          </p>

          <p>
            <span styleName="note">
              <Translate value="howTo.mew.step" step="5" />
            </span>
            { ' ' }
            <Translate value="howTo.mew.8" dangerousHTML />
          </p>

          <p>
            <Translate value="howTo.mew.9" />
          </p>
        </div>

        <div className="col-12 col-md-5">
          <img styleName="mew" src={ PathUtils.getImagePath('how-to/myetherwallet/1.png') } alt="MyEtherWallet" />
        </div>
      </div>
    </section>

    <section styleName="section">
      <div className="row d-flex flex-row flex-md-row-reverse">
        <div className="col-12 col-md-7">
          <p styleName="heading">
            <Translate value="howTo.mew.10" />
          </p>

          <p>
            <span styleName="note">
              <Translate value="howTo.mew.step" step="1" />
            </span>
            { ' ' }
            <Translate value="howTo.mew.11" dangerousHTML />
          </p>

          <p>
            <span styleName="note">
              <Translate value="howTo.mew.step" step="2" />
            </span>
            { ' ' }
            <Translate value="howTo.mew.12" dangerousHTML />
          </p>

          <p>
            <span styleName="note">
              <Translate value="howTo.mew.step" step="3" />
            </span>
            { ' ' }
            <Translate value="howTo.mew.13" dangerousHTML />
          </p>

          <p>
            <span styleName="note">
              <Translate value="howTo.mew.step" step="4" />
            </span>
            { ' ' }
            <Translate value="howTo.mew.14" />
          </p>

          <p>
            <span styleName="note">
              <Translate value="howTo.mew.step" step="5" />
            </span>
            { ' ' }
            <Translate value="howTo.mew.15" />
          </p>

          <p>
            <Translate value="howTo.mew.16" />
          </p>

          <p>
            <Translate value="howTo.mew.17" />
          </p>
        </div>

        <div className="col-12 col-md-5">
          <img styleName="mew" src={ PathUtils.getImagePath('how-to/myetherwallet/2.png') } alt="MyEtherWallet backup" />
        </div>
      </div>
    </section>

    <section styleName="section">
      <div className="row">
        <div className="col-12 col-md-7">
          <p styleName="heading">
            <Translate value="howTo.mew.18" />
          </p>

          <p>
            <span styleName="note">
              <Translate value="howTo.mew.step" step="1" />
            </span>
            { ' ' }
            <Translate value="howTo.mew.19" />
          </p>

          <p>
            <span styleName="note">
              <Translate value="howTo.mew.step" step="2" />
            </span>
            { ' ' }
            <Translate value="howTo.mew.20" link="https://mewconnect.myetherwallet.com" dangerousHTML />
          </p>

          <p>
            <span styleName="note">
              <Translate value="howTo.mew.step" step="3" />
            </span>
            { ' ' }
            <Translate value="howTo.mew.21" dangerousHTML />
          </p>

          <p>
            <span styleName="note">
              <Translate value="howTo.mew.step" step="4" />
            </span>
            { ' ' }
            <Translate value="howTo.mew.22" dangerousHTML />
          </p>

          <p>
            <span styleName="note">
              <Translate value="howTo.mew.step" step="5" />
            </span>
            { ' ' }
            <Translate value="howTo.mew.23" dangerousHTML />
          </p>

          <p>
            <span styleName="note">
              <Translate value="howTo.mew.step" step="6" />
            </span>
            { ' ' }
            <Translate value="howTo.mew.24" />
          </p>

          <p>
            <Translate value="howTo.mew.25" />
          </p>
        </div>

        <div className="col-12 col-md-5">
          <img styleName="mew" src={ PathUtils.getImagePath('how-to/myetherwallet/3.png') } alt="MyEtherWallet QR code" />
        </div>
      </div>
    </section>

    <section styleName="section">
      <div>
        <p styleName="heading">
          <Translate value="howTo.mew.26" />
        </p>

        <p>
          <Translate value="howTo.mew.27" class={ styles.note } dangerousHTML />
        </p>

        <p>
          <Translate value="howTo.mew.28" link="https://myetherwallet.com" dangerousHTML />
        </p>

        <p>
          <Translate value="howTo.mew.29" dangerousHTML />
        </p>

        <p>
          <Translate value="howTo.mew.30" dangerousHTML />
        </p>

        <p>
          <Translate value="howTo.mew.31" dangerousHTML />
        </p>
      </div>

      <img src={ PathUtils.getImagePath('how-to/myetherwallet/4.png') } alt="MyEtherWallet QR code" />
    </section>
  </>
)

export default MeW
