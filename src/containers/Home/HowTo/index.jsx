import React from 'react'

import { Link } from 'react-router-dom'
import { Translate } from 'react-redux-i18n'

import './styles.css'

const HowTo = () => (
  <div styleName="how-to">
    <div className="container">
      <h2 styleName="title">
        <Translate value="landing.howTo.title" />
      </h2>

      <h4 styleName="subtitle">
        <Translate value="landing.howTo.subtitle" />
      </h4>

      <div styleName="steps">
        <div styleName="ethereum-link">
          <Link to="/faq/ethereum">
            <Translate value="landing.howTo.link" />
          </Link>
        </div>

        <div className="row">
          <div styleName="step" className="col-12 col-md-6">
            <div styleName="step-inner">
              <div styleName="number">1</div>

              <div styleName="description">
                <Translate value="landing.howTo.steps.1" />
              </div>
            </div>
          </div>

          <div styleName="step" className="col-12 col-md-6">
            <div styleName="step-inner">
              <div styleName="number">2</div>

              <div styleName="description">
                <Translate value="landing.howTo.steps.2" />
              </div>
            </div>
          </div>

          <div styleName="step" className="col-12 col-md-6">
            <div styleName="step-inner">
              <div styleName="number">3</div>

              <div styleName="description">
                <Translate value="landing.howTo.steps.3" />
              </div>
            </div>
          </div>

          <div styleName="step" className="col-12 col-md-6">
            <div styleName="step-inner">
              <div styleName="number">4</div>

              <div styleName="description">
                <Translate value="landing.howTo.steps.4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default HowTo
