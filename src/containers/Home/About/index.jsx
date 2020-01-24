import React from 'react'

import { Translate } from 'react-redux-i18n'

import Svg from 'components/Svg'

import PathUtils from 'utils/path'

import './styles.css'

const About = () => (
  <div styleName="about">
    <div className="container">
      <h2 styleName="title">
        <Translate value="landing.about.title" />
      </h2>

      <div className="row">
        <div className="col-12 col-md-6">
          <div styleName="about-content-left">
            <div styleName="heading">
              <Translate value="landing.about.heading" />
            </div>

            <div styleName="description">
              <Translate value="landing.about.description" />
            </div>
          </div>
        </div>

        <div styleName="about-content-right" className="col-12 col-md-6">
          <div className="row">
            <div styleName="advantage" className="col-6">
              <div styleName="icon">
                <Svg src={ PathUtils.getImagePath('about-project/shield.svg') } />
              </div>
              <div styleName="text">
                <Translate value="landing.about.advantages.security" />
              </div>
            </div>
            <div styleName="advantage" className="col-6">
              <div styleName="icon">
                <Svg src={ PathUtils.getImagePath('about-project/oval-2.svg') } />
              </div>
              <div styleName="text">
                <Translate value="landing.about.advantages.investments" />
              </div>
            </div>
          </div>
          <div className="row">
            <div styleName="advantage" className="col-6">
              <div styleName="icon">
                <Svg src={ PathUtils.getImagePath('about-project/oval-3.svg') } />
              </div>
              <div styleName="text">
                <Translate value="landing.about.advantages.team" />
              </div>
            </div>
            <div styleName="advantage" className="col-6">
              <div styleName="icon">
                <Svg src={ PathUtils.getImagePath('about-project/oval-1.svg') } />
              </div>
              <div styleName="text">
                <Translate value="landing.about.advantages.join" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div styleName="image-wrapper">
        <img src={ PathUtils.getImagePath('notebook.png') } alt="Notebook" />
      </div>
    </div>
  </div>
)

export default About
