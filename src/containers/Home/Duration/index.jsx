import React from 'react'

import { Translate } from 'react-redux-i18n'

import PathUtils from 'utils/path'

import './styles.css'

const Duration = () => (
  <div styleName="duration">
    <div className="container">
      <div className="row">
        <div styleName="block-content" className="col-12 col-md-6">
          <img src={ PathUtils.getImagePath('36-days.png') } alt="36 days" />
        </div>

        <div styleName="block-content" className="col-12 col-md-6">
          <div styleName="heading">
            <Translate value="landing.duration.heading" />
          </div>

          <div styleName="description">
            <Translate value="landing.duration.description" />
          </div>

          <div styleName="remark">
            <Translate value="landing.duration.remark" />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Duration
